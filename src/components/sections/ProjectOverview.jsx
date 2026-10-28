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
      {/* ── CINEMATIC TRANSITION (Desktop pinned, Mobile responsive) ── */}
      <div
        ref={pinnedRef}
        className="relative w-full overflow-hidden min-h-[640px] md:h-[100dvh] flex flex-col justify-end md:block"
      >
        {/* Image wrapper — starts full screen, transitions to right on desktop */}
        <div
          ref={imageWrapRef}
          className="absolute inset-0 md:top-0 md:left-0 md:w-full md:h-full overflow-hidden"
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
          {/* Mobile dark vignette for crystal-clear readability */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                'linear-gradient(to top, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.85) 60%, rgba(13,13,13,0.35) 100%)',
            }}
          />
          {/* Subtle color grade */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,18,10,0.1)', mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Text panel — full width on phone, 48% split panel on desktop */}
        <div
          ref={textPanelRef}
          className="relative z-10 w-full px-6 pt-16 pb-14 md:p-0 md:absolute md:left-0 md:top-0 md:h-full md:flex md:flex-col md:justify-center md:px-16 lg:px-20 md:w-[min(48%,560px)]"
          style={{
            zIndex: 2,
          }}
        >
          {/* Desktop gradient overlay */}
          <div
            className="hidden md:block absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(13,13,13,0.97) 70%, transparent 100%)',
            }}
          />

          <div className="w-full md:max-w-[440px]">
            <SectionLabel number="01" text="The Residence" className="overview-text-child mb-4 md:mb-8" />

            <h2
              className="overview-text-child font-editorial leading-tight mb-4 md:mb-6"
              style={{
                fontSize: 'clamp(2.1rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--color-ivory)',
                letterSpacing: '-0.01em',
              }}
            >
              A New Standard of{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Living</em>
            </h2>

            <div
              className="overview-text-child h-[1px] mb-5 md:mb-6"
              style={{ background: 'rgba(200,190,180,0.15)' }}
            />

            <p className="overview-text-child font-sans text-xs md:text-sm text-[var(--color-stone)] leading-relaxed mb-6 md:mb-8">
              Soni Financial Services represents a singular vision — where every line, material, 
              and vista has been considered with the precision of a master craftsman. 
              An architectural statement that will define a generation.
            </p>

            <div className="overview-text-child grid grid-cols-2 gap-3 md:gap-6 mb-7 md:mb-10">
              {[
                { value: '[TBC]', label: 'Exclusive Residences' },
                { value: '[TBC]', label: 'Floors of Living' },
                { value: '3', label: 'Residence Collections' },
                { value: '24/7', label: 'White-Glove Service' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 md:p-0 rounded-xs border md:border-none border-[rgba(200,190,180,0.1)] bg-[rgba(13,13,13,0.5)] md:bg-transparent"
                >
                  <div
                    className="font-editorial text-2xl md:text-3xl"
                    style={{ color: 'var(--color-accent)', fontWeight: 300 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-display text-[0.52rem] md:text-[0.58rem] tracking-[0.16em] uppercase mt-1"
                    style={{ color: 'var(--color-concrete)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="overview-text-child btn-primary w-full md:w-auto justify-center"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Request a private viewing"
            >
              Request a Private Viewing
              <span style={{ color: 'var(--color-accent)' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
