import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);
  const imageRef = useRef(null);
  const imgWrapRef = useRef(null);
  const textRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedRef.current,
            pin: true,
            start: 'top top',
            end: '+=180%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Image starts small-center, zooms into full
        tl.from(imageRef.current, {
          scale: 0.75,
          duration: 1.2,
          ease: 'power2.inOut',
        }, 0);

        // Image moves LEFT (reversal of section A)
        tl.to(imgWrapRef.current, {
          width: '50%',
          left: '0',
          right: 'auto',
          duration: 1.5,
          ease: 'power2.inOut',
        }, 0.6);

        // Close-up zoom effect
        tl.to(imageRef.current, {
          scale: 1.12,
          transformOrigin: '50% 70%',
          duration: 1.5,
          ease: 'power1.inOut',
        }, 0.6);

        // Text enters from right
        tl.from(textRef.current, {
          opacity: 0,
          xPercent: 6,
          duration: 1.2,
          ease: 'power3.out',
        }, 1);

        tl.from('.arch-text-child', {
          opacity: 0,
          y: 25,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
        }, 1.2);

      }, sectionRef);

      return () => ctx.revert();
    });

    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.arch-text-child', {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      aria-label="Architecture"
      style={{ background: 'var(--color-charcoal)' }}
    >
      {/* Desktop — pinned section B: image LEFT, text RIGHT */}
      <div
        ref={pinnedRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100dvh', minHeight: '600px' }}
      >
        {/* Image — starts centered, moves left */}
        <div
          ref={imgWrapRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ willChange: 'width, left' }}
        >
          <img
            ref={imageRef}
            src={IMAGES.sectionC}
            alt={IMAGES.sectionCAlt}
            className="w-full h-full object-cover"
            style={{ willChange: 'transform', transformOrigin: '50% 70%' }}
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, rgba(38,34,30,0.97) 0%, rgba(38,34,30,0.5) 40%, transparent 70%)' }}
          />
        </div>

        {/* Text panel — right side */}
        <div
          ref={textRef}
          className="absolute right-0 top-0 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20"
          style={{
            width: 'min(50%, 580px)',
            zIndex: 2,
          }}
        >
          <div className="max-w-[460px] ml-auto">
            <SectionLabel number="02" text="Architecture" className="arch-text-child mb-8" />

            <h2
              className="arch-text-child font-editorial leading-none mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300, color: 'var(--color-ivory)' }}
            >
              Crafted in the{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Language</em>
              {' '}of Light
            </h2>

            <div className="arch-text-child h-[1px] mb-6" style={{ background: 'rgba(200,190,180,0.15)' }} />

            <p className="arch-text-child font-sans text-sm text-[var(--color-stone)] leading-relaxed mb-6">
              Conceived by a visionary architectural practice, Aurelia's facade is a 
              dialogue between light and structure — a curtain of glass and precision-engineered 
              steel that transforms the tower into a living, breathing canvas as the sun moves through the day.
            </p>

            <p className="arch-text-child font-sans text-sm text-[var(--color-concrete)] leading-relaxed mb-10">
              Every angle was considered. Every setback deliberate. The architectural language 
              speaks of permanence — a monument to the art of living.
            </p>

            <div className="arch-text-child space-y-4">
              {[
                "Double-glazed low-e glass curtain wall",
                "Engineered structural steel silhouette",
                "Thermally broken window systems",
                "Bespoke facade materiality — stone & steel",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'var(--color-accent)' }}
                  />
                  <span className="font-sans text-xs text-[var(--color-stone)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architectural concept bar */}
      <div
        className="px-6 md:px-20 py-16 border-t"
        style={{ borderColor: 'rgba(200,190,180,0.08)' }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "I",
              title: "Structural Integrity",
              desc: "A reinforced concrete core engineered for longevity, clad in materials chosen to endure generations.",
            },
            {
              number: "II",
              title: "Spatial Precision",
              desc: "Floor plans developed through rigorous architectural analysis, maximising natural light and spatial flow.",
            },
            {
              number: "III",
              title: "Material Excellence",
              desc: "Every surface, joint, and threshold finished to the exacting standards of luxury craft.",
            },
          ].map((item) => (
            <div key={item.number} className="arch-text-child border-t pt-8" style={{ borderColor: 'rgba(200,190,180,0.12)' }}>
              <div
                className="font-editorial text-5xl mb-4"
                style={{ color: 'rgba(184,147,90,0.2)', fontWeight: 300 }}
              >
                {item.number}
              </div>
              <h3
                className="font-editorial text-xl mb-3"
                style={{ color: 'var(--color-ivory)', fontWeight: 300 }}
              >
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[var(--color-concrete)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
