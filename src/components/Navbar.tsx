'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { label: 'capabilities', href: '#capabilities' },
    { label: 'ai agents', href: '#agents' },
    { label: 'work', href: '#work' },
    { label: 'architecture', href: '#architecture' },
    { label: 'estimator', href: '#calculator' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Compute page reading progress (0 - 100%)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Detect active section
      const sections = ['capabilities', 'agents', 'work', 'architecture', 'calculator'];
      const scrollPos = scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
      if (scrollY < 150) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-standard">
      <div 
        className={`max-w-container mx-auto px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div
          className={`relative rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'liquid-glass-scrolled' : 'liquid-glass'
          }`}
        >
          {/* Micro Liquid Progress Line at the bottom of the navbar */}
          <div className="absolute bottom-0 left-6 right-6 h-[1.5px] rounded-full overflow-hidden bg-white/5 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-accent via-cyan-300 to-accent transition-all duration-150 ease-out shadow-[0_0_8px_#00f0ff]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Liquid Rim Specular Top Highlight */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* Brand Logo with Liquid Glow */}
          <Link
            href="/"
            className="flex items-center text-text-primary text-xl font-bold tracking-tight hover:opacity-90 transition-standard group relative"
          >
            <span className="font-mono text-accent drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">f0</span>
            <span className="text-text-primary group-hover:text-white transition-standard">undr</span>
            <span className="ml-2 w-1.5 h-1.5 rounded-full bg-accent animate-ping hidden sm:inline-block" />
          </Link>

          {/* Desktop Nav - Dynamic Liquid Pill Container */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full liquid-pill border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono lowercase transition-all duration-200 relative ${
                    isActive
                      ? 'text-accent bg-accent-subtle/50 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.25)] border border-accent/40'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Live AI Platform Liquid Button */}
            <a
              href="https://ai.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-4 py-2 rounded-full text-xs font-mono text-accent border border-accent/40 bg-accent/10 hover:bg-accent hover:text-bg transition-all duration-300 shadow-[0_0_16px_rgba(0,240,255,0.15)] hover:shadow-[0_0_24px_rgba(0,240,255,0.4)] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-bg animate-pulse" />
              <span className="font-semibold">f0undr ai</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Start Project Liquid Gloss Button */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-xs font-medium bg-text-primary text-bg hover:bg-accent hover:text-bg transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-1.5 font-mono"
            >
              <span>start project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary p-2 rounded-xl liquid-pill focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu with Liquid Glassy Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 liquid-glass-scrolled rounded-3xl p-6 flex flex-col gap-3 shadow-2xl border-accent/25 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono py-2 px-3 rounded-xl transition-standard lowercase flex items-center justify-between ${
                    isActive
                      ? 'bg-accent-subtle text-accent border border-accent/30'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-1">
              <a
                href="https://ai.f0undrteam.site/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-2xl text-xs font-mono text-accent border border-accent/40 bg-accent-subtle/30 hover:bg-accent hover:text-bg transition-standard flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>launch f0undr ai platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold bg-text-primary text-bg hover:bg-accent hover:text-bg transition-standard flex items-center justify-center gap-1.5"
              >
                <span>start project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
