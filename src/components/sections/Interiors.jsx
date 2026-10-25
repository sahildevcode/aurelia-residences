import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Interiors() {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Parallax zoom on main interior
      gsap.fromTo(
        image1Ref.current,
        { scale: 1.15, yPercent: -5 },
        {
          scale: 1,
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Parallax offset on secondary interior
      gsap.fromTo(
        image2Ref.current,
        { y: 60 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Text stagger reveal
      gsap.from('.interior-reveal', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="interiors"
      className="relative py-28 md:py-36 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: 'var(--color-dark)' }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual Composition (Left side 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden aspect-[4/3] rounded-sm">
              <img
                ref={image1Ref}
                src={IMAGES.interior1}
                alt={IMAGES.interior1Alt}
                className="w-full h-full object-cover origin-center"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Overlapping floating detail image */}
            <div
              ref={image2Ref}
              className="hidden md:block absolute -bottom-10 -right-8 w-1/2 aspect-[4/5] overflow-hidden border border-[rgba(200,190,180,0.15)] shadow-2xl z-10"
              style={{ background: 'var(--color-charcoal)' }}
            >
              <img
                src={IMAGES.interior2}
                alt={IMAGES.interior2Alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Editorial Content (Right side 5 cols) */}
          <div ref={textRef} className="lg:col-span-5 lg:pl-8">
            <SectionLabel number="03" text="Interior Architecture" className="interior-reveal mb-6" />

            <h2
              className="interior-reveal font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight mb-8"
            >
              Quiet Splendor, <br />
              <em className="italic text-[var(--color-accent)] font-serif">Uncompromising</em> Restraint.
            </h2>

            <div className="interior-reveal h-[1px] w-20 bg-[var(--color-accent)] mb-8" />

            <p className="interior-reveal font-sans text-sm text-[var(--color-stone)] leading-relaxed mb-6">
              Interiors are envisioned as expansive sanctuaries where natural daylight cascades across
              honed marble, brushed bronze, and bespoke European timber millwork. Floor-to-ceiling glass
              dissolves the barrier between private refuge and sweeping vistas.
            </p>

            <p className="interior-reveal font-sans text-xs text-[var(--color-concrete)] leading-relaxed mb-10">
              Each residence features custom acoustic isolation, circadian architectural lighting profiles,
              and seamless transitions engineered for a calm, restorative lifestyle.
            </p>

            <div className="interior-reveal grid grid-cols-2 gap-6 pt-6 border-t border-[rgba(200,190,180,0.1)]">
              <div>
                <span className="font-editorial text-2xl text-[var(--color-ivory)] block">3.6m – 4.2m</span>
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase">
                  Ceiling Heights
                </span>
              </div>
              <div>
                <span className="font-editorial text-2xl text-[var(--color-ivory)] block">Custom</span>
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase">
                  Italian Cabinetry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
