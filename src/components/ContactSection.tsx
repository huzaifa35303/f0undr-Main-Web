'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUpRight, Copy, Check, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function ContactSection() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText('king_huzaifa001');
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-bg-subtle/40">
      <div className="max-w-container mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-accent lowercase">direct dispatch &amp; commissions</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Initiate your project or reach us directly.
          </h2>
          <p className="text-text-secondary mt-4 text-base leading-relaxed">
            All project commissions, bespoke engineering, and creative orders are processed through our dedicated Order Portal. For direct discussions, reach us via WhatsApp, Discord, or direct phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card: f0undr Order Portal */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border-accent/40 bg-gradient-to-b from-accent/5 to-transparent flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle text-accent text-xs font-mono mb-6 border border-accent/30">
                <Zap className="w-3.5 h-3.5" />
                <span>official commission studio // active</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-text-primary leading-tight">
                f0undr Order Portal
              </h3>
              
              <p className="text-text-secondary text-sm sm:text-base mt-4 leading-relaxed">
                Configure your scope, select deliverables, and submit your express brief directly through the interactive studio wizard. We build custom websites, cross-platform apps, 2D/3D games, cinematic video ads, scrapers, and autonomous AI agents.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 text-xs font-mono text-text-secondary">
                <div className="p-3 rounded-xl bg-bg/80 border border-border-subtle">
                  <span className="text-accent block text-sm font-bold">Web &amp; Apps</span>
                  <span className="text-[11px] text-text-muted">Full-stack &amp; Mobile</span>
                </div>
                <div className="p-3 rounded-xl bg-bg/80 border border-border-subtle">
                  <span className="text-accent block text-sm font-bold">Games &amp; 3D</span>
                  <span className="text-[11px] text-text-muted">Engines &amp; Shaders</span>
                </div>
                <div className="p-3 rounded-xl bg-bg/80 border border-border-subtle">
                  <span className="text-accent block text-sm font-bold">AI Systems</span>
                  <span className="text-[11px] text-text-muted">Swarms &amp; Automations</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border-subtle/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-text-muted block">Direct Portal Link</span>
                <span className="text-sm font-mono text-text-primary font-semibold">order.f0undrteam.site</span>
              </div>

              <a
                href="https://order.f0undrteam.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs font-semibold bg-accent text-bg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 font-mono shrink-0"
              >
                <span>open order portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact Hub (WhatsApp, Discord, Phone Call) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923446789261"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border-border-subtle hover:border-emerald-500/50 hover:bg-emerald-950/10 transition-all duration-300 group flex items-start justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                    instant messaging
                  </span>
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-emerald-300 transition-standard">
                    WhatsApp
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 font-mono">
                    +92 344 6789261
                  </p>
                  <span className="text-[11px] text-text-muted mt-2 block">
                    Direct chat with lead architect M.Huzaifa
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-emerald-400 transition-standard shrink-0" />
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+923446789261"
              className="glass-panel p-6 rounded-2xl border-border-subtle hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group flex items-start justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider block">
                    voice dispatch
                  </span>
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-standard">
                    Direct Phone Call
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 font-mono">
                    +92 344 6789261 <span className="text-text-muted">/ 0344 6789261</span>
                  </p>
                  <span className="text-[11px] text-text-muted mt-2 block">
                    Emergency triage &amp; immediate project discovery
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-standard shrink-0" />
            </a>

            {/* Discord */}
            <div className="glass-panel p-6 rounded-2xl border-border-subtle hover:border-indigo-500/50 hover:bg-indigo-950/10 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      developer direct
                    </span>
                    <h4 className="text-lg font-bold text-text-primary">
                      Discord
                    </h4>
                    <p className="text-xs text-text-secondary mt-1 font-mono">
                      king_huzaifa001
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyDiscord}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono border border-border-subtle bg-bg/80 text-text-secondary hover:text-text-primary hover:border-indigo-400 transition-standard flex items-center gap-1.5 shrink-0"
                  title="Copy Discord handle"
                >
                  {copiedDiscord ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-[11px] text-text-muted mt-3 block">
                Add <strong>king_huzaifa001</strong> on Discord for developer-to-developer communications
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
