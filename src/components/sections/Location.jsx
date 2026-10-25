import React from 'react';
import { PROJECT, CONTACT } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function Location() {
  const landmarks = [
    { name: "Financial & Business District", time: "10 mins", mode: "Drive" },
    { name: "International Airport", time: "25 mins", mode: "Drive" },
    { name: "Private Yacht Club & Marina", time: "12 mins", mode: "Drive" },
    { name: "Fine Dining Promenade", time: "5 mins", mode: "Walk" },
  ];

  return (
    <section
      id="location"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-dark)' }}
      aria-label="Neighborhood and Prime Location"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Location Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <SectionLabel number="07" text="Environs & Address" />
            
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
              An Enclave of <br />
              <em className="italic text-[var(--color-accent)] font-serif">Distinction</em>
            </h2>

            <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed">
              Situated in an exceptionally discrete enclave, Aurelia Residences commands effortless
              connectivity while preserving absolute privacy away from urban commotion.
            </p>

            <div className="p-6 bg-[rgba(26,26,26,0.6)] border border-[rgba(200,190,180,0.1)] rounded-sm space-y-3">
              <div className="flex items-center gap-3 text-[var(--color-accent)]">
                <MapPin size={18} />
                <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase font-semibold">
                  Official Address
                </span>
              </div>
              <p className="font-sans text-xs text-[var(--color-ivory)]">
                {PROJECT.location}
              </p>
              <p className="font-sans text-[0.7rem] text-[var(--color-concrete)]">
                Private Access Road · Valet Portico
              </p>
            </div>

            {/* Travel Times */}
            <div className="space-y-4 pt-4">
              <span className="font-display text-[0.6rem] tracking-[0.25em] text-[var(--color-concrete)] uppercase block">
                Proximity & Commute
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {landmarks.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[rgba(200,190,180,0.08)] bg-[rgba(13,13,13,0.5)] rounded-sm"
                  >
                    <span className="font-editorial text-xl text-[var(--color-ivory)] block font-light">
                      {item.time}
                    </span>
                    <span className="font-sans text-xs text-[var(--color-stone)] block mt-1">
                      {item.name}
                    </span>
                    <span className="font-display text-[0.55rem] tracking-wider text-[var(--color-accent)] uppercase block mt-2">
                      {item.mode}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <span>Open in Satellite Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Minimalist Cartographic Aesthetic Mockup */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[rgba(200,190,180,0.12)] bg-[#121212] flex items-center justify-center p-8">
              {/* Subtle architectural grid lines */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(200,190,180,0.4) 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Minimalist map graphic representation */}
              <div className="relative z-10 text-center max-w-sm space-y-4">
                <div className="w-16 h-16 rounded-full mx-auto border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] animate-pulse">
                  <Compass size={32} />
                </div>
                <h4 className="font-editorial text-2xl text-[var(--color-ivory)] font-light">
                  Aurelia Coordinates
                </h4>
                <p className="font-sans text-xs text-[var(--color-concrete)] leading-relaxed">
                  Confidential location details and private preview routing are provided exclusively
                  upon confirmed appointment registration.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 border border-[rgba(184,147,90,0.3)] font-display text-[0.6rem] tracking-[0.25em] text-[var(--color-accent)] uppercase">
                    18°55'N · 72°49'E
                  </span>
                </div>
              </div>

              {/* Bottom decorative coordinates */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[var(--color-concrete)] font-display text-[0.55rem] tracking-[0.2em] uppercase">
                <span>Ref: Geographic Datum</span>
                <span>Protected Access Zone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
