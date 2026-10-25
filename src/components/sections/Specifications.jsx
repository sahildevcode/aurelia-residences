import React from 'react';
import { SPECS } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-charcoal)' }}
      aria-label="Building Specifications and Engineering"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-2xl mb-14">
          <SectionLabel number="08" text="Technical Masterplan" className="mb-4" />
          <h2 className="font-editorial text-3xl md:text-5xl text-[var(--color-ivory)] font-light">
            Architectural <em className="italic text-[var(--color-accent)]">Specifications</em>
          </h2>
        </div>

        {/* 2-column specifications data list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 border-t border-[rgba(200,190,180,0.1)] pt-8">
          {SPECS.map((spec, i) => (
            <div
              key={i}
              className="flex justify-between items-baseline py-4 border-b border-[rgba(200,190,180,0.08)]"
            >
              <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-concrete)]">
                {spec.label}
              </span>
              <span className="font-editorial text-lg md:text-xl text-[var(--color-ivory)] font-light text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
