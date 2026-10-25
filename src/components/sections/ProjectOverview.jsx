import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES, PROJECT } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectOverview() {
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const textPanelRef = useRef(null);
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
            end: '+=200%',
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1: Zoom in — camera approaches building
        tl.to(imageRef.current, {
          scale: 1.18,
          duration: 1,
          ease: 'none',
        }, 0);

        // Phase 2: Slight de-zoom + image moves right + shrinks
        tl.to(imageWrapRef.current, {
          width: '48%',
          right: '0%',
          left: 'auto',
          duration: 1.5,
          ease: 'power2.inOut',
        }, 0.8);

        tl.to(imageRef.current, {
          scale: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        }, 0.8);

        // Phase 3: Text panel slides in from left
        tl.from(textPanelRef.current, {
          opacity: 0,
          xPercent: -8,
          duration: 1.2,
          ease: 'power3.out',
        }, 1.2);

        tl.from('.overview-text-child', {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        }, 1.4);

      }, sectionRef);

      return () => ctx.revert();
    });

    // Mobile — simpler, no pin
    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.overview-text-child', {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textPanelRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: false,
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
      id="residence"
      aria-label="Project Overview"
      style={{ background: 'var(--color-dark)' }}
    >
      {/* ── PINNED CINEMATIC TRANSITION (desktop) ── */}
      <div
        ref={pinnedRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100dvh', minHeight: '600px' }}
      >
        {/* Image wrapper — starts full screen, transitions to right */}
        <div
          ref={imageWrapRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ willChange: 'width, left, right' }}
        >
          <img
            ref={imageRef}
            src={IMAGES.sectionA}
            alt={IMAGES.sectionAlt}
            className="w-full h-full object-cover origin-center"
            style={{ willChange: 'transform', transformOrigin: '60% 50%' }}
            loading="lazy"
            decoding="async"
          />
          {/* Gradient from left for text legibility */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)' }}
          />
          {/* Subtle color grade */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,18,10,0.1)', mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Text panel — enters from left */}
        <div
          ref={textPanelRef}
          className="absolute left-0 top-0 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20"
          style={{
            width: 'min(48%, 560px)',
            background: 'linear-gradient(to right, rgba(13,13,13,0.97) 70%, transparent 100%)',
            zIndex: 2,
          }}
        >
          <div className="max-w-[440px]">
            <SectionLabel number="01" text="The Residence" className="overview-text-child mb-8" />

            <h2
              className="overview-text-child font-editorial leading-none mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--color-ivory)',
                letterSpacing: '-0.01em',
              }}
            >
              A New Standard of{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Living</em>
            </h2>

            <div
              className="overview-text-child h-[1px] mb-6"
              style={{ background: 'rgba(200,190,180,0.15)' }}
            />

            <p className="overview-text-child font-sans text-sm text-[var(--color-stone)] leading-relaxed mb-8">
              Aurelia Residences represents a singular vision — where every line, material, 
              and vista has been considered with the precision of a master craftsman. 
              An architectural statement that will define a generation.
            </p>

            <div className="overview-text-child grid grid-cols-2 gap-6 mb-10">
              {[
                { value: '[TBC]', label: 'Exclusive Residences' },
                { value: '[TBC]', label: 'Floors of Living' },
                { value: '3', label: 'Residence Collections' },
                { value: '24/7', label: 'White-Glove Service' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-editorial text-3xl"
                    style={{ color: 'var(--color-accent)', fontWeight: 300 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-display text-[0.58rem] tracking-[0.18em] uppercase mt-1"
                    style={{ color: 'var(--color-concrete)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="overview-text-child btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Request a private viewing"
            >
              Request a Private Viewing
              <span style={{ color: 'var(--color-accent)' }}>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile fallback — stacked layout ── */}
      <div
        className="md:hidden px-6 py-16"
        style={{ background: 'var(--color-dark)' }}
      >
        <SectionLabel number="01" text="The Residence" className="overview-text-child mb-8" />
        <h2
          className="overview-text-child font-editorial mb-6"
          style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 300, color: 'var(--color-ivory)' }}
        >
          A New Standard of <em style={{ color: 'var(--color-accent)' }}>Living</em>
        </h2>
        <p className="overview-text-child font-sans text-sm text-[var(--color-stone)] leading-relaxed mb-8">
          Aurelia Residences represents a singular vision — where every line, material,
          and vista has been considered with the precision of a master craftsman.
        </p>
        <button
          className="overview-text-child btn-primary"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request a Private Viewing →
        </button>
      </div>
    </section>
  );
}
