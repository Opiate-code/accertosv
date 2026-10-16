import React from 'react';
import { ServiceItem } from '../data/accertoData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-[#E4E8E9] overflow-hidden animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Accent Line */}
        <div className="h-1.5 bg-[#0d5b6f] shrink-0" />

        {/* Header Bar with Title and Close Button */}
        <div className="px-5 sm:px-6 py-3 border-b border-[#E4E8E9]/80 flex items-center justify-between shrink-0 bg-[#fbfcfd]">
          <h3 className="text-lg sm:text-xl font-bold text-[#181c23] tracking-tight truncate pr-4">
            {service.title}
          </h3>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-[#5B6368] hover:bg-[#EAF2F5] hover:text-[#0d5b6f] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar ventana"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body: 2-Column Responsive Layout with Image Included */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Left Column: Image, Description, Authority, Turnaround */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            {/* Service Photograph Banner */}
            {service.imageUrl && (
              <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden shadow-xs border border-[#E4E8E9]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#0d5b6f]/90 px-2 py-0.5 rounded backdrop-blur-xs">
                  {service.areaNumber}
                </span>
              </div>
            )}

            <p className="text-xs sm:text-[13px] text-[#40484c] leading-relaxed">
              {service.description}
            </p>

            {/* Authority & Turnaround Pills */}
            <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#f0f3fe] border border-[#dfe2ed]">
              <div>
                <span className="text-[10px] font-bold text-[#0d5b6f] uppercase tracking-wider block">
                  Autoridad Competente
                </span>
                <span className="text-xs font-semibold text-[#181c23] leading-snug block mt-0.5">
                  {service.regulatoryEntity}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0d5b6f] uppercase tracking-wider block">
                  Plazo Estimado
                </span>
                <span className="text-xs font-semibold text-[#181c23] leading-snug block mt-0.5">
                  {service.turnaroundTime}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Scope & Key Requirements Checklist */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            {/* Scope Detail */}
            <div className="p-2.5 rounded-xl bg-[#F7F7F7] border border-[#E4E8E9]">
              <span className="text-[10px] font-bold text-[#0d5b6f] uppercase tracking-wider block mb-0.5">
                Garantía de Rigor Institucional
              </span>
              <p className="text-xs text-[#5B6368] leading-relaxed">
                {service.scopeDetail}
              </p>
            </div>

            {/* Key Requirements Checklist */}
            <div className="bg-[#fbfcfd] p-3 rounded-xl border border-[#E4E8E9]">
              <h4 className="text-xs font-bold text-[#181c23] uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-[#E4E8E9] mb-2">
                <span className="material-symbols-outlined text-[#0d5b6f] text-[16px]">verified</span>
                <span>Requisitos Documentales Clave</span>
              </h4>
              
              <ul className="space-y-1.5">
                {service.officialRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-[#40484c] leading-snug">
                    <span className="material-symbols-outlined text-[#bb0013] text-[15px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-6 py-2.5 border-t border-[#E4E8E9] bg-white flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#E4E8E9] text-[#40484c] hover:bg-[#F7F7F7] text-xs font-semibold transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onSelectForInquiry(service.id);
              onClose();
            }}
            className="px-5 py-1.5 rounded-lg bg-[#0d5b6f] hover:bg-[#1a4a58] text-white text-xs font-bold shadow-xs hover:shadow flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <span>Consultar este Trámite</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
