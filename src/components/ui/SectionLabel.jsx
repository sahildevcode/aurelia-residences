// src/components/ui/SectionLabel.jsx
import React from 'react';

export default function SectionLabel({ number, text, light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {number && (
        <span
          className="font-display text-[0.55rem] tracking-[0.25em]"
          style={{ color: 'var(--color-accent)' }}
        >
          {number}
        </span>
      )}
      <span className="section-label" style={{ color: light ? 'rgba(245,240,234,0.5)' : undefined }}>
        {text}
      </span>
    </div>
  );
}
