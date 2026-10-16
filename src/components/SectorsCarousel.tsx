import React, { useState, useEffect, useRef } from 'react';
import { SECTORS, SectorItem } from '../data/accertoData';

interface SectorsCarouselProps {
  onSelectSector: (sector: SectorItem) => void;
}

export const SectorsCarousel: React.FC<SectorsCarouselProps> = ({ onSelectSector }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handlePrev = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth } = containerRef.current;
      const card = containerRef.current.querySelector<HTMLElement>('.sector-card');
      const step = card ? card.offsetWidth + 20 : 360;

      if (scrollLeft <= 10) {
        // If at the beginning, wrap to the end so Empresas Extranjeras is fully visible
        containerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const card = containerRef.current.querySelector<HTMLElement>('.sector-card');
      const step = card ? card.offsetWidth + 20 : 360;

      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        // If at the end, wrap back to the beginning
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll forward; browser automatically clamps at max scroll so the last card is 100% visible
        containerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-space-3xl bg-[#f9f9ff]" id="sectores-seccion">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs text-[#0d5b6f] font-bold text-xs tracking-wider uppercase mb-space-xs">
            <span className="w-2 h-0.5 bg-[#bb0013]" />
            <span>Perfiles & Sectores Clave</span>
          </div>
          <h2 className="text-headline-lg text-[#181c23] tracking-tight">
            Soluciones diseñadas para cada perfil de negocio
          </h2>
          <p className="text-body-md text-[#40484c]">
            Atención especializada que se adapta a la etapa de madurez y los desafíos particulares de su empresa.
          </p>
        </div>

        {/* Carousel Track with Left and Right Navigation Arrows */}
        <div className="relative w-full flex items-center">
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Sector anterior"
            className="absolute -left-2 sm:-left-4 lg:-left-5 z-20 w-11 h-11 rounded-full bg-white text-[#0d5b6f] hover:bg-[#317488] hover:text-white shadow-md border border-[#E4E8E9] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            title="Ver sector anterior"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>

          {/* Sector Carousel Scrollable Track */}
          <div
            ref={containerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-5 py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {SECTORS.map((sector) => (
              <div
                key={sector.id}
                className="sector-card snap-start w-[280px] sm:w-[330px] md:w-[350px] lg:w-[370px] shrink-0 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md border border-[#E4E8E9] flex flex-col justify-between group transition-all duration-300"
              >
                {/* Image Header with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-[#ebeef9]">
                  <img
                    src={sector.imageUrl}
                    alt={sector.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#EAF2F5]/95 backdrop-blur-sm text-[#0d5b6f] text-xs px-2.5 py-0.5 rounded-full font-bold shadow-xs border border-[#0d5b6f]/20">
                    {sector.badge}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-[#181c23] mb-1.5 group-hover:text-[#0d5b6f] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-[#40484c] mb-3 leading-relaxed">
                      {sector.description}
                    </p>

                    {/* Central Objective Box */}
                    <div className="bg-[#F7F7F7] p-2.5 rounded-lg border border-[#E4E8E9] mb-3">
                      <span className="text-[11px] font-semibold text-[#0d5b6f] block mb-0.5">
                        Objetivo central:
                      </span>
                      <span className="text-xs text-[#40484c] leading-snug block">
                        {sector.centralObjective}
                      </span>
                    </div>

                    {/* Key Services Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {sector.keyServices.map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#f0f3fe] text-[#0d5b6f]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2.5 border-t border-[#E4E8E9] flex justify-center">
                    <button
                      onClick={() => onSelectSector(sector)}
                      className="inline-flex items-center justify-center text-[11px] font-bold text-white bg-[#0d5b6f] hover:bg-[#1a4a58] py-1.5 px-4 rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
                    >
                      <span>{sector.ctaText}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Siguiente sector"
            className="absolute -right-2 sm:-right-4 lg:-right-5 z-20 w-11 h-11 rounded-full bg-white text-[#0d5b6f] hover:bg-[#317488] hover:text-white shadow-md border border-[#E4E8E9] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            title="Ver siguiente sector"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
