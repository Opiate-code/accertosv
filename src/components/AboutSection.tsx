import React from 'react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const teamMembers = [
    {
      name: "Lic. Manuel Henríquez",
      role: "Socio Director - Notaría & Derecho Societario",
      experience: "18+ años de práctica jurídica y notarial",
      specialty: "Constitución de sociedades, gobierno corporativo y estructuración de fusiones ante el CNR.",
      credential: "Abogado y Notario de la República (CSJ 14,892)"
    },
    {
      name: "Licda. Carmen Elena Solís",
      role: "Directora Técnica de Asuntos Regulatorios",
      experience: "15+ años en gestión farmacéutica y cosmética",
      specialty: "Homologación centroamericana (RTCA), registros DNM y acreditación de plantas MINSAL.",
      credential: "Química Farmacéutica colegiada (Reg. DNM 3,421)"
    },
    {
      name: "Lic. Guillermo Valiente",
      role: "Especialista en Derecho Aduanal & Comercio Exterior",
      experience: "14+ años en operaciones aduaneras",
      specialty: "Auditoría arancelaria DAI/IVA, clasificación técnica y gestión en aduanas terrestres y puertos.",
      credential: "Agente Aduanal Acreditado por DGA El Salvador"
    }
  ];

  return (
    <section className="w-full pt-space-3xl pb-2 sm:pb-3 bg-[#f0f3fe] border-t border-[#E4E8E9]" id="nosotros-seccion">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Header */}
        <div className="max-w-3xl mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs text-[#0d5b6f] font-bold text-xs tracking-wider uppercase mb-space-xs">
            <span className="w-2 h-0.5 bg-[#bb0013]" />
            <span>Firma & Sede en El Salvador</span>
          </div>
          <h2 className="text-headline-lg text-[#181c23] tracking-tight mb-space-sm">
            Especialistas dedicados a la certidumbre de su negocio
          </h2>
          <p className="text-body-lg text-[#40484c]">
            Combinamos conocimiento notarial profundo, rigor técnico ante autoridades sanitarias y experiencia operativa en el sistema aduanero de El Salvador.
          </p>
        </div>

        {/* Credentials & Institutional Presence Grid - Reduced size on both axes, initial circle and red seal removed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-xs border border-[#E4E8E9] flex flex-col justify-between hover:border-[#6E9FAD] transition-all"
            >
              <div>
                <h3 className="text-base font-bold text-[#181c23] mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-[#0d5b6f] block mb-1.5">
                  {member.role}
                </span>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f0f3fe] text-[#317488] mb-2.5">
                  {member.experience}
                </span>
                <p className="text-xs text-[#40484c] leading-relaxed mb-3">
                  {member.specialty}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#E4E8E9] text-[11px] text-[#5B6368] font-medium">
                <span>{member.credential}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Commitment Callout - Reduced height and button removed */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E4E8E9] shadow-xs">
          <h4 className="text-base font-bold text-[#181c23] mb-1">
            Código de Ética y Secreto Notarial Salvadoreño
          </h4>
          <p className="text-xs text-[#40484c] leading-relaxed">
            Toda consulta, borrador de contrato mercantil, fórmula técnica o estrategia arancelaria compartida con nuestra firma está protegida bajo estricto sigilo profesional y las leyes notariales de la República de El Salvador.
          </p>
        </div>
      </div>
    </section>
  );
};
