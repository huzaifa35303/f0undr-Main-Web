import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-bg text-text-primary text-center">
      <div className="glass-panel p-8 rounded-3xl max-w-md w-full border-border-subtle shadow-2xl">
        <span className="font-mono text-accent text-5xl font-bold block mb-2">404</span>
        <h1 className="text-xl font-semibold mb-2">Route Not Found</h1>
        <p className="text-xs text-text-secondary mb-6 leading-relaxed">
          The requested system node or resource does not exist in the f0undr graph.
        </p>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-full text-xs font-mono bg-text-primary text-bg hover:bg-accent hover:text-bg transition-standard inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>return to headquarters</span>
        </Link>
      </div>
    </div>
  );
}
