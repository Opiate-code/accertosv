import React from 'react';
import { SectorItem } from '../data/accertoData';

interface SectorDetailModalProps {
  sector: SectorItem | null;
  onClose: () => void;
  onSelectForInquiry: (sectorTitle: string) => void;
}

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  sector,
  onClose,
  onSelectForInquiry,
}) => {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-[#E4E8E9] overflow-hidden animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Cover Photo Header with Badge and Title */}
        <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-[#ebeef9] shrink-0">
          <img
            src={sector.imageUrl}
            alt={sector.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          <div className="absolute bottom-3 left-5 right-5 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#bb0013] text-white inline-block mb-1">
              {sector.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">{sector.title}</h3>
          </div>
        </div>

        {/* Content Body: 2-Column Responsive Layout */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Left Column: Description & Strategic Focus */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            <p className="text-xs sm:text-[13px] text-[#40484c] leading-relaxed">
              {sector.description}
            </p>

            <div className="p-3 rounded-xl bg-[#EAF2F5] border border-[#0d5b6f]/20">
              <span className="text-[10px] font-bold text-[#0d5b6f] uppercase tracking-wider block mb-0.5">
                Foco Estratégico Accerto:
              </span>
              <p className="text-xs font-medium text-[#181c23] leading-snug">
                {sector.centralObjective}
              </p>
            </div>
          </div>

          {/* Right Column: Specific Services for this Profile */}
          <div className="md:col-span-6 flex flex-col gap-2 bg-[#fbfcfd] p-3 rounded-xl border border-[#E4E8E9]">
            <h4 className="text-xs font-bold text-[#181c23] uppercase tracking-wider pb-1 border-b border-[#E4E8E9]">
              Servicios Específicos para este Perfil:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {sector.keyServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-white border border-[#E4E8E9] text-xs font-medium text-[#181c23] flex items-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[#bb0013] text-[15px] shrink-0">
                    check_circle
                  </span>
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#5B6368] pt-2 mt-1 border-t border-[#E4E8E9]">
              <span>
                <strong>Acompañamiento estimado:</strong> {sector.typicalTimeline}
              </span>
              <span className="text-[#0d5b6f] font-semibold">
                Sede San Salvador
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-6 py-2.5 border-t border-[#E4E8E9] bg-white flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#E4E8E9] text-xs font-semibold text-[#40484c] hover:bg-[#F7F7F7] cursor-pointer transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onSelectForInquiry(sector.title);
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-[#0d5b6f] hover:bg-[#1a4a58] text-white text-xs font-bold shadow-xs hover:shadow flex items-center justify-center cursor-pointer transition-all"
          >
            <span>{sector.ctaText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
