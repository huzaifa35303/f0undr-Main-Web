'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Terminal, 
  Cpu, 
  Flame, 
  Sparkles, 
  Code2, 
  Megaphone, 
  Gamepad2, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface AgentItem {
  id: string;
  name: string;
  division: string;
  role: string;
  description: string;
  tools: string[];
  mode: 'autonomous' | 'orchestrated' | 'eval-driven';
}

const AGENTS_DATA: AgentItem[] = [
  {
    id: 'agent-1',
    name: 'OmniArchitect',
    division: 'engineering',
    role: 'Autonomous Full-Stack Engineer',
    description: 'Generates end-to-end architectures, writes production Next.js/TypeScript code, resolves dependencies, and applies lint guardrails.',
    tools: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    mode: 'autonomous',
  },
  {
    id: 'agent-2',
    name: 'CineForge',
    division: 'creative',
    role: 'Commercial Video & Motion Director',
    description: 'Scripts high-converting 30s-60s video ads, composes camera prompts, syncs audio cues, and formats multi-platform video aspect ratios.',
    tools: ['After Effects', 'Blender', 'Runway', 'ElevenLabs'],
    mode: 'orchestrated',
  },
  {
    id: 'agent-3',
    name: 'OpenRanker',
    division: 'growth',
    role: 'Open-SEO & Search Relevance Specialist',
    description: 'Implements semantic JSON-LD structures, audit crawls, dynamic OpenGraph generation, and SERP visibility indexing.',
    tools: ['Open-SEO MCP', 'JSON-LD', 'Sitemap Engine', 'Schema.org'],
    mode: 'eval-driven',
  },
  {
    id: 'agent-4',
    name: 'BinarySentinel',
    division: 'security',
    role: 'REA Binary & Protocol Auditor',
    description: 'Inspects compiled desktop binaries, audits native cross-platform bridges (Electron/Tauri), and verifies zero memory leakage.',
    tools: ['REA Toolset', 'Rizin Debugger', 'Frida Hooking', 'Mach-O / PE'],
    mode: 'eval-driven',
  },
  {
    id: 'agent-5',
    name: 'GameCrafter',
    division: 'gaming',
    role: 'Interactive Game & Mechanics Scripter',
    description: 'Builds player controller loops, shader graphs, audio cues, and multi-resolution game rendering for desktop and web.',
    tools: ['Godot 4', 'GDScript', 'Three.js', 'ShaderLab'],
    mode: 'autonomous',
  },
  {
    id: 'agent-6',
    name: 'AdVanguard',
    division: 'growth',
    role: 'Paid Media & Creative Ads Optimizer',
    description: 'Designs dynamic ad variations, tests copy angles, coordinates poster key visuals, and optimizes ROAS across channels.',
    tools: ['Meta Ads API', 'Google Ads', 'Figma API', 'Conversion Tracking'],
    mode: 'orchestrated',
  },
];

export default function AgentRoster() {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const divisions = [
    { key: 'all', label: 'all agents' },
    { key: 'engineering', label: 'engineering' },
    { key: 'creative', label: 'creative & media' },
    { key: 'growth', label: 'growth & seo' },
    { key: 'gaming', label: 'gaming' },
    { key: 'security', label: 'security & rea' },
  ];

  const filteredAgents =
    selectedDivision === 'all'
      ? AGENTS_DATA
      : AGENTS_DATA.filter((agent) => agent.division === selectedDivision);

  return (
    <section id="agents" className="py-24 px-6 border-t border-border-subtle bg-bg-subtle/40">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-accent lowercase">agent workforce</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
              Autonomous AI agents customized for your exact mission.
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-md mt-4 md:mt-0">
            Powered by agency-agents architectures. Each agent comes pre-loaded with domain heuristics, MCP tool access, and deterministic guardrails.
          </p>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border-subtle">
          {divisions.map((div) => (
            <button
              key={div.key}
              type="button"
              onClick={() => setSelectedDivision(div.key)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-standard lowercase ${
                selectedDivision === div.key
                  ? 'bg-accent text-bg font-semibold'
                  : 'bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong'
              }`}
            >
              {div.label}
            </button>
          ))}
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 transition-standard group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-standard">
                        {agent.name}
                      </h3>
                      <span className="text-xs font-mono text-text-muted lowercase">
                        {agent.division}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-border-subtle text-text-secondary">
                    {agent.mode}
                  </span>
                </div>

                <p className="text-xs font-medium text-text-primary mb-2">
                  {agent.role}
                </p>

                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {agent.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-text-muted block mb-2 lowercase">
                  active tools:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {agent.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-tag-bg text-[10px] font-mono text-tag-text"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Agent Deploy Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-accent/40 bg-accent-subtle/10">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-accent shrink-0" />
            <div>
              <p className="text-sm font-medium text-text-primary">
                Experience our live AI platform at <span className="text-accent font-mono">ai.f0undrteam.site</span>
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                Interact with f0undr autonomous systems or deploy custom agents trained on your private codebase.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://ai.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-mono bg-accent text-bg font-semibold hover:bg-text-primary transition-standard flex items-center gap-1.5"
            >
              <span>open ai platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-medium border border-border-strong text-text-primary hover:border-accent hover:text-accent transition-standard"
            >
              custom build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
