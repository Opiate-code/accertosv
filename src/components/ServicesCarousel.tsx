import React, { useRef } from 'react';
import { SERVICES, ServiceItem } from '../data/accertoData';

interface ServicesCarouselProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceId: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  onSelectService,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth } = containerRef.current;
      const card = containerRef.current.querySelector<HTMLElement>('.service-card');
      const step = card ? card.offsetWidth + 20 : 320;

      if (scrollLeft <= 10) {
        // If at the beginning, wrap to the end
        containerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const card = containerRef.current.querySelector<HTMLElement>('.service-card');
      const step = card ? card.offsetWidth + 20 : 320;

      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        // If at the end, wrap back to the beginning
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full pt-10 pb-space-3xl bg-[#f9f9ff]" id="servicios-seccion">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-10">
          <div className="inline-flex items-center gap-space-xs text-[#0d5b6f] font-bold text-xs tracking-wider uppercase">
            <span className="w-2 h-0.5 bg-[#bb0013]" />
            <span>Áreas de Acompañamiento Integral</span>
          </div>
          <h2 className="text-headline-lg text-[#181c23] tracking-tight">
            Servicios estructurados con rigor institucional
          </h2>
          <p className="text-body-md text-[#40484c]">
            Orientación que convierte requisitos técnicos en pasos concretos y medibles.
          </p>
        </div>

        {/* Carousel Track with Left and Right Navigation Arrows */}
        <div className="relative w-full flex items-center">
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Servicio anterior"
            className="absolute -left-2 sm:-left-4 lg:-left-5 z-20 w-11 h-11 rounded-full bg-white text-[#0d5b6f] hover:bg-[#317488] hover:text-white shadow-md border border-[#E4E8E9] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            title="Ver servicio anterior"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>

          {/* Carousel Track Container with Native Smooth Snap */}
          <div
            ref={containerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-5 py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="service-card snap-start w-[calc(100vw-5rem)] max-w-[350px] sm:w-[324px] md:w-[342px] lg:w-[350px] shrink-0 bg-white rounded-xl p-5 shadow-xs hover:shadow-md border border-[#E4E8E9] group transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0d5b6f] rounded-t-xl group-hover:bg-[#bb0013] transition-colors duration-300" />

                <div>
                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-[#181c23] mb-2 group-hover:text-[#0d5b6f] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#40484c] mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-1.5 mb-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-[#181c23]">
                        <span className="material-symbols-outlined text-[#bb0013] text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-2.5 border-t border-[#E4E8E9]/60 flex justify-center">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#0d5b6f] hover:bg-[#1a4a58] py-2 px-4 rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Siguiente servicio"
            className="absolute -right-2 sm:-right-4 lg:-right-5 z-20 w-11 h-11 rounded-full bg-white text-[#0d5b6f] hover:bg-[#317488] hover:text-white shadow-md border border-[#E4E8E9] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            title="Ver siguiente servicio"
          >
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
