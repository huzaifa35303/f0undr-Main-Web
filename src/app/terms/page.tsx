import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, CheckCircle2, ShieldCheck, DollarSign, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Engagement Standards',
  description: 'f0undr Agency Terms of Service, client intellectual property transfer, transparent scope, and warranty standards.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-standard mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>return to f0undr headquarters</span>
        </Link>

        <div className="border-b border-border-subtle pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle text-accent text-xs font-mono mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>transparent engagement // legal standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            These terms define our commitment to client intellectual property ownership, milestone-based execution, and transparent pricing with zero hidden fees.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          
          {/* IP Ownership */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>1. 100% Client Intellectual Property (IP) Transfer</span>
            </h2>
            <p className="mb-2">
              Upon final milestone fulfillment and invoice settlement, <strong>the client owns 100% of all custom deliverables</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-text-primary font-mono">
              <li>Source code, Git repositories, and architecture diagrams</li>
              <li>Cinema video masters, poster graphics, raw 3D scene files, and edit timelines</li>
              <li>Custom AI prompt architectures and autonomous agent instructions</li>
            </ul>
          </section>

          {/* Pricing & Zero Hidden Fees */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-accent" />
              <span>2. Transparent Scope &amp; Zero Hidden Fees</span>
            </h2>
            <p className="mb-3">
              We operate exclusively on documented Statements of Work (SOW):
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>No hidden surprises:</strong> Every expense (hosting, compute, API credits, stock licensing) is itemized before commencement.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>No dark patterns:</strong> Zero recurring forced contracts or deceptive auto-renewals.</span>
              </li>
            </ul>
          </section>

          {/* Verification & Warranties */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>3. Truth in Media &amp; Verified Works</span>
            </h2>
            <p className="text-xs leading-relaxed">
              In accordance with ethical advertising standards, f0undr does not publish fabricated user testimonials or invented performance metrics. All case studies reflect actual architectural implementations, licensed client media, and verifiable code repositories.
            </p>
          </section>

          {/* Contact */}
          <div className="pt-4 text-xs font-mono text-text-muted">
            For contractual inquiries and terms verification, contact us at <a href="mailto:huzaifa.f0undr@gmail.com" className="text-accent underline font-mono">huzaifa.f0undr@gmail.com</a>.
          </div>

        </div>
      </div>
    </div>
  );
}
