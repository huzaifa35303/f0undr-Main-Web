'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ChevronDown, Globe, Bot, Shield, Video, Layers } from 'lucide-react';

interface NetworkSite {
  title: string;
  category: string;
  description: string;
  href: string;
  isExternal: boolean;
  status: string;
}

const NETWORK_SITES: NetworkSite[] = [
  {
    title: 'f0undr Order Portal',
    category: 'bespoke commissions',
    description: 'Commission custom websites, mobile apps, games, cinematic videos & AI systems.',
    href: 'https://order.f0undrteam.site/',
    isExternal: true,
    status: 'live',
  },
  {
    title: 'f0undr AI Platform',
    category: 'autonomous intelligence',
    description: 'Autonomous LLM workflows, custom agent swarms & MCP tooling.',
    href: 'https://ai.f0undrteam.site/',
    isExternal: true,
    status: 'live',
  },
  {
    title: 'Capabilities & Systems',
    category: 'engineering studio',
    description: 'Full-stack apps, Cipher7 security, 2D/3D game engines & REA audits.',
    href: '/capabilities',
    isExternal: false,
    status: 'page',
  },
  {
    title: 'Selected Commercial Works',
    category: 'portfolio & media',
    description: '4K cinema video ads, commercial posters & verified software case studies.',
    href: '/work',
    isExternal: false,
    status: 'page',
  },
  {
    title: 'Direct Contact Hub',
    category: 'client dispatch',
    description: 'WhatsApp, Discord, phone call, and email dispatch.',
    href: '/contact',
    isExternal: false,
    status: 'page',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [networkDropdownOpen, setNetworkDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'capabilities', href: '#capabilities' },
    { label: 'ai agents', href: '#agents' },
    { label: 'work', href: '#work' },
    { label: 'architecture', href: '#architecture' },
    { label: 'estimator', href: '#estimator' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      const sections = ['capabilities', 'agents', 'work', 'architecture', 'estimator'];
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

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNetworkDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled
          ? 'bg-gradient-to-b from-bg/95 via-bg/60 to-transparent'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-container mx-auto px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div
          className={`pointer-events-auto relative rounded-full px-4 sm:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'liquid-glass-scrolled' : 'liquid-glass'
          }`}
        >
          {/* Micro Liquid Progress Line */}
          <div className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full overflow-hidden bg-white/[0.04] pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-accent/80 via-cyan-200 to-accent transition-all duration-150 ease-out shadow-[0_0_10px_#00f0ff]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Liquid Rim Specular Top Highlight */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center text-text-primary text-lg sm:text-xl font-bold tracking-tight hover:opacity-90 transition-standard group pl-1"
          >
            <span className="font-mono text-accent drop-shadow-[0_0_14px_rgba(0,240,255,0.45)]">f0</span>
            <span className="text-white/95 group-hover:text-white transition-standard">undr</span>
          </Link>

          {/* Desktop Nav - Seamless Fluid Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all duration-200 relative ${
                    isActive
                      ? 'liquid-pill-active font-semibold'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Our Websites & Network Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setNetworkDropdownOpen(!networkDropdownOpen)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all duration-200 flex items-center gap-1.5 ${
                  networkDropdownOpen
                    ? 'liquid-pill-active'
                    : 'liquid-pill text-white/85 hover:text-white hover:bg-white/[0.1]'
                }`}
                aria-expanded={networkDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>our network</span>
                <ChevronDown className={`w-3 h-3 opacity-70 transition-transform duration-200 ${networkDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Liquid Glass Dropdown Menu */}
              {networkDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 liquid-glass-scrolled rounded-2xl p-2.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-white/10 mb-1.5">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                      f0undr web ecosystem
                    </span>
                    <span className="text-[11px] text-white/60">
                      Active platforms, apps &amp; systems
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {NETWORK_SITES.map((site) => (
                      <a
                        key={site.title}
                        href={site.href}
                        target={site.isExternal ? '_blank' : undefined}
                        rel={site.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setNetworkDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.08] transition-standard flex items-start justify-between group block"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-white/95 group-hover:text-accent transition-standard">
                              {site.title}
                            </span>
                            {site.isExternal && <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-accent" />}
                          </div>
                          <span className="text-[11px] text-white/55 block mt-0.5 line-clamp-1">
                            {site.description}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.07] text-accent/90 uppercase border border-white/10">
                          {site.status}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Start Project Liquid Button */}
            <a
              href="https://order.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-tight bg-gradient-to-b from-white to-white/90 text-bg hover:from-accent hover:to-cyan-300 transition-all duration-300 shadow-[0_2px_14px_rgba(255,255,255,0.18),inset_0_1px_0_#ffffff] hover:shadow-[0_0_22px_rgba(0,240,255,0.45)] flex items-center gap-1"
            >
              <span>start project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile / Tablet hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-secondary hover:text-text-primary p-2 rounded-xl liquid-pill focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile / Tablet dropdown menu with Liquid Glassy Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 liquid-glass-scrolled rounded-3xl p-6 flex flex-col gap-3 shadow-2xl border-accent/25 animate-in fade-in slide-in-from-top-3 duration-200">
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

            {/* Mobile Network Links */}
            <div className="pt-3 border-t border-white/10 mt-1">
              <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-2 px-2">
                our web platforms &amp; sites
              </span>
              <div className="space-y-1">
                {NETWORK_SITES.map((site) => (
                  <a
                    key={site.title}
                    href={site.href}
                    target={site.isExternal ? '_blank' : undefined}
                    rel={site.isExternal ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-white/5 transition-standard flex items-center justify-between text-xs text-text-secondary"
                  >
                    <span>{site.title}</span>
                    {site.isExternal ? <ArrowUpRight className="w-3 h-3 text-accent" /> : <span className="text-[9px] font-mono uppercase text-text-muted">{site.status}</span>}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-1">
              <a
                href="https://order.f0undrteam.site/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-2xl text-xs font-semibold bg-gradient-to-b from-white to-white/90 text-bg hover:from-accent hover:to-cyan-300 transition-standard flex items-center justify-center gap-1.5"
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
