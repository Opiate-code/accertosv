import React, { useState } from 'react';
import { LOGO_URL } from './Header';

interface FooterProps {
  onNavigate?: (screen: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="w-full bg-white shadow-[0_-1px_8px_rgba(0,0,0,0.03)] border-t border-[#E4E8E9]">
      <div className="max-w-7xl mx-auto px-margin py-6 sm:py-7">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand Info (Left) */}
          <div className="flex flex-col gap-3 max-w-md">
            <div className="flex items-center">
              <img
                alt="Accerto"
                className="h-9 w-auto object-contain"
                src={LOGO_URL}
                style={{ height: '38px', width: 'auto' }}
              />
            </div>
            <p className="text-[12px] text-[#40484c] leading-relaxed">
              Consultoría Legal, Notarial, Aduanal y Regulatoria. Acompañamiento integral y riguroso para empresas e inversores con enfoque estratégico en El Salvador y la región.
            </p>
            <div className="flex items-center gap-1.5 text-[#6E9FAD]">
              <span className="material-symbols-outlined text-[17px] text-[#0d5b6f]">verified</span>
              <span className="text-[11px] text-[#40484c] font-medium">Excelencia Jurídica & Cumplimiento Normativo</span>
            </div>
          </div>

          {/* Sede El Salvador (Right) */}
          <div className="flex flex-col gap-3 min-w-[280px]">
            <h4 className="text-[13px] font-bold text-[#181c23] tracking-wide uppercase">Sede El Salvador</h4>
            <div className="flex flex-col gap-2.5 text-[12px] text-[#40484c]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0d5b6f] text-[16px] shrink-0 mt-0.5">
                  location_on
                </span>
                <a
                  href="https://www.google.com/maps?q=13.7085136,-89.1943849&z=17&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-[#0d5b6f] transition-colors"
                >
                  Final 7a Avenida Norte, Urbanización Santa Adela, Edif 1147, San Salvador
                </a>
              </div>
              {/* Email and Phone with Social Links in the whitespace to the right */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0d5b6f] text-[16px] shrink-0">
                      mail
                    </span>
                    <a
                      href="mailto:info@accerto.com.sv"
                      className="hover:text-[#0d5b6f] transition-colors"
                    >
                      info@accerto.com.sv
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0d5b6f] text-[16px] shrink-0">
                      call
                    </span>
                    <span className="font-medium">+503 6268 9260</span>
                  </div>
                </div>

                {/* Redes Sociales: Instagram & Facebook a la derecha */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://www.instagram.com/accerto_sv/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8.5 h-8.5 rounded-lg bg-[#f0f3fe] text-[#0d5b6f] hover:bg-[#0d5b6f] hover:text-white flex items-center justify-center transition-all shadow-2xs hover:shadow hover:scale-105"
                    title="Instagram @accerto_sv"
                    aria-label="Instagram de Accerto"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/Accertosv/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8.5 h-8.5 rounded-lg bg-[#f0f3fe] text-[#0d5b6f] hover:bg-[#0d5b6f] hover:text-white flex items-center justify-center transition-all shadow-2xs hover:shadow hover:scale-105"
                    title="Facebook @Accertosv"
                    aria-label="Facebook de Accerto"
                  >
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 pt-3.5 border-t border-[#E4E8E9] flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#5B6368]">
          <p>© 2025 Accerto. Todos los derechos reservados. Consultoría Legal, Notarial, Aduanal y Regulatoria en El Salvador.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-[#0d5b6f] transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-[#0d5b6f] transition-colors cursor-pointer"
            >
              Aviso Legal & Términos
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Privacy Modal */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#E4E8E9] animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#181c23]">
                {legalModalType === 'privacy' ? 'Política de Privacidad y Confidencialidad' : 'Aviso Legal & Términos de Servicio'}
              </h3>
              <button
                onClick={() => setLegalModalType(null)}
                className="p-1 rounded text-[#40484c] hover:bg-[#F7F7F7]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="text-xs text-[#40484c] space-y-3 leading-relaxed mb-6">
              {legalModalType === 'privacy' ? (
                <>
                  <p>
                    En <strong>Accerto Consultoría</strong>, la confidencialidad de la información corporativa, secretos industriales, fórmulas sanitarias y datos de accionistas es nuestra máxima prioridad.
                  </p>
                  <p>
                    Toda comunicación remitida a través de este portal está amparada por el deber de sigilo notarial conforme a la Ley de Notariado de la República de El Salvador. No compartimos sus datos con terceros sin autorización explícita.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    El contenido y herramientas de este portal web tienen carácter meramente orientativo e informativo. Ninguna información constituye una relación formal abogado-cliente hasta la suscripción del respectivo contrato de servicios profesionales o poder notarial.
                  </p>
                  <p>
                    Los plazos de tramitación ante la Dirección Nacional de Medicamentos (DNM), Dirección General de Aduanas (DGA) y Centro Nacional de Registros (CNR) están sujetos a las agendas de resolución de las autoridades estatales correspondientes.
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setLegalModalType(null)}
                className="px-5 py-2 rounded-lg bg-[#0d5b6f] text-white text-xs font-semibold hover:bg-[#235564] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
