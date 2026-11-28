import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Direct Contact & Order Portal',
  description:
    'Direct contact channels for f0undr Studio: WhatsApp (+92 344 6789261), Discord (king_huzaifa001), direct phone call, and official Order Portal.',
  alternates: {
    canonical: 'https://f0undrteam.site/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-bg text-text-primary">
      <Navbar />
      <main className="flex-1 pt-28">
        <div className="max-w-container mx-auto px-6 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-standard mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to home</span>
          </Link>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
