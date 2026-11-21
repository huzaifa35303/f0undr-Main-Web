import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import PosterShowcase from '@/components/PosterShowcase';
import CapabilitiesBento from '@/components/CapabilitiesBento';
import AgentRoster from '@/components/AgentRoster';
import ArchitectureGraph from '@/components/ArchitectureGraph';
import CaseStudies from '@/components/CaseStudies';
import ProjectCalculator from '@/components/ProjectCalculator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-bg text-text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VideoShowcase />
        <PosterShowcase />
        <CapabilitiesBento />
        <AgentRoster />
        <ArchitectureGraph />
        <CaseStudies />
        <ProjectCalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
