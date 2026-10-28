import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { PROJECT, IMAGES } from '../../config/projectData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const locationRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // ── Entrance: text stagger reveal ──
      const tl = gsap.timeline({ delay: 0.8 });

      tl.from('.hero-label', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          '.hero-title-line',
          {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power4.out',
          },
          '-=0.4'
        )
        .from(
          '.hero-sub',
          {
            opacity: 0,
            y: 24,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-location',
          {
            opacity: 0,
            y: 16,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        );

      // ── Hero image ken-burns ──
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 12,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });

      // ── Parallax on scroll ──
      gsap.to(imageRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── Text fade out on scroll ──
      gsap.to(['.hero-content'], {
        opacity: 0,
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '40% top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const scrollToNext = () => {
    const next = document.querySelector('#residence');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="From Nobody — Hero"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          className="w-full h-full object-cover origin-center"
          style={{ willChange: 'transform' }}
          fetchPriority="high"
          decoding="auto"
        />
        {/* Dark overlay — gradient from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.35) 45%, rgba(13,13,13,0.15) 70%, transparent 100%)',
          }}
        />
        {/* Top vignette for nav legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, transparent 25%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="hero-content relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-20"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Status label */}
        <div className="hero-label mb-6">
          <span className="section-label">{PROJECT.status}</span>
          <span className="inline-block w-8 h-[1px] bg-[var(--color-accent)] mx-3 align-middle" />
          <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-stone)]">
            {PROJECT.year}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-editorial overflow-hidden" style={{ lineHeight: 0.9 }}>
          {['SONI', 'FINANCIAL'].map((word, i) => (
            <div key={i} className="clip-hidden">
              <span
                className="hero-title-line block"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 9.5rem)',
                  fontWeight: 300,
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  color: 'var(--color-ivory)',
                  letterSpacing: '-0.01em',
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </h1>

        {/* Divider + tagline row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mt-8">
          <div className="flex-1">
            <div className="h-[1px] bg-[rgba(200,190,180,0.2)] mb-5" />
            <p className="hero-sub font-editorial text-base md:text-xl text-[var(--color-stone)] max-w-md leading-relaxed">
              {PROJECT.tagline}
            </p>
          </div>

          <div className="md:text-right">
            <p
              className="hero-location font-display text-[0.6rem] tracking-[0.25em] text-[var(--color-stone)] uppercase mb-2"
            >
              {PROJECT.location}
            </p>
            <p
              className="hero-sub font-sans text-xs text-[var(--color-concrete)]"
            >
              {PROJECT.subTagline}
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        ref={scrollIndicatorRef}
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--color-stone)] uppercase rotate-90 origin-center">
          Scroll
        </span>
        <div className="flex flex-col gap-1 items-center mt-2">
          <div className="w-[1px] h-10 bg-[var(--color-accent)] scroll-line" />
          <ChevronDown size={12} color="var(--color-accent)" />
        </div>
      </button>

      {/* ── Floating accent line ── */}
      <div
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-20 bg-[rgba(200,190,180,0.2)]" />
        <span
          className="font-display text-[0.5rem] tracking-[0.3em] text-[var(--color-concrete)] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          {PROJECT.developer}
        </span>
        <div className="w-[1px] h-20 bg-[rgba(200,190,180,0.2)]" />
      </div>
    </section>
  );
}
