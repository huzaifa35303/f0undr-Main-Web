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

          {/* Media & Stock Asset Licensing */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>4. Stock &amp; Media Asset Licensing</span>
            </h2>
            <p className="text-xs leading-relaxed mb-2">
              All commercial video footage, audio tracks, 3D assets, and photographic elements integrated into client deliverables are either:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-text-primary font-mono mb-2">
              <li>Custom created and rendered from original source files by f0undr Studio</li>
              <li>Fully cleared and commercially licensed under global royalty-free commercial distribution rights</li>
            </ul>
            <p className="text-xs leading-relaxed">
              Clients receive all corresponding commercial clearance documentation upon final milestone delivery.
            </p>
          </section>

          {/* Age Requirement & Child Privacy */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              5. Eligibility &amp; Age Restrictions (18+)
            </h2>
            <p className="text-xs leading-relaxed">
              f0undr services and project intake platforms are strictly intended for legal entities and individuals who have reached the age of majority (18 years or older). We do not knowingly solicit, enter into contracts with, or collect personal information from individuals under the age of 18 (complying with COPPA and international child protection regulations).
            </p>
          </section>

          {/* Unsubscribe & Communications */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              6. Communications &amp; Unsubscribe Rights
            </h2>
            <p className="text-xs leading-relaxed mb-3">
              We send direct communications only in response to explicit project inquiries or active contracts. We never send unsolicited mass marketing emails.
            </p>
            <p className="text-xs leading-relaxed">
              You can instantly opt out or unsubscribe from any communication by clicking the unsubscribe link in our correspondence or emailing <a href="mailto:huzaifa.f0undr@gmail.com?subject=Unsubscribe" className="text-accent underline font-mono">huzaifa.f0undr@gmail.com</a> with the subject line <strong>&quot;Unsubscribe&quot;</strong>.
            </p>
          </section>

          {/* Business Details */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              7. Business Details &amp; Jurisdiction
            </h2>
            <div className="text-xs font-mono space-y-1 text-text-secondary">
              <p><strong className="text-text-primary">Operating Agency:</strong> f0undr Studio (Directed by M. Huzaifa)</p>
              <p><strong className="text-text-primary">Contact Email:</strong> <a href="mailto:hello@f0undrteam.site?cc=huzaifa.f0undr@gmail.com" className="text-accent underline">hello@f0undrteam.site</a> / <a href="mailto:huzaifa.f0undr@gmail.com" className="text-accent underline">huzaifa.f0undr@gmail.com</a></p>
              <p><strong className="text-text-primary">Primary Domain:</strong> <a href="https://f0undrteam.site/" target="_blank" rel="noopener noreferrer" className="text-accent underline">f0undrteam.site</a></p>
              <p><strong className="text-text-primary">Governing Law:</strong> Governed by the laws of the Islamic Republic of Pakistan and resolved via binding International Commercial Arbitration where applicable.</p>
            </div>
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
