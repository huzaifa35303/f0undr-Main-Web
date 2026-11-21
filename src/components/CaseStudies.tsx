import React from 'react';
import { ExternalLink, Play, Code2, Bot, Layers, ShieldCheck } from 'lucide-react';

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  summary: string;
  image?: string;
  deliverables: string[];
  stack: string[];
}

const PROJECTS: CaseStudy[] = [
  {
    id: 'cine-ad',
    tag: 'creative ads & video',
    title: 'Commercial Key Visual & Ad Production Suite',
    summary: 'Crafted 4K commercial video cutdowns, studio lighting setups, and key visual poster suites for broadcast, social ads, and retail point-of-sale.',
    image: '/images/posters/poster-lays-studio.jpg',
    deliverables: ['4K Cinema Trailer', 'Studio Lighting Master', 'Billboard Key Visuals', 'Social Cutdowns'],
    stack: ['Cinema 4D', 'DaVinci Resolve', 'Commercial Food Styling', 'Color Grading'],
  },
  {
    id: 'ai-agents',
    tag: 'autonomous agents',
    title: 'Autonomous Research & Decision Fleet',
    summary: 'Designed a fleet of 5 coordinated AI agents connected through Model Context Protocol (MCP) to automate regulatory compliance and data intake.',
    deliverables: ['Multi-Agent Dispatcher', 'Custom MCP Connectors', 'Deterministic Guardrails', 'Trace Visualizer'],
    stack: ['Python', 'FastAPI', 'Claude SDK', 'PostgreSQL pgvector'],
  },
  {
    id: 'desktop-suite',
    tag: 'cross-platform software',
    title: 'Strata Studio: Desktop Audio & Media Suite',
    summary: 'Engineered a native cross-platform application for Windows and macOS with sub-5ms audio processing latency and hardware GPU acceleration.',
    deliverables: ['Windows MSIX & macOS DMG', 'C++ Audio DSP Core', 'Hardware Accelerated UI', 'Offline SQLite Sync'],
    stack: ['Tauri', 'Rust', 'Next.js UI', 'Metal / DirectX'],
  },
  {
    id: 'game-prototype',
    tag: 'game development',
    title: 'VoxelDrift: Interactive Stylized Simulator',
    summary: 'Built an interactive physics-driven simulator with custom volumetric shaders, dynamic camera rigs, and cross-platform controller support.',
    deliverables: ['Godot Engine Core', 'Custom HLSL Shaders', 'WebAssembly Browser Build', 'Steam-Ready Packaging'],
    stack: ['Godot 4', 'GDScript', 'Compute Shaders', 'Wasm'],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 border-t border-border-subtle bg-bg-subtle/30">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono text-accent lowercase">selected works</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
              Production systems delivered to client specification.
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-md mt-4 md:mt-0">
            Every engagement delivers fully verified codebases, signed application binaries, cinema-grade masters, or operational agent swarms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-accent/40 transition-standard group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-subtle text-accent lowercase">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    verified build
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary group-hover:text-accent transition-standard mb-3">
                  {project.title}
                </h3>

                {project.image && (
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4 border border-border-subtle bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-standard duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg-card/90 text-accent border border-border-subtle">
                      commercial key visual
                    </div>
                  </div>
                )}

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-mono text-text-muted block mb-2 lowercase">
                    tangible deliverables:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-primary">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <span className="text-[11px] font-mono text-text-muted block mb-2 lowercase">
                  technology stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-tag-bg text-[10px] font-mono text-tag-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
