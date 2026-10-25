import React, { useState } from 'react';
import { MATERIALS } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { ShieldCheck, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function Materiality() {
  const [activeMaterial, setActiveMaterial] = useState(0);

  return (
    <section
      id="materiality"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-[rgba(200,190,180,0.08)]"
      style={{ background: 'var(--color-charcoal)' }}
      aria-label="Facade and Materiality Mastercraft"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <SectionLabel number="04" text="Craft & Materiality" className="mb-4" />
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
            The Substance of <br />
            <em className="italic text-[var(--color-accent)] font-serif">Permanence</em>
          </h2>
          <p className="mt-6 font-sans text-xs md:text-sm text-[var(--color-stone)] leading-relaxed">
            Every material was curated through exhaustive quarry audits and bespoke metallurgical
            finishing to withstand maritime atmosphere while expressing tactile luxury.
          </p>
        </div>

        {/* Interactive Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Material Selectors & Data */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {MATERIALS.map((mat, idx) => (
                <div
                  key={mat.title}
                  onClick={() => setActiveMaterial(idx)}
                  className={`p-6 rounded-sm border cursor-pointer transition-all duration-300 ${
                    activeMaterial === idx
                      ? 'border-[var(--color-accent)] bg-[rgba(184,147,90,0.08)] shadow-lg translate-x-2'
                      : 'border-[rgba(200,190,180,0.08)] bg-[rgba(26,26,26,0.35)] hover:border-[rgba(200,190,180,0.2)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--color-accent)] uppercase">
                      Plate 0{idx + 1} // {mat.origin}
                    </span>
                    {activeMaterial === idx && <Sparkles size={14} className="text-[var(--color-accent)]" />}
                  </div>
                  <h3 className="font-editorial text-2xl text-[var(--color-ivory)] font-light mb-2">
                    {mat.title}
                  </h3>
                  <p className="font-sans text-xs text-[var(--color-stone)] leading-relaxed">
                    {mat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Performance Metric Box */}
            <div className="p-6 border border-[rgba(200,190,180,0.1)] bg-[rgba(13,13,13,0.6)] rounded-sm">
              <div className="flex items-center gap-2 text-[var(--color-accent)] mb-3">
                <ShieldCheck size={16} />
                <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase font-medium">
                  Material Testing & Longevity Standard
                </span>
              </div>
              <p className="font-sans text-xs text-[var(--color-concrete)] leading-relaxed">
                ASTM Grade A durability certification · Class 1 fire endurance · 100-year architectural lifecycle lifecycle rating.
              </p>
            </div>
          </div>

          {/* Active Material High-Res Visual Inspection */}
          <div className="lg:col-span-7 relative min-h-[420px] rounded-sm overflow-hidden border border-[rgba(200,190,180,0.12)]">
            <img
              src={MATERIALS[activeMaterial].image}
              alt={MATERIALS[activeMaterial].title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.85)] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-1">
                  Macro Provenance Plate
                </span>
                <span className="font-editorial text-2xl text-[var(--color-ivory)] font-light">
                  {MATERIALS[activeMaterial].title}
                </span>
              </div>
              <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-stone)] uppercase bg-[rgba(13,13,13,0.8)] px-3 py-1.5 border border-[rgba(200,190,180,0.15)] rounded-xs">
                {MATERIALS[activeMaterial].origin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
