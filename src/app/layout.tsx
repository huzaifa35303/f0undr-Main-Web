import type { Metadata } from 'next';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://f0undrteam.site'),
  title: {
    default: 'f0undr — Creative Production, Deep-Tech & AI Systems Agency',
    template: '%s | f0undr',
  },
  description:
    'f0undr builds high-impact advertising, 4K video campaigns, custom software, cross-platform apps, games, and autonomous AI agent systems for forward-thinking brands.',
  keywords: [
    'f0undr',
    'f0undr team',
    'f0undr agency',
    'AI agency',
    'custom software development',
    'AI agents',
    'video production and ads',
    'cross-platform apps',
    'game development',
    'Next.js development',
    'deep tech engineering',
  ],
  authors: [{ name: 'f0undr Core Team', url: 'https://f0undrteam.site' }],
  creator: 'f0undr',
  publisher: 'f0undr Global',
  alternates: {
    canonical: 'https://f0undrteam.site',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f0undrteam.site',
    title: 'f0undr — Creative Production, Deep-Tech & AI Systems Agency',
    description:
      'We engineer software, build games, and forge AI agents. And we make the high-converting ads that launch them to the world.',
    siteName: 'f0undr',
    images: [
      {
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Google Search Site Name & Sitelinks SearchBox
      {
        '@type': 'WebSite',
        '@id': 'https://f0undrteam.site/#website',
        url: 'https://f0undrteam.site',
        name: 'f0undr',
        alternateName: [
          'f0undr Team',
          'founder team',
          'f0undrteam',
          'f0undr Agency',
          'f0undr Global',
        ],
        description:
          'Creative production, deep-tech software engineering, and autonomous AI systems.',
        publisher: {
          '@id': 'https://f0undrteam.site/#organization',
        },
      },

      // 2. Organization Schema with Logo for Search Favicon & Knowledge Graph
      {
        '@type': 'Organization',
        '@id': 'https://f0undrteam.site/#organization',
        name: 'f0undr',
        url: 'https://f0undrteam.site',
        logo: {
          '@type': 'ImageObject',
          url: 'https://f0undrteam.site/icon.png',
          width: '256',
          height: '256',
        },
        image: 'https://f0undrteam.site/og-image.svg',
        email: 'huzaifa.f0undr@gmail.com',
        sameAs: [
          'https://ai.f0undrteam.site/',
          'https://github.com/huzaifa35303/f0undr-Main-Web',
        ],
      },

      // 3. SiteNavigationElement (Produces the rich Google Sitelinks like "Download Apps", "TV Shows")
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Capabilities & Services',
            description:
              'Full-spectrum engineering: 4K cinema video ads, commercial poster suites, custom software, and cross-platform apps.',
            url: 'https://f0undrteam.site/#capabilities',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Autonomous AI Agents',
            description:
              'Production-ready autonomous agent fleets, MCP tooling, and neural architecture pipelines.',
            url: 'https://f0undrteam.site/#agents',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Selected Works & Case Studies',
            description:
              'Live commercial video advertisements, FMCG product packaging campaigns, and deep-tech security architectures.',
            url: 'https://f0undrteam.site/#work',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Interactive Scope Estimator',
            description:
              'Configure deliverables, select service modules, and calculate transparent milestone timelines with zero hidden fees.',
            url: 'https://f0undrteam.site/#calculator',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'f0undr AI Platform',
            description:
              'Direct access to our live autonomous intelligence workflows and agent orchestration platform.',
            url: 'https://ai.f0undrteam.site/',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'Project Intake Terminal',
            description:
              'Transmit your project brief directly to our engineering and creative leads with guaranteed 24h response.',
            url: 'https://f0undrteam.site/#contact',
          },
        ],
      },

      // 4. ProfessionalService Schema
      {
        '@type': 'ProfessionalService',
        '@id': 'https://f0undrteam.site/#service',
        name: 'f0undr Agency',
        url: 'https://f0undrteam.site',
        image: 'https://f0undrteam.site/og-image.svg',
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
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent-subtle selection:text-accent">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
