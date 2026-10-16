import React, { useState } from 'react';

interface QuickDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToContact: (serviceKey: string, summary: string) => void;
}

interface DiagnosticProfile {
  id: string;
  name: string;
  category: string;
  authority: string;
  normative: string;
  timeframe: string;
  keyDoc: string;
  estimatedGovFee: string;
  recommendation: string;
}

const DIAGNOSTIC_PROFILES: DiagnosticProfile[] = [
  {
    id: 'formalizacion-sociedad',
    name: 'Constitución de Sociedad (S.A. de C.V. o SAS)',
    category: 'Derecho Societario & Notarial',
    authority: 'Centro Nacional de Registros (CNR) & Ministerio de Hacienda',
    normative: 'Código de Comercio de El Salvador & Ley de Creación de Sociedades por Acciones Simplificadas',
    timeframe: '5 a 8 días hábiles',
    keyDoc: 'DUI/NIT de socios, capital social mínimo ($2,000 para S.A. o $1.00 para SAS) y punto de acta.',
    estimatedGovFee: 'Arancel CNR: ~$100 a $150 según capital declarado',
    recommendation: 'Recomendamos redactar pacto social con cláusulas de mediación previa para evitar disputas entre socios.'
  },
  {
    id: 'registro-cosmetico',
    name: 'Registro Sanitario de Cosméticos o Higiénicos',
    category: 'Regulación Sanitaria',
    authority: 'Dirección Nacional de Medicamentos (DNM)',
    normative: 'Reglamento Técnico Centroamericano RTCA 71.03.35:21 (Productos Cosméticos)',
    timeframe: '15 a 25 días hábiles',
    keyDoc: 'Certificado de Libre Venta (CLV) apostillado, fórmula cuali-cuantitativa y proyecto de etiquetas en español.',
    estimatedGovFee: 'Arancel DNM: $350.00 por registro (vigencia 5 años)',
    recommendation: 'Verificar previamente que las advertencias y claim técnicos cumplan con la lista de sustancias permitidas del RTCA.'
  },
  {
    id: 'registro-alimento',
    name: 'Registro de Alimentos y Bebidas Envasadas',
    category: 'Regulación Sanitaria',
    authority: 'Ministerio de Salud (MINSAL) / DNM',
    normative: 'RTCA 67.01.07:10 (Etiquetado General de Alimentos)',
    timeframe: '20 a 30 días hábiles',
    keyDoc: 'Tabla nutricional, proceso de elaboración, empaque primario y CLV del país de fabricación.',
    estimatedGovFee: 'Arancel MINSAL: ~$180.00 por producto',
    recommendation: 'Revisar la tabla de información nutricional antes de la impresión definitiva de empaques para evitar re-etiquetado.'
  },
  {
    id: 'clasificacion-aduanal',
    name: 'Auditoría Arancelaria & Visto Bueno de Importación',
    category: 'Derecho Aduanal & DGA',
    authority: 'Dirección General de Aduanas (DGA) - El Salvador',
    normative: 'Arancel Centroamericano de Importación (SAC) & Ley Especial para Sancionar Infracciones Aduaneras',
    timeframe: '24 a 48 horas previas al embarque',
    keyDoc: 'Ficha técnica de fábrica, factura comercial, código arancelario sugerido y certificado de origen si aplica TLC.',
    estimatedGovFee: 'DAI (0% a 20%) + IVA (13%) + Tasa de inspección no intrusiva',
    recommendation: 'Tramitar visados previos al zarpe del buque o flete para evitar caer en el plazo de 20 días de presunción de abandono aduanal.'
  },
  {
    id: 'registro-marca',
    name: 'Registro de Marca y Signo Distintivo',
    category: 'Propiedad Intelectual',
    authority: 'Registro de la Propiedad Intelectual - CNR',
    normative: 'Ley de Marcas y Otros Signos Distintivos de El Salvador',
    timeframe: '2 a 4 meses (incluye período de oposición)',
    keyDoc: 'Logo en formato digital, clases de Niza a proteger y datos del titular.',
    estimatedGovFee: 'Arancel CNR: $100.00 solicitud + $75.00 emisión de título + edictos',
    recommendation: 'Efectuar búsqueda fonética previa para garantizar que no existan marcas similares registradas en Centroamérica.'
  }
];

export const QuickDiagnosticModal: React.FC<QuickDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onProceedToContact,
}) => {
  const [selectedId, setSelectedId] = useState<string>(DIAGNOSTIC_PROFILES[0].id);

  if (!isOpen) return null;

  const currentProfile = DIAGNOSTIC_PROFILES.find((p) => p.id === selectedId) || DIAGNOSTIC_PROFILES[0];

  const handleProceed = () => {
    onProceedToContact(
      currentProfile.id,
      `Consulta sobre ${currentProfile.name} ante ${currentProfile.authority}. Plazo estimado: ${currentProfile.timeframe}.`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-[#E4E8E9] overflow-hidden animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="bg-[#0d5b6f] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Diagnóstico Preliminar de Requisitos</h3>
              <p className="text-xs text-[#b4ebff]">
                Consulte las entidades, aranceles oficiales y normativa aplicable en El Salvador
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            aria-label="Cerrar ventana"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Select Procedure */}
          <div>
            <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-2">
              Seleccione el tipo de trámite o proyecto que desea evaluar:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {DIAGNOSTIC_PROFILES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`text-left p-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                    selectedId === p.id
                      ? 'bg-[#EAF2F5] text-[#0d5b6f] border-[#0d5b6f] shadow-xs'
                      : 'bg-white text-[#40484c] border-[#E4E8E9] hover:bg-[#F7F7F7]'
                  }`}
                >
                  <span className="block text-[#bb0013] text-[10px] font-bold uppercase mb-0.5">
                    {p.category}
                  </span>
                  <span className="line-clamp-2">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Diagnostic Result Card */}
          <div className="p-5 rounded-xl bg-[#f9f9ff] border border-[#dfe2ed] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#dfe2ed] pb-3">
              <div>
                <span className="text-xs font-bold text-[#bb0013] uppercase tracking-wider">
                  Ficha Técnica Institucional
                </span>
                <h4 className="text-lg font-bold text-[#181c23]">{currentProfile.name}</h4>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4E8E9] text-xs font-semibold text-[#0d5b6f] self-start sm:self-auto">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>{currentProfile.timeframe}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#0d5b6f] block mb-0.5">Autoridad Oficial:</strong>
                <span className="text-[#181c23]">{currentProfile.authority}</span>
              </div>
              <div>
                <strong className="text-[#0d5b6f] block mb-0.5">Base Normativa:</strong>
                <span className="text-[#181c23]">{currentProfile.normative}</span>
              </div>
              <div>
                <strong className="text-[#0d5b6f] block mb-0.5">Documentos Esenciales de Origen:</strong>
                <span className="text-[#40484c]">{currentProfile.keyDoc}</span>
              </div>
              <div>
                <strong className="text-[#0d5b6f] block mb-0.5">Arancel Oficial Estimado del Estado:</strong>
                <span className="text-[#40484c]">{currentProfile.estimatedGovFee}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#E4E8E9] text-xs text-[#40484c]">
              <strong className="text-[#0d5b6f]">Recomendación Accerto: </strong>
              <span>{currentProfile.recommendation}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-[#5B6368]">
              Sin compromiso. Un abogado o regente técnico revisará su caso.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#E4E8E9] text-xs font-semibold text-[#40484c] hover:bg-[#F7F7F7] cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={handleProceed}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#bb0013] text-white text-xs font-bold hover:bg-[#D1141C] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Consulta de este Trámite</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
