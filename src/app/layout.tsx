import type { Metadata } from 'next';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://f0undrteam.site'),
  title: {
    default: 'f0undr | Bespoke Software, Games & Creative Studio',
    template: '%s | f0undr',
  },
  description:
    'Custom Software · Mobile Apps · 2D/3D Games · Cinematic Video Ads · Autonomous AI Systems · Anti-Bot Scrapers · REA Security. Commission bespoke engineering by f0undr. Directed by M. Huzaifa.',
  keywords: [
    'f0undr',
    'f0undr team',
    'f0undr agency',
    'f0undr studio',
    'bespoke software development',
    'custom mobile apps',
    'game development studio',
    'cinematic video advertising',
    'autonomous AI systems',
    'M. Huzaifa',
  ],
  authors: [{ name: 'M. Huzaifa — f0undr Core', url: 'https://f0undrteam.site' }],
  creator: 'f0undr',
  publisher: 'f0undr Global',
  applicationName: 'f0undr',
  alternates: {
    canonical: 'https://f0undrteam.site',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f0undrteam.site',
    siteName: 'f0undr',
    title: 'f0undr | Bespoke Software, Games & Creative Studio',
    description:
      'Commission custom software, cross-platform apps, 2D/3D games, cinematic video ads, and autonomous AI systems. Directed by M. Huzaifa.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'f0undr — Bespoke Software, Games & Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'f0undr | Bespoke Software, Games & Creative Studio',
    description:
      'Commission custom software, cross-platform apps, 2D/3D games, cinematic video ads, and autonomous AI systems.',
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
      // 1. Google Search Site Name & Identity
      {
        '@type': 'WebSite',
        '@id': 'https://f0undrteam.site/#website',
        url: 'https://f0undrteam.site',
        name: 'f0undr',
        alternateName: [
          'f0undr Studio',
          'f0undr Team',
          'f0undr Agency',
          'f0undrteam',
        ],
        description:
          'Bespoke software engineering, cross-platform applications, 2D/3D game development, and cinematic commercial advertising.',
        publisher: {
          '@id': 'https://f0undrteam.site/#organization',
        },
      },

      // 2. Organization Schema for Favicon & Knowledge Graph
      {
        '@type': 'Organization',
        '@id': 'https://f0undrteam.site/#organization',
        name: 'f0undr',
        legalName: 'f0undr Studio',
        url: 'https://f0undrteam.site',
        logo: {
          '@type': 'ImageObject',
          url: 'https://f0undrteam.site/icon.png',
          width: 512,
          height: 512,
        },
        image: 'https://f0undrteam.site/og-image.svg',
        email: 'huzaifa.f0undr@gmail.com',
        telephone: '+923446789261',
        founder: {
          '@type': 'Person',
          name: 'M. Huzaifa',
        },
        sameAs: [
          'https://order.f0undrteam.site/',
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
            name: 'f0undr Order Portal',
            description:
              'Commission bespoke software, cross-platform apps, 2D/3D games, cinematic videos, and autonomous AI systems.',
            url: 'https://order.f0undrteam.site/',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Capabilities & Services',
            description:
              'Custom software, cross-platform mobile/desktop apps, 2D/3D game engines, and commercial advertising.',
            url: 'https://f0undrteam.site/capabilities',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Selected Works & Case Studies',
            description:
              'Commercial video advertisements, FMCG product packaging campaigns, and deep-tech security architectures.',
            url: 'https://f0undrteam.site/work',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Direct Contact Hub',
            description:
              'Direct project dispatch via WhatsApp (+92 344 6789261), Discord (king_huzaifa001), and phone call.',
            url: 'https://f0undrteam.site/contact',
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'f0undr AI Platform',
            description:
              'Direct access to our live autonomous intelligence workflows and agent orchestration platform.',
            url: 'https://ai.f0undrteam.site/',
          },
        ],
      },

      // 4. ProfessionalService Schema
      {
        '@type': 'ProfessionalService',
        '@id': 'https://f0undrteam.site/#service',
        name: 'f0undr Studio',
        url: 'https://f0undrteam.site',
        image: 'https://f0undrteam.site/og-image.svg',
        telephone: '+923446789261',
        priceRange: '$$$$',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Worldwide',
        },
        founder: {
          '@type': 'Person',
          name: 'M. Huzaifa',
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="application-name" content="f0undr" />
        <meta name="apple-mobile-web-app-title" content="f0undr" />
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
