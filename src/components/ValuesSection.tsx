import React from 'react';
import { VALUES_MATRIX } from '../data/accertoData';

export const ValuesSection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-white relative overflow-hidden border-t border-[#E4E8E9]">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left Brand Identity Statement */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs text-[#0d5b6f] font-bold text-xs tracking-wider uppercase">
              <span className="w-2 h-0.5 bg-[#bb0013]" />
              <span>El Concepto Accerto</span>
            </div>

            <h2 className="text-headline-lg text-[#181c23] tracking-tight">
              Acierto, precisión y decisiones bien fundamentadas.
            </h2>

            <p className="text-body-md text-[#40484c] leading-relaxed">
              Inspirados en la solidez analítica y el resguardo del capital productivo, nuestro compromiso es ofrecerle a cada cliente la certidumbre que demanda el entorno empresarial salvadoreño actual.
            </p>

            <div className="p-space-lg rounded-xl bg-[#f0f3fe] border border-[#dfe2ed] mt-space-sm shadow-xs">
              <span className="text-xs text-[#0d5b6f] font-bold uppercase tracking-wider block mb-1">
                Nuestra Filosofía
              </span>
              <p className="text-sm text-[#181c23] italic leading-relaxed">
                "No vendemos trámites aislados; construimos la seguridad jurídica que permite a su empresa competir y escalar sin contingencias imprevistas."
              </p>
            </div>


          </div>

          {/* Right Pillars Matrix (Sage & Caregiver Archetypes) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {VALUES_MATRIX.map((val, idx) => (
              <div
                key={idx}
                className="p-space-lg rounded-xl bg-[#F7F7F7] border border-[#E4E8E9] shadow-xs flex flex-col gap-space-xs hover:border-[#6E9FAD] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAF2F5] text-[#0d5b6f] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    {val.icon}
                  </span>
                </div>
                <h4 className="text-title-md text-[#181c23] font-bold">
                  {val.title}
                </h4>
                <p className="text-body-sm text-[#40484c] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
