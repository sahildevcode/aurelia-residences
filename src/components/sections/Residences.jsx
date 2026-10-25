import React, { useState } from 'react';
import { RESIDENCES, IMAGES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { Check, ArrowRight } from 'lucide-react';

export default function Residences() {
  const [activeTab, setActiveTab] = useState(0);

  const residenceImages = [
    IMAGES.interior1,
    IMAGES.interior3,
    IMAGES.sectionD,
  ];

  return (
    <section
      id="residences"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-charcoal)' }}
      aria-label="The Residence Collection"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <SectionLabel number="04" text="Curated Living" className="mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light">
              The Private <em className="italic text-[var(--color-accent)]">Collection</em>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[var(--color-concrete)] max-w-md">
            Three distinctive architectural floor plans, each crafted to provide unobstructed outlooks
            and absolute acoustic privacy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[rgba(200,190,180,0.15)] mb-12 overflow-x-auto no-scrollbar">
          {RESIDENCES.map((res, idx) => (
            <button
              key={res.type}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 px-6 font-display text-[0.65rem] tracking-[0.25em] uppercase transition-all whitespace-nowrap cursor-pointer border-b-2 -mb-[2px] ${
                activeTab === idx
                  ? 'border-[var(--color-accent)] text-[var(--color-ivory)]'
                  : 'border-transparent text-[var(--color-concrete)] hover:text-[var(--color-stone)]'
              }`}
            >
              {res.type}
            </button>
          ))}
        </div>

        {/* Selected Plan Details & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Plan Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-[0.55rem] tracking-[0.2em] font-display uppercase bg-[rgba(184,147,90,0.12)] text-[var(--color-accent)] mb-4">
                {RESIDENCES[activeTab].availability}
              </span>
              <h3 className="font-editorial text-3xl md:text-4xl text-[var(--color-ivory)] font-light">
                {RESIDENCES[activeTab].type}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[rgba(200,190,180,0.1)]">
              <div>
                <span className="font-display text-[0.55rem] uppercase tracking-wider text-[var(--color-concrete)] block">
                  Configuration
                </span>
                <span className="font-sans text-sm text-[var(--color-ivory)] font-medium mt-1 block">
                  {RESIDENCES[activeTab].bedrooms}
                </span>
              </div>
              <div>
                <span className="font-display text-[0.55rem] uppercase tracking-wider text-[var(--color-concrete)] block">
                  Baths
                </span>
                <span className="font-sans text-sm text-[var(--color-ivory)] font-medium mt-1 block">
                  {RESIDENCES[activeTab].bathrooms}
                </span>
              </div>
              <div>
                <span className="font-display text-[0.55rem] uppercase tracking-wider text-[var(--color-concrete)] block">
                  Total Area
                </span>
                <span className="font-sans text-sm text-[var(--color-ivory)] font-medium mt-1 block">
                  {RESIDENCES[activeTab].area}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {RESIDENCES[activeTab].features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-[var(--color-stone)] font-sans">
                  <Check size={14} className="text-[var(--color-accent)]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Inquire For Floor Plans <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Plan Gallery View */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[rgba(200,190,180,0.12)]">
              <img
                src={residenceImages[activeTab]}
                alt={RESIDENCES[activeTab].type}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 bg-[rgba(13,13,13,0.8)] backdrop-blur-md px-4 py-2 border border-[rgba(200,190,180,0.1)]">
                <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-stone)] uppercase">
                  Architectural Rendering · Verified Concept
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
