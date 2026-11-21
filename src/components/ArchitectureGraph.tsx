'use client';

import React, { useState } from 'react';
import { Network, Database, Cpu, GitBranch, Shield, Zap, Layers } from 'lucide-react';

interface GraphNode {
  id: string;
  title: string;
  category: 'input' | 'memory' | 'orchestration' | 'output';
  description: string;
  connections: string[];
}

const NODES: GraphNode[] = [
  {
    id: 'brief',
    title: 'Client Specification & Creative Brief',
    category: 'input',
    description: 'Product requirements, target audience, brand assets, and target delivery platforms (Web, Windows, macOS, Mobile).',
    connections: ['cbm-memory', 'agent-swarm'],
  },
  {
    id: 'cbm-memory',
    title: 'Codebase Memory & Graphify Index',
    category: 'memory',
    description: 'Dynamic graph knowledge base holding AST signatures, design tokens, ADR records, and cross-repo dependencies.',
    connections: ['agent-swarm', 'verification'],
  },
  {
    id: 'agent-swarm',
    title: 'Autonomous Swarm Orchestrator',
    category: 'orchestration',
    description: 'Dispatches specialized agency-agents for creative scripting, frontend rendering, backend architecture, and game logic.',
    connections: ['creative-pipeline', 'code-engine'],
  },
  {
    id: 'creative-pipeline',
    title: 'Media & Commercial Ads Engine',
    category: 'orchestration',
    description: 'Generates 4K video ads, 3D motion graphics, conversion posters, and multi-channel campaign variations.',
    connections: ['final-delivery'],
  },
  {
    id: 'code-engine',
    title: 'Multi-Platform Build & REA Engine',
    category: 'orchestration',
    description: 'Compiles Next.js platforms, desktop binaries, native mobile bundles, and executes REA security audits.',
    connections: ['verification'],
  },
  {
    id: 'verification',
    title: 'Open-SEO & Quality Verification Gate',
    category: 'memory',
    description: 'Automated Hallmark floor checks, Open-SEO JSON-LD validation, and Lighthouse 100 performance scoring.',
    connections: ['final-delivery'],
  },
  {
    id: 'final-delivery',
    title: 'Production Ecosystem Release',
    category: 'output',
    description: 'Production website live, desktop binaries signed, ad campaigns running, and custom AI agents operational.',
    connections: [],
  },
];

export default function ArchitectureGraph() {
  const [activeNode, setActiveNode] = useState<GraphNode>(NODES[1]);

  return (
    <section id="architecture" className="py-24 px-6 border-t border-border-subtle">
      <div className="max-w-container mx-auto">
        <div className="mb-14">
          <span className="text-xs font-mono text-accent lowercase">graphify & memory architecture</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Deterministic execution from concept to deployed systems.
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl text-base">
            How f0undr orchestrates media, code, agents, and verification into a single unified knowledge graph.
          </p>
        </div>

        {/* Interactive Graph Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Node Selector Grid */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono text-text-muted lowercase block mb-2">
              interactive system nodes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NODES.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNode(node)}
                    className={`p-4 rounded-xl text-left border transition-standard flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-accent bg-accent-subtle/20 shadow-lg'
                        : 'border-border-subtle bg-bg-card hover:border-border-strong hover:bg-bg-hover'
                    }`}
                  >
                    <div className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-accent text-bg' : 'bg-tag-bg text-text-secondary'
                    }`}>
                      <Network className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                        {node.category}
                      </span>
                      <h4 className="text-sm font-medium text-text-primary mt-0.5">
                        {node.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Inspector */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border-accent/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-4">
                <span className="text-xs font-mono text-accent uppercase">
                  node telemetry // {activeNode.id}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-subtle text-accent uppercase">
                  {activeNode.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {activeNode.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {activeNode.description}
              </p>

              {activeNode.connections.length > 0 && (
                <div>
                  <span className="text-xs font-mono text-text-muted block mb-2 lowercase">
                    downstream graph edges:
                  </span>
                  <div className="space-y-1.5">
                    {activeNode.connections.map((conn) => (
                      <div
                        key={conn}
                        className="px-3 py-1.5 rounded-lg bg-tag-bg border border-border-subtle flex items-center gap-2 text-xs font-mono text-text-secondary"
                      >
                        <Zap className="w-3 h-3 text-accent" />
                        <span>edge: {conn}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-border-subtle text-[11px] font-mono text-text-muted flex items-center justify-between">
              <span>status: verified</span>
              <span>graph: synapsed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
