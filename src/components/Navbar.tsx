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
    status: 'online',
  },
  {
    title: 'f0undr Creative Studio',
    category: 'commercial media',
    description: '4K cinema video ads, 3D motion graphics & poster campaigns.',
    href: '#work',
    isExternal: false,
    status: 'active',
  },
  {
    title: 'Cipher7 Vault',
    category: 'security & desktop',
    description: 'Ultra-private desktop & mobile encrypted communications suite.',
    href: '#capabilities',
    isExternal: false,
    status: 'deployed',
  },
  {
    title: 'f0undr Game Labs',
    category: 'gaming & simulations',
    description: 'Real-time 2D/3D game mechanics, volumetric shaders & engines.',
    href: '#capabilities',
    isExternal: false,
    status: 'active',
  },
  {
    title: 'f0undr REA Security',
    category: 'deep tech',
    description: 'Binary reverse engineering, protocol audits & memory analysis.',
    href: '#capabilities',
    isExternal: false,
    status: 'verified',
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
    { label: 'estimator', href: '#calculator' },
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
          {/* Micro Liquid Progress Line */}
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
            {/* Our Websites & Network Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setNetworkDropdownOpen(!networkDropdownOpen)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono transition-standard flex items-center gap-1.5 border ${
                  networkDropdownOpen
                    ? 'border-accent bg-accent-subtle/30 text-accent'
                    : 'border-border-subtle bg-white/5 text-text-secondary hover:text-text-primary hover:border-border-strong'
                }`}
                aria-expanded={networkDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>our network</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${networkDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Liquid Glass Dropdown Menu */}
              {networkDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 liquid-glass-scrolled rounded-2xl p-3 border-accent/30 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                      f0undr web ecosystem
                    </span>
                    <span className="text-[11px] text-text-muted">
                      Active platforms, apps &amp; systems
                    </span>
                  </div>

                  <div className="space-y-1">
                    {NETWORK_SITES.map((site) => (
                      <a
                        key={site.title}
                        href={site.href}
                        target={site.isExternal ? '_blank' : undefined}
                        rel={site.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setNetworkDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/5 transition-standard flex items-start justify-between group block"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-medium text-text-primary group-hover:text-accent transition-standard">
                              {site.title}
                            </span>
                            {site.isExternal && <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-accent" />}
                          </div>
                          <span className="text-[10px] text-text-muted block mt-0.5 line-clamp-1">
                            {site.description}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-text-secondary uppercase">
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
