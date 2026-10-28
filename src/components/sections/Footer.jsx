import React from 'react';
import { PROJECT, NAV_LINKS } from '../../config/projectData';
import { ArrowUp } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-20 pb-12 px-6 md:px-16 lg:px-24 border-t border-[rgba(200,190,180,0.1)]"
      style={{ background: '#0a0a0a' }}
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(200,190,180,0.08)]">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Soni Financial Services Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-[rgba(200,190,180,0.3)] shadow-lg"
              />
              <div>
                <div className="font-editorial text-2xl md:text-3xl tracking-[0.22em] text-[var(--color-ivory)] font-medium leading-none">
                  SONI
                </div>
                <div className="font-display text-[0.55rem] tracking-[0.3em] text-[var(--color-accent)] uppercase mt-1 font-semibold">
                  FINANCIAL SERVICES
                </div>
              </div>
            </div>
            <p className="font-sans text-xs text-[var(--color-concrete)] max-w-sm leading-relaxed mt-4">
              {PROJECT.tagline} An extraordinary synthesis of light, landscape, and architectural mastery.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <span className="font-display text-[0.6rem] tracking-[0.25em] text-[var(--color-stone)] uppercase block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-[var(--color-concrete)] hover:text-[var(--color-accent)] transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-display text-[0.6rem] tracking-[0.25em] text-[var(--color-stone)] uppercase block mb-4">
              Disclaimer
            </span>
            <p className="font-sans text-[0.7rem] text-[var(--color-concrete)] leading-relaxed">
              All imagery, architectural models, and specifications are artistic impressions and subject to
              final regulatory authorizations. Room measurements and dimensions are indicative. This digital
              medium does not constitute an offer of contract.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-sans text-[0.7rem] text-[var(--color-concrete)]">
            © {new Date().getFullYear()} {PROJECT.fullName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-stone)] hover:text-[var(--color-accent)] uppercase bg-transparent border-none cursor-pointer transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Summit</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
