import React from 'react';
import { AMENITIES, IMAGES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { Waves, Dumbbell, UtensilsCrossed, Wind, Flower2, BellRing } from 'lucide-react';

const iconMap = {
  Waves: Waves,
  Dumbbell: Dumbbell,
  UtensilsCrossed: UtensilsCrossed,
  Wind: Wind,
  Flower2: Flower2,
  BellConcierge: BellRing,
};

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-dark)' }}
      aria-label="Amenities and Lifestyle"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <SectionLabel number="05" text="Amenities & Services" className="mb-4" />
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
            An Ecosystem of <br />
            <em className="italic text-[var(--color-accent)] font-serif">Unrivaled</em> Hospitality.
          </h2>
          <p className="mt-6 font-sans text-xs md:text-sm text-[var(--color-stone)] leading-relaxed">
            Reserved exclusively for residents and their guests, three full floors are dedicated to
            private wellness, gastronomy, and bespoke social clubs.
          </p>
        </div>

        {/* Feature Grid with alternating photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hero Amenity card (Image card) */}
          <div className="relative aspect-[4/5] overflow-hidden group lg:col-span-1 rounded-sm border border-[rgba(200,190,180,0.1)]">
            <img
              src={IMAGES.amenity1}
              alt={IMAGES.amenity1Alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.9)] via-[rgba(13,13,13,0.2)] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-accent)] uppercase block mb-1">
                Level 54 Rooftop
              </span>
              <h3 className="font-editorial text-2xl text-[var(--color-ivory)] font-light">
                Sky Horizon Pool
              </h3>
            </div>
          </div>

          {/* Grid of Amenity Items */}
          {AMENITIES.slice(0, 4).map((amenity, i) => {
            const Icon = iconMap[amenity.icon] || Waves;
            return (
              <div
                key={amenity.title}
                className="p-8 flex flex-col justify-between border border-[rgba(200,190,180,0.1)] bg-[rgba(26,26,26,0.5)] backdrop-blur-sm hover:border-[rgba(184,147,90,0.4)] transition-all duration-300 rounded-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(184,147,90,0.1)] text-[var(--color-accent)] mb-8">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--color-concrete)] uppercase block mb-2">
                    0{i + 1} // AMENITY
                  </span>
                  <h4 className="font-editorial text-2xl text-[var(--color-ivory)] font-light mb-3">
                    {amenity.title}
                  </h4>
                  <p className="font-sans text-xs text-[var(--color-stone)] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(200,190,180,0.06)] mt-8">
                  <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-accent)] uppercase">
                    Residents Only
                  </span>
                </div>
              </div>
            );
          })}

          {/* Another aesthetic photo card */}
          <div className="relative aspect-[4/5] overflow-hidden group lg:col-span-1 rounded-sm border border-[rgba(200,190,180,0.1)]">
            <img
              src={IMAGES.amenity4}
              alt={IMAGES.amenity4Alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.9)] via-[rgba(13,13,13,0.2)] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-accent)] uppercase block mb-1">
                Sanctuary
              </span>
              <h3 className="font-editorial text-2xl text-[var(--color-ivory)] font-light">
                Private Botanical Grounds
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
