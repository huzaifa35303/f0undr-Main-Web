'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ServiceOption {
  id: string;
  label: string;
  category: string;
  basePoints: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'video-ads', label: 'Commercial Video Ads & Motion Cuts', category: 'Creative', basePoints: 4 },
  { id: 'posters', label: 'Key Visual Posters & Ad Campaign Suite', category: 'Creative', basePoints: 2 },
  { id: 'ai-agents', label: 'Custom AI Autonomous Agents & MCP', category: 'AI Systems', basePoints: 6 },
  { id: 'web-platform', label: 'High-Performance Next.js Platform', category: 'Engineering', basePoints: 5 },
  { id: 'desktop-mobile', label: 'Cross-Platform App (Win / Mac / Mobile)', category: 'Engineering', basePoints: 7 },
  { id: 'game-dev', label: 'Game Mechanics & Real-time Simulation', category: 'Gaming', basePoints: 6 },
  { id: 'rea-audit', label: 'REA Binary Inspection & Security Hardening', category: 'Security', basePoints: 4 },
];

export default function ProjectCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'video-ads',
    'ai-agents',
    'web-platform',
  ]);
  const [scale, setScale] = useState<'mvp' | 'production' | 'ecosystem'>('production');
  const [timeline, setTimeline] = useState<'accelerated' | 'standard'>('standard');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Estimate calculation
  const totalPoints = selectedServices.reduce((acc, curr) => {
    const s = SERVICE_OPTIONS.find((item) => item.id === curr);
    return acc + (s ? s.basePoints : 0);
  }, 0);

  const scaleMultiplier = scale === 'mvp' ? 1 : scale === 'production' ? 1.8 : 2.6;
  const estimatedWeeks = Math.max(
    2,
    Math.round((totalPoints * scaleMultiplier) / (timeline === 'accelerated' ? 5 : 3))
  );

  return (
    <section id="calculator" className="py-24 px-6 border-t border-border-subtle">
      <div className="max-w-container mx-auto">
        <div className="mb-14">
          <span className="text-xs font-mono text-accent lowercase">interactive scope planner</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Configure deliverables & calculate your project timeline.
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl text-base">
            Select the components your product requires. Get an immediate estimate of scope, engineering velocity, and delivery timeframe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Services Selector */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-mono text-text-muted block mb-3 lowercase">
                1. select required deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-xl text-left border transition-standard flex items-center justify-between ${
                        isChecked
                          ? 'border-accent bg-accent-subtle/20 text-text-primary'
                          : 'border-border-subtle bg-bg-card text-text-secondary hover:border-border-strong'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-mono text-text-muted block">
                          {service.category}
                        </span>
                        <span className="text-sm font-medium block mt-0.5">
                          {service.label}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ml-3 ${
                        isChecked ? 'bg-accent text-bg' : 'border border-border-subtle'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale and Timeline Configuration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-subtle">
              <div>
                <span className="text-xs font-mono text-text-muted block mb-3 lowercase">
                  2. delivery tier:
                </span>
                <div className="flex gap-2">
                  {(['mvp', 'production', 'ecosystem'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setScale(tier)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono lowercase transition-standard border ${
                        scale === tier
                          ? 'border-accent bg-accent text-bg font-semibold'
                          : 'border-border-subtle bg-bg-card text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-text-muted block mb-3 lowercase">
                  3. delivery speed:
                </span>
                <div className="flex gap-2">
                  {(['standard', 'accelerated'] as const).map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setTimeline(spd)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono lowercase transition-standard border ${
                        timeline === spd
                          ? 'border-accent bg-accent text-bg font-semibold'
                          : 'border-border-subtle bg-bg-card text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {spd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scope Summary Card */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border-accent/40">
            <div>
              <div className="flex items-center gap-2 text-accent mb-4">
                <Calculator className="w-5 h-5" />
                <span className="text-xs font-mono lowercase">scope telemetry</span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-text-secondary block">estimated timeline</span>
                <div className="text-4xl font-bold text-text-primary font-mono mt-1">
                  ~{estimatedWeeks} weeks
                </div>
                <span className="text-xs text-text-muted font-mono block mt-1">
                  {selectedServices.length} modules selected in {scale} tier
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono text-text-muted block lowercase">
                  production pipeline:
                </span>
                <div className="p-3 rounded-lg bg-bg-subtle border border-border-subtle text-xs space-y-1.5 text-text-secondary font-mono">
                  <div className="flex justify-between">
                    <span>discovery & brief</span>
                    <span className="text-accent">week 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>engineering & media</span>
                    <span className="text-accent">week 2-{Math.max(2, estimatedWeeks - 1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>qa & release</span>
                    <span className="text-accent">week {estimatedWeeks}</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://order.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-text-primary text-bg font-medium text-xs hover:bg-accent hover:text-bg transition-standard flex items-center justify-center gap-2"
            >
              <span>commission this scope on order portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-4 pt-3 border-t border-border-subtle/60 text-[11px] text-text-muted leading-relaxed font-mono">
              <span className="text-accent font-semibold">Zero hidden fees:</span> Milestone-based pricing with transparent deliverable gates. Third-party cloud compute and API tokens are billed directly at cost to your own accounts with zero markup.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
