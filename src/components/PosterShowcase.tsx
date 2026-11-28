'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Maximize2, X, Eye, Layers } from 'lucide-react';

interface PosterItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
  treatment: string;
  specs: string[];
}

const POSTERS: PosterItem[] = [
  {
    id: 'poster-1',
    title: 'Natural Tabletop Commercial Key Visual',
    category: 'fmcg advertising // lifestyle',
    imageSrc: '/images/posters/poster-lays-lifestyle.jpg',
    alt: "Commercial food shoot advertisement poster featuring Lay's tomato flavor canister and fresh ingredients",
    treatment: 'Soft natural daylighting, organic ingredient staging, wooden textured surface with depth-of-field separation.',
    specs: ['Lifestyle Point-of-Sale', 'In-Store Poster Print', 'Digital Social Hero', '4K Master'],
  },
  {
    id: 'poster-2',
    title: 'Obsidian Hardware Studio Pedestal Master',
    category: 'consumer tech // studio darkroom',
    imageSrc: '/images/posters/poster-audio-studio.jpg',
    alt: 'Commercial studio advertisement poster featuring matte-black and brushed-titanium wireless studio headphones on an obsidian pedestal with cyan rim lighting',
    treatment: 'Precision cyan rim lighting, matte-black obsidian pedestal elevation, volumetric acoustic particle accents.',
    specs: ['OOH Billboard Display', 'Launch Keynote Visual', 'Digital Display Ads', 'Full Bleed 300 DPI'],
  },
];

export default function PosterShowcase() {
  const [activeModalPoster, setActiveModalPoster] = useState<PosterItem | null>(null);

  return (
    <section className="py-24 px-6 border-t border-border-subtle bg-bg-subtle/20">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono text-accent lowercase">commercial print & key visuals</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
              High-impact advertising posters & commercial photography.
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-md mt-4 md:mt-0">
            From natural lifestyle food shoots to dramatic high-contrast studio masters, we design advertising collateral that anchors national campaigns.
          </p>
        </div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTERS.map((poster) => (
            <div
              key={poster.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border-border-subtle hover:border-accent/40 transition-standard group shadow-2xl"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setActiveModalPoster(poster)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={poster.imageSrc}
                  alt={poster.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-standard duration-500"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-standard flex items-center justify-center gap-2">
                  <div className="px-4 py-2 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-strong text-text-primary text-xs font-mono flex items-center gap-2 shadow-xl">
                    <Eye className="w-3.5 h-3.5 text-accent" />
                    <span>inspect full resolution</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg-card/85 backdrop-blur-md border border-border-subtle text-accent text-[11px] font-mono lowercase">
                  {poster.category}
                </div>
              </div>

              {/* Poster Meta */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-standard mb-2">
                    {poster.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {poster.treatment}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-text-muted block mb-2.5 lowercase">
                    production deployment:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {poster.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-lg bg-tag-bg border border-border-subtle text-[11px] font-mono text-tag-text"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalPoster && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
            onClick={() => setActiveModalPoster(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-bg-card border border-border-strong rounded-2xl overflow-hidden p-2 sm:p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-border-subtle text-xs font-mono text-text-secondary">
                <span className="text-accent">{activeModalPoster.title}</span>
                <button
                  type="button"
                  onClick={() => setActiveModalPoster(null)}
                  className="p-1 rounded-lg hover:bg-tag-bg text-text-primary hover:text-accent transition-standard"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden my-3 rounded-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModalPoster.imageSrc}
                  alt={activeModalPoster.alt}
                  className="max-h-[72vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="px-2 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted font-mono">
                <span>treatment: {activeModalPoster.treatment}</span>
                <span className="text-text-primary">f0undr media master // licensed campaign</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
