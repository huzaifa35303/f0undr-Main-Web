import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ExternalLink, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Portal — Commission Custom Software & Media',
  description:
    'Commission custom websites, mobile apps, 2D/3D games, cinematic video ads, scrapers, and autonomous AI systems through the official f0undr Order Portal.',
  alternates: {
    canonical: 'https://f0undrteam.site/order',
  },
};

export default function OrderRedirectPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-bg text-text-primary">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto glass-panel rounded-3xl p-8 sm:p-10 border-accent/40 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-accent-subtle text-accent border border-accent/30 mx-auto flex items-center justify-center mb-6">
            <Zap className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2">
            official commission studio
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            f0undr Order Portal
          </h1>
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            All project commissions, deliverable specifications, and 60-second express briefs are managed directly through our dedicated Order Portal.
          </p>

          <div className="my-8 p-4 rounded-2xl bg-bg/70 border border-border-subtle text-left space-y-2 text-xs font-mono text-text-secondary">
            <div className="flex items-center gap-2 text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Websites, Mobile Apps &amp; Full-Stack Systems</span>
            </div>
            <div className="flex items-center gap-2 text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>2D/3D Games, Shaders &amp; Real-time Simulations</span>
            </div>
            <div className="flex items-center gap-2 text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>4K Cinematic Video Ads &amp; Commercial Posters</span>
            </div>
            <div className="flex items-center gap-2 text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Autonomous AI Agents &amp; Anti-Bot Scrapers</span>
            </div>
          </div>

          <a
            href="https://order.f0undrteam.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full text-xs font-semibold bg-accent text-bg hover:bg-white hover:text-black transition-all duration-300 font-mono shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
          >
            <span>proceed to order.f0undrteam.site</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="mt-6">
            <Link href="/" className="text-xs font-mono text-text-muted hover:text-accent transition-standard">
              &larr; return to main headquarters
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
