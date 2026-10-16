/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesCarousel } from './components/ServicesCarousel';
import { MethodologySection } from './components/MethodologySection';
import { SectorsCarousel } from './components/SectorsCarousel';
import { ValuesSection } from './components/ValuesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SectorDetailModal } from './components/SectorDetailModal';
import { DraggableWhatsAppButton } from './components/DraggableWhatsAppButton';
import { ServiceItem, SectorItem } from './data/accertoData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>('inicio');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveScreen(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const mapping: Record<string, string> = {
      servicios: 'servicios-seccion',
      metodologia: 'metodologia-seccion',
      sectores: 'sectores-seccion',
      nosotros: 'nosotros-seccion',
      contacto: 'contacto-directo',
    };

    const targetElement = document.getElementById(mapping[sectionId] || sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForInquiry = (serviceId: string) => {
    setPrefilledService(serviceId);
    scrollToSection('contacto');
  };

  const handleSelectSectorForInquiry = (sectorTitle: string) => {
    setPrefilledService('formalizacion');
    scrollToSection('contacto');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9ff] text-[#181c23] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header Navigation */}
      <Header
        activeScreen={activeScreen}
        onNavigate={scrollToSection}
      />

      {/* Main Page Flow */}
      <main className="w-full flex-grow">
        {/* 2. Hero Section with 11 Background Crossfade Slides */}
        <Hero />

        {/* 3. Services Carousel with Institutional Rigor */}
        <ServicesCarousel
          onSelectService={(srv) => setSelectedService(srv)}
          onOpenConsultation={(srvId) => handleSelectServiceForInquiry(srvId)}
        />

        {/* 4. Methodology & Transparent Process (4 Pillars + Case Flow) */}
        <MethodologySection
          onTalkToAdvisor={() => scrollToSection('contacto')}
        />

        {/* 5. Business Sectors & Solutions per Profile */}
        <SectorsCarousel
          onSelectSector={(sct) => setSelectedSector(sct)}
        />

        {/* 6. Brand Concept & Values Matrix */}
        <ValuesSection />

        {/* 7. Firma, Notaría & Equipo en El Salvador */}
        <AboutSection
          onContactClick={() => scrollToSection('contacto')}
        />

        {/* 8. Interactive Contact & Diagnostic Request */}
        <ContactSection
          prefilledServiceId={prefilledService}
        />
      </main>

      {/* 9. Institutional Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={handleSelectServiceForInquiry}
      />

      <SectorDetailModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
        onSelectForInquiry={handleSelectSectorForInquiry}
      />

      {/* Movable Quick Action Button: WhatsApp */}
      <DraggableWhatsAppButton />
    </div>
  );
}
