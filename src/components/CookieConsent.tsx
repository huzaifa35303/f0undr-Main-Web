'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('f0undr_cookie_consent');
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('f0undr_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('f0undr_cookie_consent', 'necessary_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="glass-panel rounded-2xl p-5 border-border-strong shadow-2xl bg-bg-card/95 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-text-primary">
              Privacy &amp; Data Transparency
            </h4>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              We only use necessary cookies to ensure system stability and performance. No invasive tracking, no third-party data selling, and zero dark patterns.{' '}
              <Link href="/privacy" className="text-accent underline hover:text-text-primary transition-standard">
                Learn more
              </Link>.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-accent text-bg font-semibold hover:bg-text-primary transition-standard"
              >
                accept all
              </button>
              <button
                type="button"
                onClick={acceptNecessary}
                className="px-4 py-2 rounded-xl text-xs font-mono border border-border-subtle bg-bg hover:border-border-strong text-text-secondary hover:text-text-primary transition-standard"
              >
                essential only
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={acceptNecessary}
            className="text-text-muted hover:text-text-primary transition-standard p-1 -mr-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
