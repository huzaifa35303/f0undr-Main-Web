'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, CheckCircle2 } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <Cookie className="w-3.5 h-3.5" />
            <span>transparency &amp; consent // ePrivacy Directive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            f0undr is committed to a zero-surveillance web. We only utilize strictly necessary client-side storage to deliver website functionality and remember your consent state.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          
          {/* Section 1 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>1. What Cookies We Store</span>
            </h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs font-mono text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle text-text-muted">
                    <th className="py-2 pr-4">Key / Identifier</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Lifespan</th>
                    <th className="py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="py-2.5 pr-4 text-text-primary font-bold">f0undr_cookie_consent</td>
                    <td className="py-2.5 pr-4 text-accent">Essential LocalStorage</td>
                    <td className="py-2.5 pr-4">Persistent</td>
                    <td className="py-2.5">Stores your cookie consent choice so the banner does not repeat.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-text-primary font-bold">f0undr_calc_estimate</td>
                    <td className="py-2.5 pr-4 text-accent">Session Storage</td>
                    <td className="py-2.5 pr-4">Session</td>
                    <td className="py-2.5">Preserves your temporary interactive project estimate when navigating.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>2. Zero Third-Party Tracking</span>
            </h2>
            <p className="text-xs mb-3">
              We do not inject third-party ad networks, behavioural trackers, or retargeting pixels (e.g., Meta Pixel, Google Analytics tracking scripts, or TikTok Pixels).
            </p>
            <p className="text-xs">
              Your device data, browsing habits, and interactions remain strictly private and are never sold or shared.
            </p>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 rounded-2xl border-border-subtle">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              3. Managing &amp; Revoking Consent
            </h2>
            <p className="text-xs mb-3">
              You can clear or reset your consent choices at any time by clearing your browser cookies and site storage for this domain, or by clicking the button below:
            </p>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('f0undr_cookie_consent');
                  window.location.reload();
                }
              }}
              className="px-4 py-2 rounded-xl text-xs font-mono bg-accent-subtle text-accent border border-accent/30 hover:bg-accent hover:text-bg transition-standard"
            >
              reset cookie preferences
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}
