import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { Cpu, Wind, Droplets, Zap, Shield, Activity } from 'lucide-react';

export default function Engineering() {
  const engineeringPillars = [
    {
      icon: Activity,
      code: "STR-01",
      title: "Seismic & Wind Dynamics",
      desc: "Engineered with a high-strength central slip-form core and tuned liquid damping to resist seismic zones and gale-force wind shears.",
      stat: "Zone IV Rated",
    },
    {
      icon: Zap,
      code: "ENG-02",
      title: "Zero-Loss Microgrid",
      desc: "Dual independent redundant power feeds combined with intelligent solid-state backup systems for uninterrupted residential operation.",
      stat: "100% Redundancy",
    },
    {
      icon: Wind,
      code: "ENV-03",
      title: "Circadian Climate Control",
      desc: "Variable Refrigerant Flow (VRF) paired with medical-grade MERV 14 filtration delivering hospital-clean atmospheric air every 8 minutes.",
      stat: "99.97% Particulate Rejection",
    },
    {
      icon: Droplets,
      code: "ECO-04",
      title: "Closed-Loop Hydrology",
      desc: "Zero-discharge greywater reclamation and rainwater infiltration aquifers supplying 100% of landscape and aesthetic water feature needs.",
      stat: "Net-Neutral Water",
    },
  ];

  return (
    <section
      id="engineering"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-[rgba(200,190,180,0.08)]"
      style={{ background: 'var(--color-dark)' }}
      aria-label="Structural Engineering and Sustainability"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <SectionLabel number="08" text="Engineering Masterplan" className="mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
              Calculated <br />
              <em className="italic text-[var(--color-accent)] font-serif">Invisibility</em>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[var(--color-stone)] max-w-md leading-relaxed">
            True luxury is silent. The structural, acoustic, and thermodynamic engineering
            operates beneath the surface to create an environment of absolute serenity.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="group p-8 border border-[rgba(200,190,180,0.08)] bg-[rgba(26,26,26,0.35)] rounded-sm hover:border-[rgba(184,147,90,0.4)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(184,147,90,0.1)] text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} />
                    </div>
                    <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--color-concrete)] uppercase">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[var(--color-ivory)] font-light mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[var(--color-stone)] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(200,190,180,0.06)]">
                  <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase block mb-1">
                    Benchmark Metric
                  </span>
                  <span className="font-editorial text-lg text-[var(--color-accent)] font-light">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
