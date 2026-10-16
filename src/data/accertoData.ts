export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  areaNumber: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  items: string[];
  ctaText: string;
  regulatoryEntity: string;
  turnaroundTime: string;
  officialRequirements: string[];
  scopeDetail: string;
}

export interface SectorItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  centralObjective: string;
  ctaText: string;
  imageUrl: string;
  alt: string;
  keyServices: string[];
  typicalTimeline: string;
}

export interface MethodologyPillar {
  number: string;
  title: string;
  description: string;
  badgeText: string;
  icon: string;
  details: string[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    title: "Terminal Portuaria de Acajutla",
    subtitle: "Operaciones marítimas y comercio exterior en el Pacífico salvadoreño",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XKz7N0eu9B383fHq0xVWCgUuLeJGH5q1Epx-7wZIFjlRJSttkMCegP_wfDiIX8Qr7I9GBvl2C0OL3LRnEalMzsXLB9vpQrL7RczoHIqquoVoviDZn73ovc624WvmMa1Uo9NwJzQike-kUgcg7jvEsheOhZogQjsEnc2f_fzD4aAqtUYCYyYNOjp8HjTkiaivqv6DW6ACAr2AeWJ3KhMtaX2jRyQczMTtJB1H-JUwpsO9QZ8mgq9ynYbAU",
    alt: "Port of Acajutla container terminal in El Salvador, modern maritime cargo crane loading shipping containers onto vessel"
  },
  {
    id: 1,
    title: "Sala de Juntas Corporativa",
    subtitle: "Asesoría notarial y mercantil estratégica en San Salvador",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XWryiGOWXqE9pgE4MLkjFtclKBF4ML8o--stWm7_yeNtzZXJ2_pLAUkHPsX_RB_eHoFBVv8gppqfZuh-SX9IFM9gg3FpRgCIiEvxWtIVEAh6CH0DXwoSksiBIbtUbw3zoupoQURVoXuWR3pMrJumN7h7SSB8W1jgBnKxc4CyCoy-03ZNWAnzO18TPlOGRb8Ls7O69FjNbzK4A8-JuhkJfMPmZNvMqTCXlVwEONaiehd-xnfOw4BkYiWYw",
    alt: "Modern corporate legal office interior in San Salvador Latin America, glass meeting room, executive consulting team in discussion"
  },
  {
    id: 2,
    title: "Control Sanitario Farmacéutico",
    subtitle: "Gestión técnica de expedientes ante la DNM y MINSAL",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WJteFeS-UlbwJ2Re66OYcPwQMkPoNbS_naEeNgvNpzvn_1MEuKbMs3cA9Tx24XU_H99DAeNdwfmlD6tDqQS9NJyVpJgImdopgrau85nTIT9MGjuiUhbHhVX9h30-y0xj-QUlVKHiC_isQ7Ek8msp5xvkc7FJCEc47WXk5w0eCL3I3VBuM8u4umCNrdcohxIuOW1JxhwPoy4vbKFKIdeXYGG7EW1q6DSiY0YOywaCqmTGjFRGr43Z8zVQ",
    alt: "Pharmaceutical regulatory cleanroom and medicine manufacturing quality control inspection in El Salvador"
  },
  {
    id: 3,
    title: "Control Aduanal Terrestre",
    subtitle: "Prevención rigurosa de retrasos en fronteras y aduanas internas",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1UTwYxalddjb5LdkTU1pohGmfYnIBNxOoG7sKNPb8cZVbpveWqcF0qI-5GIuJSMvI5f5IhMBm9ssLoQMW1Jtk78AH7NaBYbhqHT04uIbUwR8T9fCoSDbd3yQpdqPPWs3fMS_fPndWtjyf-1ge1nwZdYmSgtwkz_YqvCpuS4DKeeoDfJZ8AndiBnpJltUlqzJRB69wUXBbXxcQmPmjzo6qZ7Ncto91a3dkp1E46T18exdbDhQe-yHrPzF_s",
    alt: "El Salvador customs border control and logistics checkpoint, cargo trucks passing regulatory inspection area"
  },
  {
    id: 4,
    title: "Consultoría Notarial & Fe Pública",
    subtitle: "Formalización de contratos mercantiles y acuerdos societarios",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VBczn6BU81e-TEe6adsiVqkGN1M3uSj2z-akDD-ERV31QnjrhKI2VnQp2IC7Q35fFZxrEdUFiO0NWYzWSFEYhFERGVfrL6tK_dc-2g9NHlImiSjyeP8-NRGnczKKETFFJLU8Qx_PRRHJr5Srwo22n2w2PQUt_Mwn0EsBMxk2c-zJX1d8UBYbpMDdpbwy8MVATGL9yqKWpmvHqUS_ZBEnTeSJmJpbfnSh3ywrgXCM2_s2FPLAHOt9B8YZs",
    alt: "Corporate legal notary consultation in El Salvador, signing official commercial contracts and corporate documents"
  },
  {
    id: 5,
    title: "Puerto de La Unión",
    subtitle: "Infraestructura logística portuaria y régimen de zonas francas",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WKl2wRr1wvqRh1bxU0rPFWnD9k_QEc0FskNKZpdXsbMdd4BXgpnlM2kWun2HjkxYc5fWFsMiGO4q7Vlp85sJ5yreddLSjPOBXRbJpMBhA0e74BaBOW72M4a72ftGLWnxBY5a9qXvVaah_r0Mw7z1OSPxIr9fzI3Tk0MyMYscKsr504jhph8ZCgSAtiegeiEnH7QR4j7P7FJAwcC3bZ0oi-9Hta_5NV7ZwlyrcOKqhquyQADkM9Usxy5oQ",
    alt: "Aerial panoramic view of Port of La Union in El Salvador, deep water harbor with modern container port infrastructure"
  },
  {
    id: 6,
    title: "Laboratorio Analítico y Ensayos",
    subtitle: "Verificación de muestras para registros de alimentos y cosméticos",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WblbuGDI2u0yDMH3mXhH5kst89YrYRg8SiLGBKBBZg0qYn7ahFEHGP9lqelO3Xmop4LB4gKAJ0KlkPDOsn3yM1FrrDXlp1ciPTmMFpKwbBmQJHNnfOgFyUUU6gA3ypDMmyaAxWDVinLzUiMDtjcRZ-jVkVSj1xiKTraoYHcDN1qRPPcvMWAQzlX9PnsrjjiZuZ_v-bw2EbuqByDoNxxDNRlNu1LFxZuUCm82iRmNAhpmuFwmnnepF9c0c",
    alt: "Modern biotechnology and pharmaceutical analytical laboratory, researcher examining health registration samples"
  },
  {
    id: 7,
    title: "Equipo Técnico de Comercio Exterior",
    subtitle: "Revisión documental exhaustiva previa a la llegada de embarques",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1Wfx7hEAB4cORVTJ0j01FM61meE-DSDi1CV-BMjsFOwmmWLuuVKOc2M2uXj7KXFo8UaX31UpgZSyNHuxjJ7oE5LB1B7BORga4fvp71G85KvM6ZiF8oMjyOdS632b661NslpRi1Gtz_LrJ0vZrhyBD_Pc9-bWaFnyRJutuFBRKfPk1J66LTT7D0Xv1hBSrkuXud7K_3d11d3arX_Q76VoywKD55b369s16sKSywGcgOWEWVE9tMuQr6wvtE",
    alt: "Latin America international trade and customs office, logistics specialists reviewing import export documentation"
  },
  {
    id: 8,
    title: "Almacenes Fiscales y Custodia",
    subtitle: "Inspección técnica de mercancías en recintos fiscales salvadoreños",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1W7PXrr2XTh_Q4jTtJElGDt8DlwlNT2uSEhPj-h_5w-qZ1U_PsdS1Q-kg8nGPcURSUfUlRKON6BrADeF7YO_Q9VHf_fimijB2zcf-nGnysrJ3rJGH5joguQHNlhIHNY2C7oMsh-wzupvBxvaID4O0HAwkJoGGAfvtE8HSAvQbTAi5lRzXpoxVbD1OTfD5JG1Ld8W68nkh1SpIvVL9EZQXQDmSQr2B5zA7Jukwni0BcmVYA88cv9A91hI5I",
    alt: "Customs warehouse and bonded logistics storage facility in El Salvador, palletized commercial goods being inspected"
  },
  {
    id: 9,
    title: "Control de Calidad Regulatorio",
    subtitle: "Homologación con estándares técnicos centroamericanos (RTCA)",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WP9Fag3D-73om2337tsQLwMMK3vmB_Wkb4rF2J-xb-_Yq5jpzwUMuixKveT8xcoNi2dRKfe90WuwADO672US30Umavgg0CYZ37LJLnefp-S25RcGS6jz-9lrbHqcbnzmiLFmGmJ8ST2io4-CbwL61dFZchcyfImJ5glJo0EXHJ6UJ19KrIpWRrMG0U5wpN_azHJqT2iK7rBIaMA9T6g8KRFbJ_xXUiAYP4Z06gzEvoowXWefQTt0FBHw",
    alt: "High-end pharmaceutical regulatory laboratory quality control, clean scientific environment"
  },
  {
    id: 10,
    title: "Terminal Multimodal de Contenedores",
    subtitle: "Monitoreo aduanal directo para prevenir recargos de estadía",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1Uxo3tcDLgDL_ZALDWuH4M6z2GSQOBK-DnDs7SLR3raTJKpeMNpONGQi_T9kQlu-7HxHLeF2U3aM2stSNmZQc18MmQ9RGTUw5JO8ARg2d8CqQbMJygn2v03ChAZ2GKi3dOiF_sFzXeU6GgnURz2Dx0THo7NE2O66DAIvctVySVXe_QInAjY5YSIu-SVQLsobpzmdu_oCCdc-4-FC_v5pC5zoOJB0u_r1dEuUSTsbj_czPgsrhRS8d6_0mo",
    alt: "Modern logistics port and customs inspection container terminal, cargo ship and cranes"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "legal-notarial",
    areaNumber: "Área 01",
    title: "Servicios Legales y Notariales",
    description: "Estructuración formal y protección patrimonial integral para garantizar que cada acto tenga certeza jurídica ante instituciones salvadoreñas.",
    icon: "gavel",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VBczn6BU81e-TEe6adsiVqkGN1M3uSj2z-akDD-ERV31QnjrhKI2VnQp2IC7Q35fFZxrEdUFiO0NWYzWSFEYhFERGVfrL6tK_dc-2g9NHlImiSjyeP8-NRGnczKKETFFJLU8Qx_PRRHJr5Srwo22n2w2PQUt_Mwn0EsBMxk2c-zJX1d8UBYbpMDdpbwy8MVATGL9yqKWpmvHqUS_ZBEnTeSJmJpbfnSh3ywrgXCM2_s2FPLAHOt9B8YZs",
    items: [
      "Constitución de sociedades (S.A. de C.V., SAS)",
      "Contratos mercantiles y acuerdos entre socios",
      "Poderes, actas notariales y protocolización"
    ],
    ctaText: "Consultar caso notarial",
    regulatoryEntity: "CNR (Centro Nacional de Registros) & Sección de Notariado CSJ",
    turnaroundTime: "3 a 8 días hábiles según tipo de acto",
    officialRequirements: [
      "Documentos Únicos de Identidad (DUI) y NIT de los otorgantes / accionistas",
      "Definición de capital social mínimo y distribución accionaria",
      "Certificación de cheque bancario para depósito de capital fundacional",
      "Pacto Social formulado conforme al Código de Comercio salvadoreño",
      "Nombramiento formal de Junta Directiva o Administrador Único"
    ],
    scopeDetail: "Garantizamos que la redacción notarial cuente con blindaje estricto contra objeciones registrales en el Registro de Comercio del CNR, asegurando la inmediata obtención de personería jurídica y vigencia de poderes."
  },
  {
    id: "sanitario",
    areaNumber: "Área 02",
    title: "Regulación Sanitaria y Registros",
    description: "Gestión técnica ante la Dirección Nacional de Medicamentos (DNM) y Ministerio de Salud (MINSAL) para comercialización sin contratiempos.",
    icon: "health_and_safety",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1WJteFeS-UlbwJ2Re66OYcPwQMkPoNbS_naEeNgvNpzvn_1MEuKbMs3cA9Tx24XU_H99DAeNdwfmlD6tDqQS9NJyVpJgImdopgrau85nTIT9MGjuiUhbHhVX9h30-y0xj-QUlVKHiC_isQ7Ek8msp5xvkc7FJCEc47WXk5w0eCL3I3VBuM8u4umCNrdcohxIuOW1JxhwPoy4vbKFKIdeXYGG7EW1q6DSiY0YOywaCqmTGjFRGr43Z8zVQ",
    items: [
      "Registros de cosméticos, alimentos y bebidas",
      "Dispositivos médicos y productos farmacéuticos",
      "Licencias de funcionamiento de establecimientos"
    ],
    ctaText: "Gestionar permisos sanitarios",
    regulatoryEntity: "DNM (Dirección Nacional de Medicamentos) & MINSAL",
    turnaroundTime: "15 a 45 días hábiles según categoría de riesgo",
    officialRequirements: [
      "Fórmula cuali-cuantitativa completa extendida por fabricante",
      "Certificado de Libre Venta (CLV) apostillado en país de origen",
      "Artes de etiquetado conforme a Reglamentos Técnicos Centroamericanos (RTCA)",
      "Certificado de Análisis (CoA) de lote representativo",
      "Contrato con Profesional Regente / Farmacéutico responsable en El Salvador"
    ],
    scopeDetail: "Preparamos el dossier técnico en plataformas en línea oficiales (Portal DNM / SISAM), resolviendo observaciones preventivas antes de que se emita informe de prevención técnico o arancelario."
  },
  {
    id: "aduanal",
    areaNumber: "Área 03",
    title: "Consultoría Aduanal e Importación",
    description: "Auditoría arancelaria y soporte logístico-jurídico para evitar sobrecostos, detenciones en puerto y riesgo de declaración de abandono aduanal.",
    icon: "local_shipping",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XKz7N0eu9B383fHq0xVWCgUuLeJGH5q1Epx-7wZIFjlRJSttkMCegP_wfDiIX8Qr7I9GBvl2C0OL3LRnEalMzsXLB9vpQrL7RczoHIqquoVoviDZn73ovc624WvmMa1Uo9NwJzQike-kUgcg7jvEsheOhZogQjsEnc2f_fzD4aAqtUYCYyYNOjp8HjTkiaivqv6DW6ACAr2AeWJ3KhMtaX2jRyQczMTtJB1H-JUwpsO9QZ8mgq9ynYbAU",
    items: [
      "Clasificación arancelaria y cálculo de aranceles DAI",
      "Visados de importación previos al embarque",
      "Rescate y liberación de mercancía en aduana"
    ],
    ctaText: "Auditar embarques de importación",
    regulatoryEntity: "DGA (Dirección General de Aduanas) - Ministerio de Hacienda",
    turnaroundTime: "24 a 72 horas para visados y pre-clasificación",
    officialRequirements: [
      "Factura Comercial Definitiva (Commercial Invoice) con incoterm especificado",
      "Conocimiento de Embarque (B/L marítimo, AWB aéreo o Carta de Porte)",
      "Certificado de Origen (TLC Estados Unidos CAFTA-DR, Unión Europea, México)",
      "Permiso de importación o visado sanitario emitido antes de arribo",
      "Lista de empaque (Packing List) detallada por bulto y peso neto/bruto"
    ],
    scopeDetail: "Validamos aranceles (DAI del 0% al 20%, IVA 13%) y regulaciones no arancelarias para que su declaración aduanera (DUCA) proceda con selectividad favorable y sin retrasos de almacenaje fiscal."
  },
  {
    id: "formalizacion",
    areaNumber: "Área 04",
    title: "Formalización & Nuevas Empresas",
    description: "Ruta integral desde la concepción del negocio hasta el otorgamiento de NIT, NRC fiscal, licencias edilicias y marcas en el CNR.",
    icon: "domain_add",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1XWryiGOWXqE9pgE4MLkjFtclKBF4ML8o--stWm7_yeNtzZXJ2_pLAUkHPsX_RB_eHoFBVv8gppqfZuh-SX9IFM9gg3FpRgCIiEvxWtIVEAh6CH0DXwoSksiBIbtUbw3zoupoQURVoXuWR3pMrJumN7h7SSB8W1jgBnKxc4CyCoy-03ZNWAnzO18TPlOGRb8Ls7O69FjNbzK4A8-JuhkJfMPmZNvMqTCXlVwEONaiehd-xnfOw4BkYiWYw",
    items: [
      "Registro de Matrícula de Comercio en CNR",
      "Inscripción Tributaria y Calificación Municipal",
      "Depósito y protección de Signos Distintivos"
    ],
    ctaText: "Iniciar formalización",
    regulatoryEntity: "CNR, Ministerio de Hacienda (DGII) & Alcaldía Municipal",
    turnaroundTime: "5 a 12 días hábiles (circuito completo)",
    officialRequirements: [
      "Escritura de constitución inscrita en Registro de Comercio",
      "Balance Inicial auditado por Contador Público Autorizado (CPA)",
      "Comprobante de domicilio fiscal (contrato de arrendamiento notariado)",
      "Inscripción en Ministerio de Hacienda para emisión de DTE (Factura Electrónica)",
      "Calificación de establecimiento en la Alcaldía correspondiente"
    ],
    scopeDetail: "Entregamos un paquete listo para operar comercialmente: NIT/NRC habilitado, sistema DTE listo para facturación digital, solvencia municipal y matrícula de empresa vigente."
  },
  {
    id: "continuo",
    areaNumber: "Área 05",
    title: "Cumplimiento Continuo & Renovaciones",
    description: "Mantenimiento de licencias vigentes, modificaciones de junta directiva, auditorías de cumplimiento y control preventivo de multas.",
    icon: "autorenew",
    imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1Wfx7hEAB4cORVTJ0j01FM61meE-DSDi1CV-BMjsFOwmmWLuuVKOc2M2uXj7KXFo8UaX31UpgZSyNHuxjJ7oE5LB1B7BORga4fvp71G85KvM6ZiF8oMjyOdS632b661NslpRi1Gtz_LrJ0vZrhyBD_Pc9-bWaFnyRJutuFBRKfPk1J66LTT7D0Xv1hBSrkuXud7K_3d11d3arX_Q76VoywKD55b369s16sKSywGcgOWEWVE9tMuQr6wvtE",
    items: [
      "Renovación oportuna de registros de productos",
      "Reformas de pacto social y aumento de capital",
      "Auditoría de cumplimiento administrativo anual"
    ],
    ctaText: "Programar revisión de cartera",
    regulatoryEntity: "DNM, CNR, Ministerio de Trabajo & Hacienda",
    turnaroundTime: "Monitoreo continuo con alertas a 60 días",
    officialRequirements: [
      "Inventario de vigencias actuales de registros sanitarios y patentes",
      "Credenciales de Junta Directiva actualizadas",
      "Depósito anual de balances comerciales en CNR",
      "Renovación anual de matrícula de comercio y licencias municipales"
    ],
    scopeDetail: "Mantenemos un semáforo de vencimientos que previene de forma automatizada multas por caducidad o bloqueos aduanales por registros vencidos."
  }
];

export const METHODOLOGY_PILLARS: MethodologyPillar[] = [
  {
    number: "01",
    title: "Diagnóstico Inicial & Hoja de Ruta",
    description: "Evaluamos la situación legal y operativa de su proyecto. Definimos con precisión qué registros, licencias o contratos son estrictamente requeridos.",
    badgeText: "Evaluación inicial clara",
    icon: "checklist",
    details: [
      "Auditoría preliminar de documentos de origen",
      "Mapeo de autoridades competentes en El Salvador",
      "Calendario con hitos críticos y dependencias técnicas"
    ]
  },
  {
    number: "02",
    title: "Transparencia Total de Costos",
    description: "Distinción rigurosa e informada entre honorarios profesionales, aranceles del Estado salvadoreño y gastos de gestión. Sin costos imprevistos.",
    badgeText: "Desglose por partida",
    icon: "receipt_long",
    details: [
      "Cotización formal segregando aranceles oficiales (DNM, CNR, Hacienda)",
      "Tarifas fijas pactadas sin recargos ocultos",
      "Comprobantes oficiales emitidos por las instituciones gubernamentales"
    ]
  },
  {
    number: "03",
    title: "Gestión Técnica & Documental",
    description: "Redacción notarial, preparación de expedientes sanitarios y trámites aduanales bajo rigurosos protocolos técnicos que previenen prevenciones o demoras.",
    badgeText: "Rigor técnico aplicado",
    icon: "task",
    details: [
      "Revisión de requisitos RTCA y normativa salvadoreña",
      "Formulación de estatutos societarios y contratos mercantiles a medida",
      "Radicación en plataformas institucionales oficiales"
    ]
  },
  {
    number: "04",
    title: "Seguimiento Activo & Notificaciones",
    description: "Actualizaciones periódicas proactivas. Cada hito radicado ante la entidad correspondiente es reportado de inmediato con su comprobante oficial.",
    badgeText: "Reportes en tiempo real",
    icon: "notifications_active",
    details: [
      "Notificación directa vía WhatsApp y correo formal",
      "Acceso a bitácora de estado con número de expediente oficial",
      "Custodia y entrega física de credenciales y resoluciones favorables"
    ]
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: "emprendedores",
    badge: "Emprendedores & Startups",
    title: "Nuevas Sociedades",
    description: "Para quienes inician y necesitan una guía sin complicaciones para formalizarse, definir el tipo de sociedad ideal y arrancar con bases comerciales protegidas.",
    centralObjective: "Evitar errores de estructuración societaria inicial que cuestan miles más adelante.",
    ctaText: "Ruta para emprendedores",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMOSKHGM5AB8RzrGs9MZx8O0p0DnI-0g9tLcbOM0sGBRPK2iSIs_ZGlbwZISfV1JvWpEBMNhoelU5MkLGs6cVbWdA6BWe3aLJa7ZplzeKty04Vr2ujq8ohW_w_aMGvrxqLjX1XvZus0SSvTJ9Dv7htxu7_FZ3Fl8hV7kj4Kn3_SxYyrjA_e9FTW-DQ_81mE8GHqDRYaqa84CWwDcyWTENj-16VIwA4vi-CcDfbMprJ0kfjhwb04ZdX",
    alt: "Two focused Central American entrepreneurs reviewing corporate documents and tablet inside a modern glass conference room in San Salvador, sunny natural light, business professional atmosphere, clean composition",
    keyServices: ["Constitución SAS / S.A. de C.V.", "Obtención de NIT y NRC", "Registro de Marca CNR"],
    typicalTimeline: "7 a 10 días hábiles"
  },
  {
    id: "importadores",
    badge: "Comercio Internacional",
    title: "Importadores & Distribuidores",
    description: "Para empresas que comercializan productos regulados y necesitan asegurar que cada flete ingrese sin multas, almacenaje extraordinario ni demoras aduanales.",
    centralObjective: "Coordinación de visados, registros de marca y aranceles antes del embarque.",
    ctaText: "Plan logístico-aduanal",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMeDgp_zwiFbfh0_b85IvsRKU8U_pvPzjno3EPcIxuG6_Ql6j_ORuG5yYYkXCBCDIA0gaTXQYmM-XQexNDSTFNHcJAE1RMsTTi-ZYntpz7IWUzNKNuqos0aj6MM5oBzg70crNq6J4av210g33geaVTk0SUN9pe18BQzSXx5Xk1NgZByJrueEezy6Re8-0Gt-LB4lwYvFcJstEI2iVlxvMxChlP0VSyZpsCEozoVtBrIBlPOwaP7z46",
    alt: "Modern logistics terminal and clean cargo warehouse inspection in El Salvador, container terminal with shipping manager verifying digital manifests on tablet, crisp sunlight and high precision",
    keyServices: ["Auditoría Arancelaria DAI/IVA", "Registros DNM / MINSAL", "Liberación en Aduana Terrestre / Marítima"],
    typicalTimeline: "Gestión previa al zarpe / 48 hrs en aduana"
  },
  {
    id: "crecimiento",
    badge: "Expansión de Negocios",
    title: "Empresas en Crecimiento",
    description: "Para compañías consolidadas que diversifican líneas de productos, abren nuevas sucursales, o requieren blindaje contractual y renovación de licencias.",
    centralObjective: "Soporte notarial continuo y gobierno corporativo ordenado.",
    ctaText: "Consultoría corporativa",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdzLqI07QjoZiXfqmLwQ1IwSz7NfCGlI8DlvxBwRSrgctVyvmdsUYObHdt7AH-slbS0-8Od-BcsuinzMEvnndbX0Atofm-eldcD2agqbvK7Nhycz4w999oHFt9los3aCx5hfzW3646SdfolhHU8BRPdAk0ACEWhfP4oapU9cuiPoxXVvEa2JWUetCnwUgfNG4KpbchR_os9pXGM9cOl9c7TqmfWiu809G00RKJ29M5wHSbt5kgloY8",
    alt: "Corporate boardroom with Latin American executives in discussion around a timber conference table with architectural skyline outside floor to ceiling windows, professional demeanor and refined aesthetics",
    keyServices: ["Reformas Estatutarias & Aumento Capital", "Contratos de Distribución Exclusiva", "Auditoría de Cumplimiento Anual"],
    typicalTimeline: "Acompañamiento mensual estructurado"
  },
  {
    id: "extranjeras",
    badge: "Inversión Internacional",
    title: "Empresas Extranjeras",
    description: "Aterrizaje e instalación en El Salvador. Homologación de poderes del extranjero, registros fiscales locales y cumplimiento aduanero de entrada.",
    centralObjective: "Acompañamiento bilingüe y representación legal con rigor institucional.",
    ctaText: "Asistencia para inversión",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqRTlOcc2Xj29-NElWZWa1IOPakYHQt216xUgShRZloodzfXycY5RD-Bm9KrKyl_7i0ANf-g91lLt2CiKvIRh2C2p74NByKdQ0_roiHbjOS8HqfiqZarGrVIbTzN0EBVMb24qzuANBR5bfPaeqW44Eybbok1Glb47r8_8g3BLXWWQCJxGPuJPAPs8RfhJ_ph9RDbodAwN5dOQzEEi_rg5Sat_FORLQ6H_wYtPdD_CS3sd7pXnfET5j",
    alt: "International business setting, San Salvador corporate financial district towers with clear sky, executive signing document with premium pen, professional and institutional tone",
    keyServices: ["Sucursal de Sociedad Extranjera", "Apostillado y Homologación de Poderes", "Acreditación de Representante Legal Local"],
    typicalTimeline: "15 a 20 días hábiles"
  }
];

export const VALUES_MATRIX = [
  {
    icon: "architecture",
    title: "Rigor Técnico",
    description: "Análisis exhaustivo de la normativa vigente en El Salvador para redactar documentos que no sufran prevenciones ni reprocesos."
  },
  {
    icon: "visibility",
    title: "Claridad Directa",
    description: "Explicamos la ley y los procesos aduaneros en lenguaje empresarial, facilitando la toma de decisiones ágiles y fundamentadas."
  },
  {
    icon: "verified_user",
    title: "Responsabilidad Total",
    description: "Asumimos cada caso con dedicación rigurosa, protegiendo las inversiones de nuestros clientes como si fueran propias."
  },
  {
    icon: "lock",
    title: "Confidencialidad",
    description: "Custodia estricta de su información corporativa, fórmulas, acuerdos de accionistas y estrategias comerciales reservadas."
  }
];
