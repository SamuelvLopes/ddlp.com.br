// Portuguese is the source language: its copy lives in index.html (so search
// engines and AI crawlers read it without running JS) and is captured at load.
// English and Spanish are applied on demand from the dictionaries below.
const translations = {
  en: {
    skip: "Skip to content", brandLabel: "DDLP, back to top", mainNav: "Main navigation", languageNav: "Select language",
    navServices: "Services", navProcess: "How it works", navPlans: "Plans", navFaq: "FAQ", navCta: "Talk to us",
    heroEyebrow: "Digital design, leads and performance agency",
    heroTitle1: "Design that attracts.", heroTitle2: "Leads that convert.",
    heroLead: "DDLP builds websites and landing pages, sets up your lead funnel and runs your campaigns. All measured, from the first click to the closed deal.",
    ctaPrimary: "I want more leads", ctaSecondary: "See services",
    fanD: "Digital design", fanMsgTag: "New lead", fanL: "Leads", fanP: "Performance",
    tk1: "Landing pages", tk2: "Company websites", tk3: "Visual identity", tk4: "Lead funnels", tk5: "WhatsApp + CRM", tk6: "A/B tests", tk7: "Monthly reports",
    aboutEyebrow: "In one sentence", aboutTitle: "What is DDLP?",
    aboutAnswer: "DDLP is an agency that brings digital design, lead capture and performance into one team, so businesses that sell through conversations turn visits into customers.",
    fact1Label: "Who it's for", fact1: "Clinics, service providers, firms, schools and B2B companies.",
    fact2Label: "What it delivers", fact2: "Page, lead funnel and campaign management, all connected.",
    fact3Label: "How it measures", fact3: "Leads, cost per lead and sales, not likes.",
    servicesEyebrow: "Services", servicesTitle: "What does DDLP do?",
    servicesText: "Three fronts that work better together. You can start with one and add the others when it makes sense.",
    dTitle: "Digital design", dText: "Fast pages and consistent brands, built for one action: getting the visitor to reach out.",
    d1: "Conversion landing pages", d2: "Company websites", d3: "Visual identity and logo", d4: "Social and ad creatives",
    lTitle: "Leads", lText: "Every contact arrives qualified and goes straight to whoever sells, with no forgotten spreadsheet.",
    l1: "Forms that qualify", l2: "WhatsApp with auto-replies", l3: "CRM integration", l4: "A funnel with clear stages",
    pTitle: "Performance", pText: "Budget goes where leads come cheapest, and you know where every sale comes from.",
    p1: "Meta, Google and TikTok Ads management", p2: "Pixel, GA4 and conversions", p3: "Ongoing A/B tests", p4: "A monthly report in plain language",
    whyEyebrow: "Why one team", whyTitle: "Why bring design, leads and performance together?",
    whyText: "Because results depend on all three talking to each other. When each vendor handles one piece, nobody owns the whole.",
    tableCaption: "Comparison between separate vendors and DDLP", thTopic: "Topic", thSplit: "Separate vendors", thDdlp: "DDLP",
    r1: "Who owns the result", r1a: "Each one their own piece", r1b: "One team, from click to sale",
    r2: "Page and ad", r2a: "Made at different times", r2b: "Built together, with the same offer",
    r3: "Tracking", r3a: "Stops at the click or the form", r3b: "Runs until the lead becomes a customer",
    r4: "Reporting", r4a: "Several, each with its own metric", r4b: "One, with leads, cost and sales",
    processEyebrow: "Process", processTitle: "How does working with DDLP work?", processText: "Four stages, clear deadlines, and you following each one.",
    s1Title: "Free assessment", s1Text: "We learn the business, the audience and where the funnel is losing contacts today.",
    s2Title: "Design", s2Text: "We create the page and assets with your offer and your brand identity.",
    s3Title: "Launch", s3Text: "We publish, switch on campaigns and check every conversion event.",
    s4Title: "Optimization", s4Text: "We track the numbers, test improvements and report every month.",
    plansEyebrow: "Plans", plansTitle: "How much does DDLP cost?",
    plansText: "Pricing depends on scope and comes after the free assessment, with no surprises. Pick where to start.",
    pl1Name: "Presence", pl1For: "To start the right way.", pl1i1: "Landing page or company website", pl1i2: "Essential visual identity", pl1i3: "Form and WhatsApp button", pl1i4: "GA4 and Pixel set up",
    planCta: "Get a quote", plBadge: "Most popular",
    pl2Name: "Capture", pl2For: "To generate leads every month.", pl2i1: "Everything in Presence", pl2i2: "Paid media management", pl2i3: "Funnel connected to your CRM", pl2i4: "Monthly results report",
    pl3Name: "Scale", pl3For: "To grow with data.", pl3i1: "Everything in Capture", pl3i2: "Ongoing A/B tests", pl3i3: "Multiple channels and pages", pl3i4: "Bi-weekly performance meeting",
    faqEyebrow: "Questions", faqTitle: "Frequently asked questions", faqText: "Didn't find yours? Send it to the email at the end of the page.",
    q1: "What does DDLP stand for?", a1: "DDLP stands for Design Digital, Leads e Performance — Portuguese for digital design, leads and performance. They are the three fronts the agency runs together: the page that attracts, the funnel that captures and the management that measures and improves results.",
    q2: "What kind of business does DDLP work with?", a2: "Businesses that sell through conversations: clinics, service providers, firms, schools and B2B companies that depend on leads to close sales.",
    q3: "How long does a landing page take?", a3: "A landing page is usually ready two to three weeks after the assessment, revisions included.",
    q4: "Is the ad budget included?", a4: "No. The budget is paid directly to the platforms, from the client's account. DDLP handles strategy, campaign management and reporting.",
    q5: "Do I need a website or CRM to start?", a5: "No. If you have one, DDLP keeps what works. If not, it builds from scratch with easy-to-use tools.",
    q6: "Is there a minimum contract?", a6: "Design projects have a fixed scope. Performance management is monthly, with terms agreed in the proposal.",
    q7: "Does DDLP guarantee a number of leads?", a7: "No. No number is guaranteed before testing. DDLP guarantees method, transparency and a clear report of what was done and what comes next.",
    q8: "How do I start working with DDLP?", a8: "Email matheus.calixto@ddlp.com.br telling us what you sell and to whom. You'll get a reply within two business days, with a free assessment.",
    ctaTitle: "Shall we get more people to know your business?",
    ctaText: "Tell us what you sell and to whom. Within two business days we reply with a free assessment and the next steps.",
    ctaButton: "Get a free assessment",
    footerTag: "Design Digital, Leads e Performance.", footerServices: "Services", footerAbout: "What is DDLP", footerContact: "Contact", footerSource: "Open source on GitHub ↗",
    title: "DDLP — Digital Design, Leads & Performance Agency",
    description: "DDLP builds websites and landing pages, sets up lead funnels and runs paid media campaigns, all measured from the first click to the closed deal."
  },
  es: {
    skip: "Saltar al contenido", brandLabel: "DDLP, volver al inicio", mainNav: "Navegación principal", languageNav: "Seleccionar idioma",
    navServices: "Servicios", navProcess: "Cómo funciona", navPlans: "Planes", navFaq: "Preguntas", navCta: "Hablemos",
    heroEyebrow: "Agencia de diseño digital, leads y performance",
    heroTitle1: "Diseño que atrae.", heroTitle2: "Leads que convierten.",
    heroLead: "DDLP crea sitios y landing pages, arma tu embudo de captación y gestiona tus campañas. Todo medido, del primer clic al cliente cerrado.",
    ctaPrimary: "Quiero más leads", ctaSecondary: "Ver servicios",
    fanD: "Diseño digital", fanMsgTag: "Nuevo lead", fanL: "Leads", fanP: "Performance",
    tk1: "Landing pages", tk2: "Sitios institucionales", tk3: "Identidad visual", tk4: "Embudos de captación", tk5: "WhatsApp + CRM", tk6: "Pruebas A/B", tk7: "Informes mensuales",
    aboutEyebrow: "En una frase", aboutTitle: "¿Qué es DDLP?",
    aboutAnswer: "DDLP es una agencia que une diseño digital, captación de leads y performance en un solo equipo, para que negocios que venden por contacto conviertan visitas en clientes.",
    fact1Label: "Para quién", fact1: "Clínicas, prestadores de servicios, estudios, escuelas y empresas B2B.",
    fact2Label: "Qué entrega", fact2: "Página, embudo de captación y gestión de campañas, conectados.",
    fact3Label: "Cómo mide", fact3: "Leads, costo por lead y ventas, no likes.",
    servicesEyebrow: "Servicios", servicesTitle: "¿Qué hace DDLP?",
    servicesText: "Tres frentes que funcionan mejor juntos. Puedes empezar por uno y sumar los otros cuando tenga sentido.",
    dTitle: "Diseño digital", dText: "Páginas rápidas y marcas consistentes, pensadas para una acción: que el visitante te contacte.",
    d1: "Landing pages de conversión", d2: "Sitios institucionales", d3: "Identidad visual y logo", d4: "Piezas para redes y anuncios",
    lTitle: "Leads", lText: "Cada contacto llega calificado y va directo a quien vende, sin planillas olvidadas.",
    l1: "Formularios que califican", l2: "WhatsApp con respuesta automática", l3: "Integración con CRM", l4: "Embudo con etapas claras",
    pTitle: "Performance", pText: "El presupuesto va donde el lead sale más barato, y sabes de dónde viene cada venta.",
    p1: "Gestión de Meta, Google y TikTok Ads", p2: "Pixel, GA4 y conversiones", p3: "Pruebas A/B continuas", p4: "Informe mensual en lenguaje claro",
    whyEyebrow: "Por qué un solo equipo", whyTitle: "¿Por qué juntar diseño, leads y performance?",
    whyText: "Porque el resultado depende de que las tres partes conversen. Cuando cada proveedor cuida un pedazo, nadie responde por el todo.",
    tableCaption: "Comparación entre proveedores separados y DDLP", thTopic: "Tema", thSplit: "Proveedores separados", thDdlp: "DDLP",
    r1: "Quién responde por el resultado", r1a: "Cada uno por su parte", r1b: "Un equipo, del clic a la venta",
    r2: "Página y anuncio", r2a: "Hechos en momentos distintos", r2b: "Creados juntos, con la misma oferta",
    r3: "Medición", r3a: "Se detiene en el clic o el formulario", r3b: "Llega hasta que el lead se vuelve cliente",
    r4: "Informe", r4a: "Varios, cada uno con su métrica", r4b: "Uno solo, con leads, costo y ventas",
    processEyebrow: "Proceso", processTitle: "¿Cómo es trabajar con DDLP?", processText: "En cuatro etapas, con plazos claros y tú siguiendo cada una.",
    s1Title: "Diagnóstico gratuito", s1Text: "Entendemos el negocio, el público y dónde el embudo está perdiendo contactos hoy.",
    s2Title: "Diseño", s2Text: "Creamos la página y las piezas con la oferta y la identidad de tu marca.",
    s3Title: "Lanzamiento", s3Text: "Publicamos, activamos las campañas y revisamos cada evento de conversión.",
    s4Title: "Optimización", s4Text: "Seguimos los números, probamos mejoras e informamos cada mes.",
    plansEyebrow: "Planes", plansTitle: "¿Cuánto cuesta contratar a DDLP?",
    plansText: "El precio depende del alcance y sale después del diagnóstico gratuito, sin sorpresas. Elige por dónde empezar.",
    pl1Name: "Presencia", pl1For: "Para empezar bien.", pl1i1: "Landing page o sitio institucional", pl1i2: "Identidad visual esencial", pl1i3: "Formulario y botón de WhatsApp", pl1i4: "GA4 y Pixel configurados",
    planCta: "Pedir presupuesto", plBadge: "El más elegido",
    pl2Name: "Captación", pl2For: "Para generar leads cada mes.", pl2i1: "Todo lo de Presencia", pl2i2: "Gestión de tráfico pago", pl2i3: "Embudo integrado al CRM", pl2i4: "Informe mensual de resultados",
    pl3Name: "Escala", pl3For: "Para crecer con datos.", pl3i1: "Todo lo de Captación", pl3i2: "Pruebas A/B continuas", pl3i3: "Varios canales y páginas", pl3i4: "Reunión quincenal de performance",
    faqEyebrow: "Preguntas", faqTitle: "Preguntas frecuentes", faqText: "¿No encontraste la tuya? Envíala al correo del final de la página.",
    q1: "¿Qué significa DDLP?", a1: "DDLP significa Design Digital, Leads e Performance: diseño digital, leads y performance. Son los tres frentes que la agencia trabaja juntos: la página que atrae, el embudo que capta y la gestión que mide y mejora el resultado.",
    q2: "¿Con qué tipo de negocios trabaja DDLP?", a2: "Con negocios que venden por contacto: clínicas, prestadores de servicios, estudios, escuelas y empresas B2B que dependen de leads para cerrar ventas.",
    q3: "¿En cuánto tiempo está lista una landing page?", a3: "Una landing page suele estar lista de dos a tres semanas después del diagnóstico, con revisiones incluidas.",
    q4: "¿El presupuesto de anuncios está incluido?", a4: "No. Se paga directo a las plataformas, desde la cuenta del cliente. DDLP se ocupa de la estrategia, la gestión de campañas y los informes.",
    q5: "¿Necesito tener sitio o CRM para empezar?", a5: "No. Si ya tienes, DDLP aprovecha lo que funciona. Si no, lo arma desde cero con herramientas fáciles de usar.",
    q6: "¿Hay permanencia mínima?", a6: "Los proyectos de diseño tienen alcance cerrado. La gestión de performance es mensual, con condiciones acordadas en la propuesta.",
    q7: "¿DDLP garantiza una cantidad de leads?", a7: "No. Ningún número se garantiza antes de probar. DDLP garantiza método, transparencia y un informe claro de lo que se hizo y de lo que viene.",
    q8: "¿Cómo empiezo a trabajar con DDLP?", a8: "Escribe a matheus.calixto@ddlp.com.br contando qué vendes y a quién. La respuesta llega en hasta dos días hábiles, con un diagnóstico gratuito.",
    ctaTitle: "¿Hacemos que más gente conozca tu negocio?",
    ctaText: "Cuéntanos qué vendes y a quién. En hasta dos días hábiles respondemos con un diagnóstico gratuito y los próximos pasos.",
    ctaButton: "Pedir diagnóstico gratuito",
    footerTag: "Design Digital, Leads e Performance.", footerServices: "Servicios", footerAbout: "Qué es DDLP", footerContact: "Contacto", footerSource: "Código abierto en GitHub ↗",
    title: "DDLP — Agencia de Diseño Digital, Leads y Performance",
    description: "DDLP crea sitios y landing pages, arma embudos de captación de leads y gestiona campañas de tráfico pago, todo medido del primer clic al cliente cerrado."
  }
};

const pt = {};
document.querySelectorAll("[data-i18n]").forEach((node) => {
  if (!(node.dataset.i18n in pt)) pt[node.dataset.i18n] = node.textContent;
});
document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
  pt[node.dataset.i18nAriaLabel] ??= node.getAttribute("aria-label");
});
pt.title = document.title;
pt.description = document.querySelector('meta[name="description"]').getAttribute("content");
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
    const text = copy[node.dataset.i18nAriaLabel] ?? pt[node.dataset.i18nAriaLabel];
    if (text) node.setAttribute("aria-label", text);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === current));
  });
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
  try { localStorage.setItem("ddlp-language", current); } catch { /* The choice still applies to this visit. */ }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// One FAQ answer open at a time keeps the list short on phones.
const faqItems = document.querySelectorAll(".faq details");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
const initial = detectLanguage();
if (initial !== "pt-BR") setLanguage(initial);
