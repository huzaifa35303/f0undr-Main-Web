import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CapabilitiesBento from '@/components/CapabilitiesBento';
import AgentRoster from '@/components/AgentRoster';
import ArchitectureGraph from '@/components/ArchitectureGraph';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capabilities & Engineering Services',
  description:
    'Full-spectrum custom software development: cross-platform mobile apps, 2D/3D game development, autonomous AI agent swarms, and reverse engineering.',
  alternates: {
    canonical: 'https://f0undrteam.site/capabilities',
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-bg text-text-primary">
      <Navbar />
      <main className="flex-1 pt-28">
        <div className="max-w-container mx-auto px-6 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-standard mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to home</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
            <div>
              <span className="text-xs font-mono text-accent lowercase">engineering architecture</span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
                Capabilities &amp; Core Systems
              </h1>
            </div>
            <a
              href="https://order.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-semibold bg-accent text-bg hover:bg-white hover:text-black transition-all duration-300 font-mono inline-flex items-center gap-1.5 shrink-0"
            >
              <span>commission project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <CapabilitiesBento />
        <AgentRoster />
        <ArchitectureGraph />
      </main>
      <Footer />
    </div>
  );
}
