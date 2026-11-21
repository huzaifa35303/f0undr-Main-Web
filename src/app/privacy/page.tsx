import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Mail, Trash2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection',
  description: 'f0undr Agency Privacy Policy, GDPR & CCPA compliance, cookie usage, data minimization, and deletion rights.',
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>gdpr &amp; ccpa compliant // updated 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Privacy Policy &amp; Data Rights
          </h1>
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            f0undr (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates on strict data minimization. We only collect the minimal information necessary to deliver software engineering and commercial media services.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-text-secondary">
          {/* Section 1 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>1. Data We Collect &amp; Purpose</span>
            </h2>
            <p className="mb-3">
              We strictly enforce <strong>data minimization</strong>. We only collect information you voluntarily provide through our project intake forms:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-text-primary font-mono mb-3">
              <li>Contact details: Name, business email address, company name</li>
              <li>Project specifications: Scope preferences, estimated budget, brief notes</li>
            </ul>
            <p className="text-xs">
              We <strong>never sell, lease, or distribute</strong> your personal data to data brokers or third-party advertising networks.
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              <span>2. Third-Party Services &amp; Zero Trackers</span>
            </h2>
            <p className="mb-2">
              We audit our codebase against invasive telemetry SDKs:
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>No third-party advertising pixels:</strong> Zero tracking pixels (Meta, TikTok, Google Remarketing) on this agency website.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>Essential storage only:</strong> Local cookies only store consent status and essential session preferences.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-accent" />
              <span>3. Your Rights &amp; Immediate Data Deletion</span>
            </h2>
            <p className="mb-3">
              Under GDPR, CCPA, and global privacy standards, you hold the absolute right to access, rectify, or demand full erasure of your submitted information:
            </p>
            <div className="p-4 rounded-xl bg-bg border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-accent block">Right to Erasure (Data Deletion)</span>
                <span className="text-xs text-text-muted">Send a one-sentence deletion request to our legal team.</span>
              </div>
              <a
                href="mailto:huzaifa.f0undr@gmail.com?subject=Request%20Data%20Deletion"
                className="px-4 py-2 rounded-lg bg-text-primary text-bg font-mono text-xs hover:bg-accent transition-standard shrink-0 text-center"
              >
                request deletion
              </a>
            </div>
          </section>

          {/* Section 4 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>4. Age Restrictions &amp; Business Transparency</span>
            </h2>
            <p className="text-xs mb-3">
              <strong>Child Privacy (COPPA / GDPR-K):</strong> Our services and website are exclusively directed to commercial businesses, software enterprises, and individuals aged 18 and older. We do not knowingly collect information from minors.
            </p>
            <p className="text-xs">
              <strong>Operational Contact:</strong><br />
              f0undr Agency Global<br />
              Direct Contact: <a href="mailto:huzaifa.f0undr@gmail.com" className="text-accent underline font-mono">huzaifa.f0undr@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
