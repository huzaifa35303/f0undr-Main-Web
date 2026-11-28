import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

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
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-accent/40 transition-standard group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-subtle text-accent lowercase">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-text-muted group-hover:text-accent transition-standard flex items-center gap-1">
                    <span>view case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
                      {project.id === 'cine-ad' ? 'commercial key visual' : 'system visual'}
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

              <div className="pt-6 border-t border-border-subtle flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-text-muted block mb-2 lowercase">
                    architecture &amp; stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-tag-bg text-tag-text border border-border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
