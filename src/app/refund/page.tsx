import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy & Milestone Terms',
  description: 'f0undr Agency milestone-based refund policy, cancellation procedures, and project guarantees.',
};

export default function RefundPage() {
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
            <RefreshCw className="w-3.5 h-3.5" />
            <span>milestone-based accountability</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            We structure all software and creative media contracts around explicit sign-off gates, ensuring you never pay for unapproved deliverables.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              1. Milestone-Based Protection
            </h2>
            <p className="mb-3">
              Projects are divided into distinct execution stages:
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-bg border border-border-subtle flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-text-primary font-mono block">Stage 1: Strategy, Architecture &amp; Creative Concept</strong>
                  <span>Refundable if f0undr is unable to establish an agreed-upon technical roadmap or creative script.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-bg border border-border-subtle flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-text-primary font-mono block">Stage 2: Active Production (Code, Game Mechanics, Video Shoots)</strong>
                  <span>Billed incrementally. If a client terminates before a milestone completes, only actual completed hours/deliverables are billed; unspent deposits are refunded within 7 business days.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-bg border border-border-subtle flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-text-primary font-mono block">Stage 3: Deployment, Handover &amp; Verification</strong>
                  <span>Final sign-off only occurs after live staging verification and code/media repository handover.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              2. Cancellation Procedure
            </h2>
            <p className="text-xs mb-2">
              Clients may cancel at any time with 7 days written notice to <a href="mailto:huzaifa.f0undr@gmail.com" className="text-accent underline font-mono">huzaifa.f0undr@gmail.com</a>.
            </p>
            <p className="text-xs">
              All approved assets and work-in-progress code produced up to the cancellation date are packaged and transferred to client ownership immediately.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
