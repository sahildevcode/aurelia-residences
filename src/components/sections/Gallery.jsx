import React, { useState, useEffect, useCallback } from 'react';
import { IMAGES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? IMAGES.gallery.length - 1 : prev - 1));
  }, [selectedIndex]);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === IMAGES.gallery.length - 1 ? 0 : prev + 1));
  }, [selectedIndex]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, prevImage, nextImage]);

  return (
    <section
      id="gallery"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-charcoal)' }}
      aria-label="Architectural Visual Gallery"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel number="06" text="Visual Narrative" className="mb-4" />
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light">
              Curated <em className="italic text-[var(--color-accent)]">Visions</em>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[var(--color-concrete)] max-w-sm">
            Select any architectural plate to expand full-screen high fidelity imagery.
          </p>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm border border-[rgba(200,190,180,0.1)] bg-[var(--color-dark)]"
              tabIndex={0}
              role="button"
              aria-label={`Open image: ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[rgba(13,13,13,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(13,13,13,0.7)] backdrop-blur-md flex items-center justify-center text-[var(--color-ivory)] border border-[rgba(200,190,180,0.2)]">
                  <Maximize2 size={18} />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--color-ivory)] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded Image Lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[var(--color-ivory)] hover:text-[var(--color-accent)] p-2 transition-colors cursor-pointer bg-transparent border-none z-50"
            aria-label="Close Lightbox"
          >
            <X size={28} />
          </button>

          {/* Nav buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-[var(--color-ivory)] hover:text-[var(--color-accent)] p-3 transition-colors cursor-pointer bg-[rgba(13,13,13,0.5)] rounded-full border border-[rgba(200,190,180,0.15)] z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-[var(--color-ivory)] hover:text-[var(--color-accent)] p-3 transition-colors cursor-pointer bg-[rgba(13,13,13,0.5)] rounded-full border border-[rgba(200,190,180,0.15)] z-50"
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Active Image container */}
          <div className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center">
            <img
              src={IMAGES.gallery[selectedIndex].src}
              alt={IMAGES.gallery[selectedIndex].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="font-display text-[0.65rem] tracking-[0.25em] text-[var(--color-stone)] uppercase">
                {selectedIndex + 1} / {IMAGES.gallery.length} — {IMAGES.gallery[selectedIndex].alt}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
