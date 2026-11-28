import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PROJECTS } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) {
    return { title: 'Case Study Not Found' };
  }
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: {
      canonical: `https://f0undrteam.site/work/${project.id}`,
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-bg text-text-primary">
      <Navbar />
      <main className="flex-1 pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-standard mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>back to selected works</span>
          </Link>

          <div className="border-b border-border-subtle pb-8 mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent-subtle text-accent lowercase mb-4">
              {project.tag}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary leading-tight">
              {project.title}
            </h1>
            <p className="text-text-secondary text-base mt-4 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {project.image && (
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 border border-border-subtle bg-black shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="glass-panel p-5 rounded-2xl border-border-subtle">
                <span className="text-xs font-mono text-text-muted block">{metric.label}</span>
                <span className="text-xl font-bold font-mono text-accent mt-1 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass-panel p-6 rounded-2xl border-border-subtle">
              <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
                01 // Challenge
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.challenge}</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-border-subtle">
              <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
                02 // Architecture &amp; Execution
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Deliverables & Stack */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-border-subtle mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Tangible Deliverables</span>
                </h3>
                <ul className="space-y-2.5 text-sm text-text-primary">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent" />
                  <span>Technology &amp; Pipeline</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-tag-bg border border-border-subtle text-xs font-mono text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="glass-panel p-8 rounded-3xl border-accent/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                Need a similar build for your team?
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                Configure your exact scope or speak directly with M. Huzaifa.
              </p>
            </div>
            <a
              href="https://order.f0undrteam.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-semibold bg-accent text-bg hover:bg-white hover:text-black transition-all font-mono flex items-center gap-2 shrink-0"
            >
              <span>commission on order portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
