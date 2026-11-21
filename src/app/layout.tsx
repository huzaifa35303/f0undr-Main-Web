import type { Metadata } from 'next';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://f0undr.agency'),
  title: {
    default: 'f0undr — Creative Production, Deep-Tech & AI Systems Agency',
    template: '%s | f0undr',
  },
  description:
    'f0undr builds high-impact advertising, video campaigns, custom software, cross-platform apps, games, and autonomous AI agent systems for forward-thinking brands.',
  keywords: [
    'AI agency',
    'custom software development',
    'AI agents',
    'video production and ads',
    'cross-platform apps',
    'game development',
    'f0undr',
    'Next.js development',
    'deep tech engineering',
  ],
  authors: [{ name: 'f0undr Core Team', url: 'https://f0undr.agency' }],
  creator: 'f0undr',
  publisher: 'f0undr Global',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f0undr.agency',
    title: 'f0undr — Creative Production, Deep-Tech & AI Systems Agency',
    description:
      'We engineer software, build games, and forge AI agents. And we make the high-converting ads that launch them to the world.',
    siteName: 'f0undr',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'f0undr Agency — Creative, Tech & AI Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'f0undr — Creative Production, Deep-Tech & AI Systems Agency',
    description:
      'Software engineering, cross-platform apps, games, custom AI agents, and viral media campaigns.',
    creator: '@f0undr',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'f0undr',
    image: 'https://f0undr.agency/og-image.jpg',
    url: 'https://f0undr.agency',
    description:
      'Full-spectrum creative production, software engineering, mobile/desktop app development, and custom autonomous AI systems.',
    serviceType: [
      'Custom AI Agent Engineering',
      'Software & Web Application Development',
      'Mobile & Desktop App Development',
      'Video Production & Advertising Campaigns',
      'Game Development',
      'Reverse Engineering & Security Analysis',
    ],
    areaServed: 'Worldwide',
    priceRange: '$$$$',
    knowsAbout: [
      'Artificial Intelligence',
      'Autonomous Agents',
      'Creative Advertising',
      'Cross-Platform Software',
      'Game Engines',
      'Reverse Engineering',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent-subtle selection:text-accent">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
