import React from 'react';
import { 
  Video, 
  Bot, 
  Globe, 
  Gamepad2, 
  Binary, 
  Smartphone, 
  Monitor, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function CapabilitiesBento() {
  return (
    <section id="capabilities" className="py-24 px-6 border-t border-border-subtle">
      <div className="max-w-container mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-mono text-accent lowercase">capabilities matrix</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Engineered software and high-impact media under one roof.
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl text-base">
            Most agencies only write code or only make ads. f0undr builds the entire product ecosystem from architecture to campaign.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Custom AI Agents & Workflows (Spans 2 cols on md) */}
          <div className="glass-panel rounded-2xl p-8 md:col-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-6">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-accent lowercase">ai systems</span>
              <h3 className="text-2xl font-semibold text-text-primary mt-1 mb-3">
                Autonomous AI agents & custom LLM pipelines
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                We design and orchestrate agent fleets capable of multi-step reasoning, tool execution, and database integration. Whether replacing repetitive operations or augmenting human teams, our agents operate reliably with memory and guardrails.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">multi-agent swarms</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">mcp servers</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">rag pipelines</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">function calling</span>
            </div>
          </div>

          {/* Card 2: Commercial Media & Video Ads */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-6">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-accent lowercase">creative production</span>
              <h3 className="text-2xl font-semibold text-text-primary mt-1 mb-3">
                Ads, posters & commercial video
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Cinema-grade product launch trailers, dynamic motion graphics, viral social ads, and key visual posters crafted to drive conversions.
              </p>
              
              {/* Video mini preview */}
              <div className="relative rounded-xl overflow-hidden aspect-video border border-border-subtle bg-black my-2">
                <video
                  src="/videos/ad-showcase.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-bg-card/90 text-accent border border-border-subtle">
                  live shoot
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">3d motion</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">video campaigns</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">key visuals</span>
            </div>
          </div>

          {/* Card 3: Cross-Platform Desktop & Mobile Apps */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-6">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-accent lowercase">native & desktop</span>
              <h3 className="text-2xl font-semibold text-text-primary mt-1 mb-3">
                Desktop & mobile applications
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Native-grade apps for Windows, macOS, iOS, and Android. Built with hardware acceleration, secure IPC, and offline sync.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">windows & macos</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">ios & android</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">electron & tauri</span>
            </div>
          </div>

          {/* Card 4: Web Applications & Cloud Platforms */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-accent lowercase">full-stack web</span>
              <h3 className="text-2xl font-semibold text-text-primary mt-1 mb-3">
                High-performance web platforms
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Next.js web systems built with microsecond latency, fluid animations, enterprise security, and strict SEO optimization.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">next.js 15</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">tailwind & framer</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">serverless api</span>
            </div>
          </div>

          {/* Card 5: Game Development & Interactive Engines */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-6">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-accent lowercase">interactive & gaming</span>
              <h3 className="text-2xl font-semibold text-text-primary mt-1 mb-3">
                Game development & real-time simulations
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                2D/3D games, gamified brand experiences, and shader pipelines engineered with Godot, Unity, or custom WebGL engines.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">godot & unity</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">webgl / three.js</span>
              <span className="px-3 py-1 rounded-full bg-tag-bg text-tag-text font-mono">shader programming</span>
            </div>
          </div>

          {/* Card 6: Reverse Engineering & Deep Tech (From REA) - Spans 3 cols */}
          <div className="glass-panel rounded-2xl p-8 md:col-span-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Binary className="w-5 h-5" />
                <span className="text-xs font-mono lowercase">deep tech & security (rea)</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Binary analysis, reverse engineering & security audit
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                Decompilation, proprietary protocol inspection, bottleneck diagnosis, and binary verification to safeguard your proprietary intellectual property.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-mono text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>protocol decoding</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-mono text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>memory profiling</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-mono text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>security hardening</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
