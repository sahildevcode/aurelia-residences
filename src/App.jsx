import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import ProjectOverview from './components/sections/ProjectOverview';
import Architecture from './components/sections/Architecture';
import Interiors from './components/sections/Interiors';
import Residences from './components/sections/Residences';
import Amenities from './components/sections/Amenities';
import Location from './components/sections/Location';
import Gallery from './components/sections/Gallery';
import Specifications from './components/sections/Specifications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // ── Smooth Scroll setup via Lenis ──
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial recalculation after assets load
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-ivory)] selection:bg-[var(--color-accent)] selection:text-[var(--color-dark)]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectOverview />
        <Architecture />
        <Interiors />
        <Residences />
        <Amenities />
        <Gallery />
        <Location />
        <Specifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
