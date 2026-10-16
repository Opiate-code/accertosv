import React, { useState, useEffect } from 'react';

interface ContactSectionProps {
  prefilledServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledServiceId }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledServiceId) {
      setFormData((prev) => ({ ...prev, service: prefilledServiceId }));
    }
  }, [prefilledServiceId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldKey = id.replace('client-', '');
    setFormData((prev) => ({ ...prev, [fieldKey]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const generatedCode = `ACC-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section className="w-full pt-2 pb-6 sm:pt-3 sm:pb-8 bg-[#f0f3fe]" id="contacto-directo">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="bg-white rounded-2xl shadow-md border border-[#E4E8E9] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Information & Quick Connect */}
          <div className="lg:col-span-5 bg-[#0d5b6f] text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-space-xs text-[#b4ebff] text-xs font-bold tracking-wider uppercase mb-space-sm">
                <span className="w-2 h-2 rounded-full bg-[#bb0013]" />
                <span>Atención Inmediata</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                ¿Listo para estructurar su proyecto con total certeza?
              </h3>

              <p className="text-xs text-[#d5f3ff] mb-4 leading-relaxed">
                Agende un diagnóstico preliminar sin costo con nuestros especialistas notariales, aduanales o regulatorios.
              </p>

              {/* Centered and balanced contact items */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 transition-colors">
                  <div className="flex items-start gap-4 mb-2.5">
                    <div className="w-10 h-10 rounded-lg bg-[#317488]/60 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-white text-[20px]">
                        location_on
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#b4ebff] uppercase tracking-wider block">
                          Oficinas Centrales
                        </span>
                        <a
                          href="https://www.google.com/maps?q=13.7085136,-89.1943849&z=17&hl=es"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-[#b4ebff] hover:text-white transition-colors hover:underline"
                        >
                          <span>Ver en Maps</span>
                          <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                        </a>
                      </div>
                      <span className="text-xs text-white/95 leading-relaxed block mt-0.5">
                        Final 7a Avenida Norte, Urbanización Santa Adela, Edif 1147, San Salvador
                      </span>
                    </div>
                  </div>

                  {/* Compact Embedded Map */}
                  <div className="rounded-lg overflow-hidden border border-white/15 bg-[#0a3844] shadow-xs mt-2">
                    <iframe
                      title="Ubicación Oficinas Centrales Accerto"
                      src="https://maps.google.com/maps?q=13.7085136,-89.1943849&hl=es&z=17&output=embed"
                      className="w-full h-28 sm:h-32 border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#317488]/60 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      mail
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#b4ebff] uppercase tracking-wider block mb-0.5">
                      Correo Directo
                    </span>
                    <a
                      href="mailto:info@accerto.com.sv"
                      className="text-xs text-white/95 hover:text-white transition-colors block"
                    >
                      info@accerto.com.sv
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#317488]/60 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      call
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#b4ebff] uppercase tracking-wider block mb-0.5">
                      Teléfono
                    </span>
                    <span className="text-xs text-white/95 block">
                      +503 6268 9260
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white">
            <h4 className="text-2xl font-bold text-[#181c23] mb-1">
              Solicitar Diagnóstico o Consulta
            </h4>
            <p className="text-sm text-[#40484c] mb-6">
              Complete el formulario y asignaremos el requerimiento al especialista técnico correspondiente.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#EAF2F5] border border-[#0d5b6f]/20 animate-fadeIn">
                <div className="flex items-center gap-3 text-[#0d5b6f] mb-3">
                  <span className="material-symbols-outlined text-[#bb0013] text-[28px]">
                    check_circle
                  </span>
                  <h5 className="text-lg font-bold">¡Solicitud recibida con éxito!</h5>
                </div>
                <p className="text-sm text-[#40484c] mb-4">
                  Hemos generado el expediente de consulta técnica <strong className="text-[#0d5b6f]">{ticketId}</strong>. Un consultor asignado en San Salvador revisará su caso y le contactará en <strong>{formData.phone || formData.email}</strong>.
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg bg-white border border-[#E4E8E9] text-sm font-semibold text-[#0d5b6f] hover:bg-[#F7F7F7] cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                  <a
                    href="https://wa.me/50370000000?text=Hola%20Accerto,%20he%20solicitado%20un%20diagnóstico%20legal/aduanal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Continuar por WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-name">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="client-name"
                      required
                      placeholder="Ej. Lic. Roberto Mendoza"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-company">
                      Empresa o Proyecto
                    </label>
                    <input
                      type="text"
                      id="client-company"
                      placeholder="Nombre de su negocio"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-email">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="client-email"
                      required
                      placeholder="roberto@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-phone">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="client-phone"
                      required
                      placeholder="+503 7000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-service">
                    Área Principal de Interés *
                  </label>
                  <select
                    id="client-service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all"
                  >
                    <option value="">Seleccione el tipo de trámite o consulta...</option>
                    <option value="legal-notarial">Servicios Legales y Notariales (Constitución, Actas, Contratos)</option>
                    <option value="sanitario">Regulación Sanitaria y Registros (DNM, Alimentos, Medicamentos)</option>
                    <option value="aduanal">Consultoría Aduanal e Importaciones (Clasificación, Liberación)</option>
                    <option value="formalizacion">Formalización y Apertura de Nuevas Empresas (NIT, Alcaldía, CNR)</option>
                    <option value="continuo">Cumplimiento Continuo, Renovaciones y Auditoría Preventiva</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#181c23] uppercase tracking-wider mb-1" htmlFor="client-message">
                    Breve descripción del caso o consulta
                  </label>
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder="Detalle brevemente el tipo de producto, mercancía o servicio legal que requiere estructurar..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#F7F7F7] rounded-lg px-4 py-3 text-[#181c23] text-sm border border-[#E4E8E9] focus:outline-none focus:border-[#0d5b6f] focus:bg-white shadow-xs transition-all resize-none block"
                  />

                  {/* Centered submit button with exact 10pt separation from textarea */}
                  <div className="mt-[10pt] flex flex-col items-center justify-center gap-1.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center text-xs font-semibold bg-[#0d5b6f] hover:bg-[#1a4a58] text-white px-7 py-2 rounded-full shadow-xs hover:shadow hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
                    </button>

                    <span className="text-[11px] text-[#5B6368] text-center">
                      Sus datos están protegidos bajo estricto secreto profesional.
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
