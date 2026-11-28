import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-6">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" 
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[340px] bg-accent-glow blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-container mx-auto w-full flex flex-col items-center text-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-bg-card mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-text-secondary lowercase">
            engineering, media &amp; multi-platform systems
          </span>
        </div>

        {/* Hero headline - under 80 words total for screen */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.08] mb-6">
          We engineer software, build games, and forge AI agents. And we make the ads that sell them.
        </h1>

        {/* One concise sentence */}
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed mb-10">
          f0undr unites deep technical systems with commercial media production to design, deploy, and scale modern products.
        </p>

        {/* Hero actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://order.f0undrteam.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full text-sm font-semibold bg-accent text-bg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2 font-mono"
          >
            <span>commission order</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full text-sm font-medium border border-border-subtle bg-bg-card text-text-primary hover:border-border-strong hover:bg-bg-hover transition-standard font-mono"
          >
            direct contact hub
          </a>
          <a
            href="#work"
            className="px-6 py-3.5 rounded-full text-sm font-medium border border-accent/40 bg-accent-subtle/20 text-accent hover:bg-accent hover:text-bg transition-standard flex items-center gap-1.5 font-mono"
          >
            <span>selected works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Quick capability pillars summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-4xl text-left">
          <div className="glass-panel p-4 rounded-xl">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono lowercase">creative ads</span>
            </div>
            <p className="text-xs text-text-secondary leading-snug">
              Commercial video, key visual posters, and ad assets engineered to convert.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono lowercase">ai agents</span>
            </div>
            <p className="text-xs text-text-secondary leading-snug">
              Autonomous multi-agent architectures built for live business workflows.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-mono lowercase">apps & software</span>
            </div>
            <p className="text-xs text-text-secondary leading-snug">
              Cross-platform applications for web, Windows, macOS, iOS, and Android.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl">
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="text-xs font-mono text-accent">#04</span>
              <span className="text-xs font-mono lowercase">games & systems</span>
            </div>
            <p className="text-xs text-text-secondary leading-snug">
              Native game mechanics, interactive simulations, and engine tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
