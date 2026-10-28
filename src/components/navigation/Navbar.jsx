import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Menu } from 'lucide-react';
import { NAV_LINKS, PROJECT } from '../../config/projectData';
import logoImg from '../../assets/logo.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Entrance animation
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    });

    // Scroll detection
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(13,13,13,0.95)'
            : 'linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,190,180,0.08)' : 'none',
          padding: scrolled ? '1rem 2.5rem' : '1.75rem 2.5rem',
        }}
      >
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 text-[var(--color-ivory)] no-underline"
            aria-label="From Nobody — Home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src={logoImg}
              alt="From Nobody Logo"
              className="w-9 h-9 rounded-full object-cover border border-[rgba(200,190,180,0.25)] shadow-md"
            />
            <div>
              <div className="font-editorial text-lg md:text-xl tracking-[0.25em] text-[var(--color-ivory)]">FROM NOBODY</div>
              <div
                className="font-display text-[0.45rem] tracking-[0.35em] text-[var(--color-accent)]"
                style={{ textTransform: 'uppercase' }}
              >
                RESIDENCES
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="bg-transparent border-none cursor-pointer font-display text-[0.62rem] tracking-[0.18em] text-[var(--color-stone)] uppercase hover:text-[var(--color-accent)] transition-colors duration-300"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Enquire CTA + mobile toggle */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex btn-primary text-[0.6rem] px-5 py-2.5"
              aria-label="Request a private viewing"
            >
              Private Viewing
            </button>
            <button
              className="lg:hidden bg-transparent border-none cursor-pointer text-[var(--color-ivory)] p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavClick={handleNavClick} />
    </>
  );
}

function MobileMenu({ open, onClose, onNavClick }) {
  const overlayRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (open) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, xPercent: 100 },
        { opacity: 1, xPercent: 0, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        linksRef.current?.children || [],
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, delay: 0.2, ease: 'power2.out' }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, xPercent: 100, duration: 0.4, ease: 'power3.in' });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: 'rgba(13,13,13,0.99)', backdropFilter: 'blur(20px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Close */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(200,190,180,0.08)]">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="From Nobody Logo"
            className="w-8 h-8 rounded-full object-cover border border-[rgba(200,190,180,0.25)]"
          />
          <div className="font-editorial text-lg tracking-[0.25em] text-[var(--color-ivory)]">FROM NOBODY</div>
        </div>
        <button
          onClick={onClose}
          className="bg-transparent border-none cursor-pointer text-[var(--color-ivory)] p-1"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Links */}
      <ul ref={linksRef} className="flex flex-col justify-center flex-1 px-8 gap-2 list-none">
        {NAV_LINKS.map((link, i) => (
          <li key={link.href}>
            <button
              onClick={() => onNavClick(link.href)}
              className="bg-transparent border-none cursor-pointer w-full text-left py-4 font-editorial text-3xl text-[var(--color-ivory)] hover:text-[var(--color-accent)] transition-colors duration-300 border-b border-[rgba(200,190,180,0.08)]"
            >
              <span className="section-label mr-3" style={{ fontSize: '0.55rem' }}>0{i + 1}</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="px-8 py-6 border-t border-[rgba(200,190,180,0.08)]">
        <button
          onClick={() => onNavClick('#contact')}
          className="btn-primary w-full justify-center"
        >
          Request a Private Viewing
        </button>
      </div>
    </div>
  );
}
