import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-16 px-6 bg-bg">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center text-text-primary text-xl font-semibold tracking-tight"
            >
              <span className="font-mono text-accent">f0</span>
              <span>undr</span>
            </Link>
            <p className="text-text-secondary text-xs mt-3 max-w-sm leading-relaxed">
              f0undr is a global agency engineering custom software, cross-platform apps, games, autonomous AI agents, and viral commercial media.
            </p>
            <div className="mt-4 text-[11px] font-mono text-text-muted">
              operating globally // continuous deployment
            </div>
          </div>

          {/* Capabilities Col */}
          <div>
            <span className="text-xs font-mono text-text-primary block mb-3 lowercase">
              capabilities
            </span>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <a 
                  href="https://order.f0undrteam.site/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <span>f0undr order (live)</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ai.f0undrteam.site/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <span>f0undr ai (live)</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-standard">
                  video ads & posters
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-standard">
                  custom ai agents
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-standard">
                  windows & mac apps
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-standard">
                  game development
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-standard">
                  rea security audits
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture Col */}
          <div>
            <span className="text-xs font-mono text-text-primary block mb-3 lowercase">
              open ecosystems
            </span>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <a href="#agents" className="hover:text-accent transition-standard">
                  agency-agents fleet
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-accent transition-standard">
                  codebase-memory graph
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-accent transition-standard">
                  graphify synthesis
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-accent transition-standard">
                  open-seo infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Col */}
          <div>
            <span className="text-xs font-mono text-text-primary block mb-3 lowercase">
              connect
            </span>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <a href="mailto:huzaifa.f0undr@gmail.com" className="hover:text-accent transition-standard">
                  huzaifa.f0undr@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-standard">
                  github
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-standard">
                  x (twitter)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-standard">
                  linkedin
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} f0undr agency. all rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-accent transition-standard">
              privacy policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-standard">
              terms of service
            </Link>
            <Link href="/refund" className="hover:text-accent transition-standard">
              refund policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-accent transition-standard">
              cookie policy
            </Link>
            <a href="mailto:huzaifa.f0undr@gmail.com?subject=Data%20Deletion%20Request" className="hover:text-accent transition-standard">
              request data deletion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
