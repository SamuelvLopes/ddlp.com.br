// Portuguese is the source language: its copy lives in index.html and is
// captured at load time, so only English and Spanish need dictionaries here.
const translations = {
  en: {
    skip: "Skip to content", mainNav: "Main navigation", languageNav: "Select language",
    navServices: "Services", navProcess: "How we work", navPlans: "Plans", navFaq: "FAQ", navCta: "Talk to us",
    heroLine1: "Design that attracts", heroLine2: "Leads that", heroLine3: "convert",
    heroLead: "DDLP stands for Design Digital, Leads e Performance.",
    heroText: "We build websites and landing pages, set up your lead funnel and optimize your campaigns. All measured, from the first click to the closed deal.",
    ctaPrimary: "I want more leads", ctaSecondary: "See what we do",
    mockBriefTitle: "Brief", mockBrief1: "Landing page for an aesthetics clinic, focused on bookings",
    mockBrief2: "Layout approved and live", mockBrief3: "Connect Meta + Google campaigns to the form", mockBrief4: "Pixel, GA4 and conversions tracking",
    mockPanelTitle: "Lead dashboard", mockPanelHead: "Leads this week", mockSample: "sample data", mockLeads: "Leads", mockCpl: "Cost/lead",
    mockConv: "Conversion", mockSource: "Top source", mockExport: "Send to CRM",
    mockToastTitle: "New lead on WhatsApp", mockToastText: "Ana wants to book an assessment for Friday.", mockToastA: "Reply now", mockToastB: "Open in CRM",
    pillarDTitle: "Digital design", pillarDText: "Websites, landing pages and visual identity that build trust in the first second.",
    pillarLTitle: "Leads", pillarLText: "Forms, WhatsApp and CRM connected so no contact gets lost along the way.",
    pillarPTitle: "Performance", pillarPText: "Campaigns, tests and reports to invest where the return shows up.",
    thesisTitle1: "From brief to lead", thesisTitle2: "in weeks, not months",
    thesisText1: "Many companies hire a designer, a media buyer and someone to run the CRM. Each one looks after their own piece, and nobody owns the result.",
    thesisText2: "DDLP brings all three into one team: the page is designed to convert, the campaign is built for that page, and every lead is tracked until it becomes a sale.",
    ctaDiagnosis: "Get a free assessment",
    dashGroup1: "Acquisition", dashNav1: "Overview", dashNav2: "Campaigns", dashNav3: "Forms", dashGroup2: "Sales", dashNav4: "Pipeline", dashNav5: "Reports",
    dashTitle: "Overview", dashSub: "Last 30 days · sample data", dashK1: "Visits", dashK2: "Leads", dashK3: "Cost/lead", dashK4: "Sales", dashChart: "Leads per day",
    servicesTitle: "Everything your brand needs",
    servicesText: "A beautiful page is just the start. We take care of presence, acquisition and optimization, with a plan that grows with your business.",
    b1Title: "Websites and landing pages", b1Text: "Fast, responsive pages built for a single action: getting the visitor to reach out.",
    b2Title: "Visual identity", b2Text: "Logo, colors, typography and social media assets. A brand that looks big from the very first post.",
    b3Title: "Lead funnels", b3Text: "Forms, lead magnets and WhatsApp wired into your CRM, with automatic replies.",
    b4Title: "Paid media", b4Text: "Campaigns on Meta, Google and TikTok, with budget moved to wherever leads come cheapest.",
    b5Title: "Analytics and CRO", b5Text: "End-to-end tracking and A/B tests so the same budget delivers more every month.",
    b5Receipt: "Report", b5r1: "Clicks", b5r2: "Leads", b5r3: "Sales",
    channelsLabel: "Tools and channels we work with",
    leadsTitle: "Leads that don't slip away",
    leadsText: "The lead arrives, gets qualified and goes straight to whoever sells. No forgotten spreadsheet, no message answered two days later.",
    trio1Panel: "Assessment form", trio1Field1: "Name", trio1Field2: "Interest", trio1Value: "Facial harmonization", trio1Btn: "Book now",
    trio1Title: "Qualified capture", trio1Text: "The right form questions filter out the curious and give sales the context of each person.",
    trio2Panel: "Routing", trio2Sales: "Sales team", trio2Site: "Website",
    trio2Title: "Replies in minutes", trio2Text: "Each source lands in the right channel, with an automatic welcome message while the team takes over.",
    trio3Col1: "New", trio3Col2: "Talking", trio3Col3: "Won",
    trio3Title: "An organized CRM", trio3Text: "A visual funnel with clear stages, so you know how much came in, moved forward and closed.",
    perfTitle1: "You invest", perfTitle2: "we measure the rest",
    perfText1: "Performance isn't posting more. It's knowing where every sale comes from.",
    perfText2: "We set up tracking, review campaigns every week and show in a simple report what is working and what we'll change.",
    f1Title: "Media management", f1Text: "Audiences, creatives and bids tuned on leads and sales, not likes.",
    f2Title: "A/B testing", f2Text: "Headlines, offers and layouts tested side by side. The version that converts best stays.",
    f3Title: "Full tracking", f3Text: "Pixel, GA4, UTMs and conversions set up to see the customer's whole journey.",
    f4Title: "Reports without fluff", f4Text: "A monthly summary in plain language: what came in, what it cost and the next step.",
    processTitle: "How we work", processText: "Four stages, clear deadlines and you following everything.",
    s1Title: "Assessment", s1Text: "We learn your business, your audience and where the funnel is leaking today.",
    s2Title: "Design", s2Text: "We create the page and assets with your offer and your brand identity.",
    s3Title: "Launch", s3Text: "We publish, switch on campaigns and check every conversion event.",
    s4Title: "Optimization", s4Text: "We track the numbers, test improvements and report every month.",
    plansTitle: "Tailored plans",
    plansText: "Every business is at a different stage. Pick where to start; pricing comes after the assessment, with no surprises.",
    p1Tag: "Presence", p1Title: "To start the right way", p1i1: "Landing page or company website", p1i2: "Essential visual identity",
    p1i3: "Form and WhatsApp button", p1i4: "GA4 and Pixel set up",
    p2Tag: "Capture", p2Title: "To generate leads every month", p2i1: "Everything in Presence", p2i2: "Paid media management",
    p2i3: "Funnel connected to your CRM", p2i4: "Monthly results report",
    p3Tag: "Scale", p3Title: "To grow with data", p3i1: "Everything in Capture", p3i2: "Ongoing A/B tests",
    p3i3: "Multiple channels and pages", p3i4: "Bi-weekly performance meeting", planCta: "Get a quote",
    faqTitle: "Common questions",
    q1: "What does DDLP stand for?", a1: "Design Digital, Leads e Performance — Portuguese for digital design, leads and performance, the three fronts we run together so your marketing pays off.",
    q2: "What kind of business do you work with?", a2: "Businesses that sell through conversations: clinics, service providers, firms, schools and B2B companies that depend on leads.",
    q3: "How long until the page is ready?", a3: "A landing page is usually ready two to three weeks after the assessment, revisions included.",
    q4: "Is the ad budget included?", a4: "No. The budget is paid directly to the platforms, from your own account. We handle strategy, management and reporting.",
    q5: "Do I need a website or CRM already?", a5: "No. If you have one, we keep what works. If not, we build it from scratch with easy-to-use tools.",
    q6: "Is there a minimum contract?", a6: "Design projects have a fixed scope. Performance management is monthly, and terms are agreed in the proposal.",
    q7: "Do you guarantee a number of leads?", a7: "No serious team guarantees numbers before testing. We guarantee method, transparency and a clear report of what was done.",
    q8: "How do I start?", a8: "Send us a message at the email below. We'll schedule a quick call and send your free assessment.",
    finalTitle1: "Your business is already good.", finalTitle2: "Let more people know.",
    finalText: "Tell us what you sell and to whom. Within two business days we reply with a free assessment and the next steps.",
    finalCta: "Get a free assessment",
    footerTag: "Design Digital, Leads e Performance.", footerServices: "Services", footerCompany: "DDLP", footerContact: "Contact",
    footerSource: "Open source on GitHub ↗", footerNote: "Figures shown in the dashboards are illustrative.",
    description: "DDLP — Design Digital, Leads e Performance. Websites, lead funnels and campaigns measured from click to customer.",
    title: "DDLP — Digital Design, Leads & Performance"
  },
  es: {
    skip: "Saltar al contenido", mainNav: "Navegación principal", languageNav: "Seleccionar idioma",
    navServices: "Servicios", navProcess: "Cómo trabajamos", navPlans: "Planes", navFaq: "Preguntas", navCta: "Hablemos",
    heroLine1: "Diseño que atrae", heroLine2: "Leads que", heroLine3: "convierten",
    heroLead: "DDLP es Design Digital, Leads e Performance.",
    heroText: "Creamos sitios y landing pages, armamos tu embudo de captación y optimizamos tus campañas. Todo medido, del primer clic al cliente cerrado.",
    ctaPrimary: "Quiero más leads", ctaSecondary: "Ver lo que hacemos",
    mockBriefTitle: "Brief", mockBrief1: "Landing para clínica estética, enfocada en reservas",
    mockBrief2: "Diseño aprobado y publicado", mockBrief3: "Conectar campañas de Meta + Google al formulario", mockBrief4: "Pixel, GA4 y conversiones midiendo",
    mockPanelTitle: "Panel de leads", mockPanelHead: "Leads de la semana", mockSample: "datos de ejemplo", mockLeads: "Leads", mockCpl: "Costo/lead",
    mockConv: "Conversión", mockSource: "Origen principal", mockExport: "Enviar al CRM",
    mockToastTitle: "Nuevo lead en WhatsApp", mockToastText: "Ana quiere agendar una evaluación para el viernes.", mockToastA: "Responder ahora", mockToastB: "Ver en el CRM",
    pillarDTitle: "Diseño digital", pillarDText: "Sitios, landing pages e identidad visual que generan confianza en el primer segundo.",
    pillarLTitle: "Leads", pillarLText: "Formularios, WhatsApp y CRM conectados para que ningún contacto se pierda.",
    pillarPTitle: "Performance", pillarPText: "Campañas, pruebas e informes para invertir donde aparece el retorno.",
    thesisTitle1: "Del brief al lead", thesisTitle2: "en semanas, no meses",
    thesisText1: "Muchas empresas contratan a un diseñador, a un gestor de anuncios y a alguien para el CRM. Cada uno mira solo su parte y nadie responde por el resultado.",
    thesisText2: "DDLP une los tres frentes en un solo equipo: la página se diseña para convertir, la campaña se hace para esa página y cada lead se sigue hasta convertirse en venta.",
    ctaDiagnosis: "Pedir diagnóstico gratuito",
    dashGroup1: "Captación", dashNav1: "Resumen", dashNav2: "Campañas", dashNav3: "Formularios", dashGroup2: "Ventas", dashNav4: "Pipeline", dashNav5: "Informes",
    dashTitle: "Resumen", dashSub: "Últimos 30 días · datos de ejemplo", dashK1: "Visitas", dashK2: "Leads", dashK3: "Costo/lead", dashK4: "Ventas", dashChart: "Leads por día",
    servicesTitle: "Todo lo que tu marca necesita",
    servicesText: "Una página bonita es solo el comienzo. Cuidamos la presencia, la captación y la optimización, con un plan que crece junto a tu negocio.",
    b1Title: "Sitios y landing pages", b1Text: "Páginas rápidas, responsivas y pensadas para una sola acción: que el visitante te contacte.",
    b2Title: "Identidad visual", b2Text: "Logo, colores, tipografía y piezas para redes. Una marca que parece grande desde el primer post.",
    b3Title: "Embudos de captación", b3Text: "Formularios, lead magnets y WhatsApp integrados a tu CRM, con respuesta automática.",
    b4Title: "Tráfico pago", b4Text: "Campañas en Meta, Google y TikTok, con presupuesto donde el lead sale más barato.",
    b5Title: "Analytics y CRO", b5Text: "Medición de punta a punta y pruebas A/B para que el mismo presupuesto rinda más cada mes.",
    b5Receipt: "Informe", b5r1: "Clics", b5r2: "Leads", b5r3: "Ventas",
    channelsLabel: "Herramientas y canales con los que trabajamos",
    leadsTitle: "Leads que no se pierden",
    leadsText: "El lead llega, se califica y va directo a quien vende. Sin planillas olvidadas ni mensajes respondidos dos días después.",
    trio1Panel: "Formulario de evaluación", trio1Field1: "Nombre", trio1Field2: "Interés", trio1Value: "Armonización facial", trio1Btn: "Quiero agendar",
    trio1Title: "Captación calificada", trio1Text: "Las preguntas correctas filtran a los curiosos y le dan al equipo comercial el contexto de cada persona.",
    trio2Panel: "Enrutamiento", trio2Sales: "Comercial", trio2Site: "Sitio",
    trio2Title: "Respuesta en minutos", trio2Text: "Cada origen cae en el canal correcto, con un mensaje automático de bienvenida mientras el equipo responde.",
    trio3Col1: "Nuevo", trio3Col2: "Conversación", trio3Col3: "Cerrado",
    trio3Title: "CRM organizado", trio3Text: "Un embudo visual con etapas claras para saber cuánto entró, cuánto avanzó y cuánto cerró.",
    perfTitle1: "Tú inviertes", perfTitle2: "nosotros medimos el resto",
    perfText1: "Performance no es publicar más. Es saber de dónde viene cada venta.",
    perfText2: "Configuramos la medición, revisamos las campañas cada semana y mostramos en un informe simple qué funciona y qué vamos a cambiar.",
    f1Title: "Gestión de tráfico", f1Text: "Audiencias, creativos y pujas ajustados según leads y ventas, no según likes.",
    f2Title: "Pruebas A/B", f2Text: "Títulos, ofertas y diseños probados lado a lado. Se queda la versión que más convierte.",
    f3Title: "Medición completa", f3Text: "Pixel, GA4, UTMs y conversiones configurados para ver todo el recorrido del cliente.",
    f4Title: "Informes sin rodeos", f4Text: "Un resumen mensual en lenguaje claro: cuánto entró, cuánto costó y el próximo paso.",
    processTitle: "Cómo trabajamos", processText: "Cuatro etapas, plazos claros y tú siguiendo todo.",
    s1Title: "Diagnóstico", s1Text: "Entendemos tu negocio, tu público y dónde se está escapando el embudo hoy.",
    s2Title: "Diseño", s2Text: "Creamos la página y las piezas con la oferta y la identidad de tu marca.",
    s3Title: "Lanzamiento", s3Text: "Publicamos, activamos las campañas y revisamos cada evento de conversión.",
    s4Title: "Optimización", s4Text: "Seguimos los números, probamos mejoras e informamos cada mes.",
    plansTitle: "Planes a medida",
    plansText: "Cada negocio está en un momento distinto. Elige por dónde empezar; el precio sale después del diagnóstico, sin sorpresas.",
    p1Tag: "Presencia", p1Title: "Para empezar bien", p1i1: "Landing page o sitio institucional", p1i2: "Identidad visual esencial",
    p1i3: "Formulario y botón de WhatsApp", p1i4: "GA4 y Pixel configurados",
    p2Tag: "Captación", p2Title: "Para generar leads cada mes", p2i1: "Todo lo de Presencia", p2i2: "Gestión de tráfico pago",
    p2i3: "Embudo integrado al CRM", p2i4: "Informe mensual de resultados",
    p3Tag: "Escala", p3Title: "Para crecer con datos", p3i1: "Todo lo de Captación", p3i2: "Pruebas A/B continuas",
    p3i3: "Varios canales y páginas", p3i4: "Reunión quincenal de performance", planCta: "Quiero un presupuesto",
    faqTitle: "Preguntas frecuentes",
    q1: "¿Qué significa DDLP?", a1: "Design Digital, Leads e Performance: diseño digital, leads y performance, los tres frentes que trabajamos juntos para que tu marketing dé resultado.",
    q2: "¿Con qué tipo de negocios trabajan?", a2: "Negocios que venden por contacto: clínicas, prestadores de servicios, estudios, escuelas y empresas B2B que dependen de leads.",
    q3: "¿En cuánto tiempo está lista la página?", a3: "Una landing page suele estar lista en dos a tres semanas después del diagnóstico, con revisiones incluidas.",
    q4: "¿El presupuesto de anuncios está incluido?", a4: "No. Se paga directo a las plataformas, desde tu cuenta. Nosotros nos ocupamos de la estrategia, la gestión y los informes.",
    q5: "¿Necesito tener sitio o CRM?", a5: "No. Si ya tienes, aprovechamos lo que funciona. Si no, lo armamos desde cero con herramientas fáciles de usar.",
    q6: "¿Hay permanencia mínima?", a6: "Los proyectos de diseño tienen alcance cerrado. La gestión de performance es mensual y las condiciones se acuerdan en la propuesta.",
    q7: "¿Garantizan una cantidad de leads?", a7: "Nadie serio garantiza números antes de probar. Garantizamos método, transparencia e informes claros de lo que se hizo.",
    q8: "¿Cómo empiezo?", a8: "Escríbenos al correo de abajo. Agendamos una conversación rápida y te enviamos el diagnóstico gratuito.",
    finalTitle1: "Tu negocio ya es bueno.", finalTitle2: "Haz que más gente lo sepa.",
    finalText: "Cuéntanos qué vendes y a quién. En hasta dos días hábiles respondemos con un diagnóstico gratuito y los próximos pasos.",
    finalCta: "Pedir diagnóstico gratuito",
    footerTag: "Design Digital, Leads e Performance.", footerServices: "Servicios", footerCompany: "DDLP", footerContact: "Contacto",
    footerSource: "Código abierto en GitHub ↗", footerNote: "Los números de los paneles son ilustrativos.",
    description: "DDLP — Design Digital, Leads e Performance. Sitios, embudos de captación y campañas medidos del clic al cliente.",
    title: "DDLP — Diseño Digital, Leads y Performance"
  }
};

// Capture the Portuguese source copy straight from the markup.
const pt = {};
document.querySelectorAll("[data-i18n]").forEach((node) => {
  if (!(node.dataset.i18n in pt)) pt[node.dataset.i18n] = node.textContent;
});
document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
  pt[node.dataset.i18nAriaLabel] = node.getAttribute("aria-label");
});
pt.description = document.querySelector('meta[name="description"]').getAttribute("content");
pt.title = document.title;
translations["pt-BR"] = pt;

function savedLanguage() {
  try { return localStorage.getItem("ddlp-language"); } catch { return null; }
}

function detectLanguage() {
  const saved = savedLanguage();
  if (saved && translations[saved]) return saved;
  const language = navigator.language || "pt-BR";
  if (language.startsWith("en")) return "en";
  if (language.startsWith("es")) return "es";
  return "pt-BR";
}

function setLanguage(language) {
  const current = translations[language] ? language : "pt-BR";
  const copy = translations[current];
  document.documentElement.lang = current;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const text = copy[node.dataset.i18n] ?? pt[node.dataset.i18n];
    if (text) node.textContent = text;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const text = copy[node.dataset.i18nAriaLabel];
    if (text) node.setAttribute("aria-label", text);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === current));
  });

  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
  try { localStorage.setItem("ddlp-language", current); } catch { /* Selection still applies. */ }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Keep only one FAQ item open at a time.
document.querySelectorAll(".faq details").forEach((item, _, all) => {
  item.addEventListener("toggle", () => {
    if (item.open) all.forEach((other) => { if (other !== item) other.open = false; });
  });
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".section-head, .bento, .channels, .trio, .feature-list, .steps, .plans, .faq, .dash").forEach((node) => {
    node.classList.add("reveal");
    observer.observe(node);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(detectLanguage());
