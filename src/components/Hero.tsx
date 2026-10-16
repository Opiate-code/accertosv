import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/accertoData';

export const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F7] min-h-[560px]">
      {/* Smooth Rotating Hero Background Carousel - Purely Automatic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Slides Container with Seamless Mask Image */}
        <div 
          className="relative w-full h-full"
          style={{
            maskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.7) 65%, rgb(0, 0, 0) 90%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.7) 65%, rgb(0, 0, 0) 90%)'
          }}
        >
          {HERO_SLIDES.map((slide, index) => {
            const isVisible = index === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        {/* Dual Gradient & Visibility Mask */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(249, 249, 255, 0.82) 0%, rgba(249, 249, 255, 0.78) 45%, rgba(249, 249, 255, 0.45) 65%, rgba(249, 249, 255, 0.15) 85%, rgba(249, 249, 255, 0.02) 100%)'
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(rgba(249, 249, 255, 0.7) 0%, rgba(249, 249, 255, 0) 25%, rgba(249, 249, 255, 0) 75%, rgba(249, 249, 255, 0.9) 100%)'
          }}
        />
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-[#0d5b6f]/5 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container - 30% tighter spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-margin pt-24 pb-11 flex flex-col items-start">
        {/* Badge Category Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF2F5] text-[#0d5b6f] shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#bb0013] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase">
            Consultoría Integral: Legal • Notarial • Aduanal • Regulatoria
          </span>
        </div>

        {/* Main Impact Headline */}
        <h1 className="text-display text-[#181c23] max-w-4xl tracking-tight mb-4">
          Claridad para decidir. <br />
          <span className="text-[#317488]">Respaldo para avanzar.</span>
        </h1>

        {/* Precise Subtitle */}
        <p className="text-body-lg text-[#40484c] max-w-2xl leading-relaxed mb-8">
          Acompañamos a empresas y emprendedores a comprender sus obligaciones, organizar sus proyectos de importación y gestionar los procesos necesarios para operar y crecer en El Salvador.
        </p>

        {/* Institutional Metrics & Credibility Bar with Magnification Effect */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-xs border border-[#E4E8E9]/60 flex flex-col gap-1 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:border-[#317488]/40 hover:bg-white cursor-pointer select-none">
            <div className="flex items-center gap-1.5 text-[#0d5b6f] text-2xl font-bold">
              <span>100%</span>
              <span className="material-symbols-outlined text-[#bb0013] text-[20px]">verified</span>
            </div>
            <span className="text-xs text-[#40484c] font-medium">Cumplimiento Normativo Local</span>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-xs border border-[#E4E8E9]/60 flex flex-col gap-1 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:border-[#317488]/40 hover:bg-white cursor-pointer select-none">
            <div className="flex items-center gap-1.5 text-[#0d5b6f] text-2xl font-bold">
              <span>+15</span>
              <span className="text-base text-[#6E9FAD] font-normal">Años</span>
            </div>
            <span className="text-xs text-[#40484c] font-medium">Experiencia Técnica Combinada</span>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-xs border border-[#E4E8E9]/60 flex flex-col gap-1 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:border-[#317488]/40 hover:bg-white cursor-pointer select-none">
            <div className="flex items-center gap-1.5 text-[#0d5b6f] text-[19px] sm:text-xl font-bold tracking-tight">
              <span>SRS - MAG - CIEX</span>
            </div>
            <span className="text-xs text-[#40484c] font-medium">Gestión Regulatoria & Permisos</span>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-xs border border-[#E4E8E9]/60 flex flex-col gap-1 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:border-[#317488]/40 hover:bg-white cursor-pointer select-none">
            <div className="flex items-center gap-1.5 text-[#0d5b6f] text-2xl font-bold">
              <span>DGA</span>
              <span className="text-lg text-[#bb0013] font-bold">• Cero</span>
            </div>
            <span className="text-xs text-[#40484c] font-medium">Prevención de Abandono Aduanal</span>
          </div>
        </div>
      </div>
    </section>
  );
};
