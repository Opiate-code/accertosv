import React, { useState } from 'react';
import { METHODOLOGY_PILLARS } from '../data/accertoData';

interface MethodologySectionProps {
  onTalkToAdvisor?: () => void;
}

interface CaseStudySimulator {
  id: string;
  name: string;
  category: string;
  steps: {
    phase: string;
    action: string;
    entity: string;
    timeframe: string;
    deliverable: string;
  }[];
}

const CASE_SIMULATIONS: CaseStudySimulator[] = [
  {
    id: 'sanitario',
    name: 'Registro Sanitario & Importación',
    category: 'Regulación DNM / MINSAL',
    steps: [
      {
        phase: 'Fase 1',
        action: 'Auditoría de Fórmula y CLV Apostillado',
        entity: 'Laboratorio de Origen & Accerto',
        timeframe: 'Días 1 - 3',
        deliverable: 'Expediente técnico precertificado sin observaciones'
      },
      {
        phase: 'Fase 2',
        action: 'Radicación en Plataforma Oficial DNM',
        entity: 'Dirección Nacional de Medicamentos',
        timeframe: 'Días 4 - 15',
        deliverable: 'Comprobante de ingreso y número de radicación oficial'
      },
      {
        phase: 'Fase 3',
        action: 'Emisión de Certificado de Registro & Visado Aduanal',
        entity: 'DNM & DGA',
        timeframe: 'Días 16 - 25',
        deliverable: 'Certificado de Registro Sanitario por 5 años + Visto Bueno Import'
      }
    ]
  },
  {
    id: 'sociedad',
    name: 'Constitución & Apertura Corporativa',
    category: 'Mercantil & Tributario',
    steps: [
      {
        phase: 'Fase 1',
        action: 'Redacción de Escritura Pública Notarial',
        entity: 'Notaría Accerto & Socios',
        timeframe: 'Días 1 - 2',
        deliverable: 'Matriz notarial firmada con pacto social y cláusulas de protección'
      },
      {
        phase: 'Fase 2',
        action: 'Inscripción en Registro de Comercio CNR',
        entity: 'Centro Nacional de Registros',
        timeframe: 'Días 3 - 6',
        deliverable: 'Matrícula de Comercio oficial y personería jurídica plena'
      },
      {
        phase: 'Fase 3',
        action: 'Habilitación Tributaria NIT/NRC & DTE Digital',
        entity: 'Ministerio de Hacienda (DGII)',
        timeframe: 'Días 7 - 10',
        deliverable: 'Empresa formalmente lista para emitir facturación electrónica'
      }
    ]
  },
  {
    id: 'aduanas',
    name: 'Desaduanaje & Prevención de Abandono',
    category: 'Comercio Exterior DGA',
    steps: [
      {
        phase: 'Fase 1',
        action: 'Pre-clasificación Arancelaria y Cálculo DAI/IVA',
        entity: 'Mesa Técnica Accerto',
        timeframe: 'Previo al zarpe',
        deliverable: 'Matriz arancelaria sin sorpresas tributarias en puerto'
      },
      {
        phase: 'Fase 2',
        action: 'Transmisión de DUCA y Selectividad',
        entity: 'Dirección General de Aduanas',
        timeframe: 'Arribo a puerto',
        deliverable: 'Despacho ágil sin cobros de almacenaje extraordinario'
      },
      {
        phase: 'Fase 3',
        action: 'Levante y Liquidación Conforme',
        entity: 'Aduana Acajutla / San Bartolo',
        timeframe: '24 a 48 horas',
        deliverable: 'Mercancía liberada en planta con trazabilidad total'
      }
    ]
  }
];

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onTalkToAdvisor }) => {
  const [selectedCase, setSelectedCase] = useState<string>('sanitario');
  const activeCase = CASE_SIMULATIONS.find(c => c.id === selectedCase) || CASE_SIMULATIONS[0];

  return (
    <section className="w-full py-space-3xl bg-[#f0f3fe] relative overflow-hidden" id="metodologia-seccion">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Intro */}
        <div className="max-w-3xl mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs text-[#0d5b6f] text-xs font-bold uppercase tracking-wider mb-space-xs">
            <span className="w-2 h-2 rounded-full bg-[#bb0013]" />
            <span>Metodología de Trabajo Accerto</span>
          </div>
          <h2 className="text-headline-lg text-[#181c23] tracking-tight mb-space-sm">
            Una ruta de trabajo comprensible y sin ambigüedades
          </h2>
          <p className="text-body-lg text-[#40484c]">
            Sabes con total exactitud qué necesitas, cuál es el siguiente paso y qué avances concretos se han realizado en cada institución oficial.
          </p>
        </div>

        {/* 4 Pillars Grid with Process Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {METHODOLOGY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-space-xl rounded-xl shadow-xs border border-[#E4E8E9] flex flex-col justify-between relative group hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="text-headline-md font-bold text-[#317488]">
                    {pillar.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#EAF2F5] flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#bb0013]" />
                  </div>
                </div>

                <h3 className="text-title-md text-[#181c23] mb-space-xs">
                  {pillar.title}
                </h3>
                <p className="text-body-sm text-[#40484c] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-space-lg pt-space-sm flex items-center gap-1.5 text-[#6E9FAD] text-xs font-semibold border-t border-[#E4E8E9]/50">
                <span className="material-symbols-outlined text-[16px]">
                  {pillar.icon}
                </span>
                <span>{pillar.badgeText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Case Route Walkthrough */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-xs border border-[#E4E8E9]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#0d5b6f] uppercase tracking-wider block mb-1">
                Simulador de Proceso Institucional
              </span>
              <h4 className="text-lg font-bold text-[#181c23]">
                Vea cómo avanza su expediente día a día:
              </h4>
            </div>

            {/* Case Selection Tabs */}
            <div className="flex flex-wrap gap-2">
              {CASE_SIMULATIONS.map((sim) => (
                <button
                  key={sim.id}
                  onClick={() => setSelectedCase(sim.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCase === sim.id
                      ? 'bg-[#0d5b6f] text-white shadow-xs'
                      : 'bg-[#F7F7F7] text-[#40484c] hover:bg-[#EAF2F5] hover:text-[#0d5b6f]'
                  }`}
                >
                  {sim.name}
                </button>
              ))}
            </div>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeCase.steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#f9f9ff] border border-[#dfe2ed] relative flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#bb0013] uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-white font-medium text-[#0d5b6f] border border-[#E4E8E9]">
                    {step.timeframe}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-[#181c23] mb-2">
                  {step.action}
                </h5>
                <div className="text-xs text-[#40484c] space-y-1 mt-auto pt-2 border-t border-[#E4E8E9]">
                  <p><strong className="text-[#181c23]">Entidad:</strong> {step.entity}</p>
                  <p className="text-[#0d5b6f]"><strong className="text-[#181c23]">Entregable:</strong> {step.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Philosophy Quote Box */}
        <div className="mt-space-2xl bg-white rounded-xl p-space-xl shadow-xs border border-[#E4E8E9] flex flex-col md:flex-row items-center gap-space-xl">
          <div className="w-16 h-16 rounded-full bg-[#FDE8E9] flex items-center justify-center text-[#bb0013] shrink-0">
            <span className="material-symbols-outlined text-[32px]">shield</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-title-md text-[#181c23] font-semibold">
              El principio Accerto: Seguridad Jurídica y Eficiencia Administrativa
            </span>
            <p className="text-body-md text-[#40484c]">
              Transformamos la burocracia en una ventaja competitiva. Su equipo se enfoca en vender, producir y crecer; nosotros aseguramos la base legal que lo sostiene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
