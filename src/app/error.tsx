'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Prints detailed error directly into the terminal & browser console just like a Discord bot
    console.error('==================== [f0undr RUNTIME ERROR] ====================');
    console.error(`Timestamp: ${new Date().toISOString()}`);
    console.error(`Message: ${error.message}`);
    if (error.digest) console.error(`Digest: ${error.digest}`);
    if (error.stack) console.error(`Stack trace:\n${error.stack}`);
    console.error('================================================================');
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="glass-panel rounded-2xl p-8 max-w-lg w-full border-red-500/30 bg-red-950/20 shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-2">
          Runtime Exception Caught
        </h2>
        <p className="text-xs font-mono text-text-secondary bg-bg p-3 rounded-lg border border-border-subtle overflow-x-auto text-left mb-6 text-red-300">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-full text-xs font-mono bg-text-primary text-bg hover:bg-accent hover:text-bg transition-standard inline-flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>re-render component</span>
        </button>
      </div>
    </div>
  );
}
