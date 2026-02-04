// ===================================
// BILINGUAL SYSTEM
// ===================================

const translations = {
    en: {
        'subtitle': 'Real Estate',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        'call-now': 'Call Now',
        'hero-title-main': 'Your Trusted Partner',
        'hero-title-sub': 'in Real Estate & Financing',
        'hero-desc': 'Combining expert real estate knowledge with comprehensive loan services to make your home buying and financing seamless',
        'schedule-btn': 'Schedule Consultation',
        'call-btn': 'Call Now',
        'scroll-text': 'Scroll to explore',
        'about-title': 'About Me',
        'about-subtitle': 'Dual Expertise for Your Benefit',
        'about-portrait-role': 'Real Estate Agent & Loan Officer',
        'about-portrait-note': 'Dedicated to helping families across Southern California buy, sell, and finance with confidence.',
        'agent-title': 'Real Estate Agent',
        'agent-desc': 'Licensed California Real Estate Agent (DRE# 01263425) with deep knowledge of Pico Rivera, LA County, and Orange County markets. Expert guidance through buying, selling, and investment strategies.',
        'loan-title': 'Loan Officer',
        'loan-desc': 'Certified Loan Officer (NMLS# 1550915) specializing in home purchase loans, refinancing, and mortgage solutions. I ensure you get the best financing options tailored to your financial goals.',
        'market-analysis': 'Market Analysis',
        'property-eval': 'Property Evaluation',
        'negotiation': 'Negotiation Expertise',
        'rates': 'Competitive Rates',
        'approvals': 'Fast Approvals',
        'service': 'Personalized Service',
        'services-title': 'Comprehensive Services',
        'services-subtitle': 'Everything You Need for Real Estate Success',
        'service-buying': 'Home Buying',
        'service-buying-desc': 'Find your dream home with expert guidance through property search, market analysis, and negotiation.',
        'service-selling': 'Home Selling',
        'service-selling-desc': 'Maximize your property value with professional marketing, staging consultation, and strategic pricing.',
        'service-loans': 'Home Loans',
        'service-loans-desc': 'Secure competitive mortgage rates with purchase loans, FHA, VA, conventional, and jumbo loan options.',
        'service-refi': 'Refinancing',
        'service-refi-desc': 'Lower your monthly payments or tap into your home\'s equity with rate-and-term or cash-out refinancing.',
        'service-invest': 'Investment Properties',
        'service-invest-desc': 'Build wealth through real estate with guidance on investment property selection and financing strategies.',
        'service-first': 'First-Time Buyers',
        'service-first-desc': 'Navigate your first home purchase with confidence through education, support, and first-time buyer programs.',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Ready to Make Your Real Estate Dreams a Reality?',
        'contact-role': 'Real Estate Agent & Loan Officer',
        'phone-label': 'Phone',
        'email-label': 'Email',
        'brokerage-label': 'Brokerage',
        'form-name': 'Full Name *',
        'form-email': 'Email *',
        'form-phone': 'Phone *',
        'form-interest': 'I\'m Interested In *',
        'form-message': 'Message *',
        'form-submit': 'Send Message',
        'form-privacy': 'Your information is secure and will never be shared',
        'interest-buying': 'Buying a Home',
        'interest-selling': 'Selling a Home',
        'interest-loan': 'Getting a Home Loan',
        'interest-refi': 'Refinancing',
        'interest-invest': 'Investment Property',
        'footer-role': 'Real Estate Agent & Loan Officer',
        'footer-contact': 'Contact',
        'footer-areas': 'Service Areas'
    },
    es: {
        'subtitle': 'Bienes Raíces',
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-contact': 'Contacto',
        'call-now': 'Llamar Ahora',
        'hero-title-main': 'Su Socio de Confianza',
        'hero-title-sub': 'en Bienes Raíces y Financiamiento',
        'hero-desc': 'Combinando conocimiento experto en bienes raíces con servicios integrales de préstamos para hacer su compra y financiamiento de vivienda sin problemas',
        'schedule-btn': 'Agendar Consulta',
        'call-btn': 'Llamar Ahora',
        'scroll-text': 'Desliza para explorar',
        'about-title': 'Acerca de Mí',
        'about-subtitle': 'Doble Experiencia para Su Beneficio',
        'about-portrait-role': 'Agente de Bienes Raíces y Oficial de Préstamos',
        'about-portrait-note': 'Dedicado a ayudar a las familias del sur de California a comprar, vender y financiar con confianza.',
        'agent-title': 'Agente de Bienes Raíces',
        'agent-desc': 'Agente de Bienes Raíces licenciado en California (DRE# 01263425) con profundo conocimiento de los mercados de Pico Rivera, el Condado de LA y el Condado de Orange. Orientación experta en compra, venta y estrategias de inversión.',
        'loan-title': 'Oficial de Préstamos',
        'loan-desc': 'Oficial de Préstamos certificado (NMLS# 1550915) especializado en préstamos para compra de vivienda, refinanciamiento y soluciones hipotecarias. Me aseguro de que obtenga las mejores opciones de financiamiento adaptadas a sus metas financieras.',
        'market-analysis': 'Análisis de Mercado',
        'property-eval': 'Evaluación de Propiedades',
        'negotiation': 'Experiencia en Negociación',
        'rates': 'Tasas Competitivas',
        'approvals': 'Aprobaciones Rápidas',
        'service': 'Servicio Personalizado',
        'services-title': 'Servicios Integrales',
        'services-subtitle': 'Todo lo que Necesita para el Éxito en Bienes Raíces',
        'service-buying': 'Compra de Vivienda',
        'service-buying-desc': 'Encuentre la casa de sus sueños con orientación experta a través de búsqueda de propiedades, análisis de mercado y negociación.',
        'service-selling': 'Venta de Vivienda',
        'service-selling-desc': 'Maximice el valor de su propiedad con marketing profesional, consultoría de presentación y precios estratégicos.',
        'service-loans': 'Préstamos Hipotecarios',
        'service-loans-desc': 'Asegure tasas hipotecarias competitivas con préstamos de compra, FHA, VA, convencionales y opciones de préstamos jumbo.',
        'service-refi': 'Refinanciamiento',
        'service-refi-desc': 'Reduzca sus pagos mensuales o aproveche el patrimonio de su vivienda con refinanciamiento de tasa y plazo o de retiro de efectivo.',
        'service-invest': 'Propiedades de Inversión',
        'service-invest-desc': 'Construya riqueza a través de bienes raíces con orientación sobre selección de propiedades de inversión y estrategias de financiamiento.',
        'service-first': 'Compradores Primerizos',
        'service-first-desc': 'Navegue su primera compra de vivienda con confianza a través de educación, apoyo y programas para compradores primerizos.',
        'contact-title': 'Contáctenos',
        'contact-subtitle': '¿Listo para Hacer Realidad sus Sueños Inmobiliarios?',
        'contact-role': 'Agente de Bienes Raíces y Oficial de Préstamos',
        'phone-label': 'Teléfono',
        'email-label': 'Correo Electrónico',
        'brokerage-label': 'Agencia',
        'form-name': 'Nombre Completo *',
        'form-email': 'Correo Electrónico *',
        'form-phone': 'Teléfono *',
        'form-interest': 'Estoy Interesado En *',
        'form-message': 'Mensaje *',
        'form-submit': 'Enviar Mensaje',
        'form-privacy': 'Su información es segura y nunca será compartida',
        'interest-buying': 'Comprar una Casa',
        'interest-selling': 'Vender una Casa',
        'interest-loan': 'Obtener un Préstamo Hipotecario',
        'interest-refi': 'Refinanciamiento',
        'interest-invest': 'Propiedad de Inversión',
        'footer-role': 'Agente de Bienes Raíces y Oficial de Préstamos',
        'footer-contact': 'Contacto',
        'footer-areas': 'Áreas de Servicio'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    const langBtn = document.querySelector('.lang-text');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.getElementById('langToggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
});

// ===================================
// NAVIGATION
// ===================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
        navMenu?.classList.remove('show');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            navMenu?.classList.remove('show');
        }
    });
});

// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span data-lang="sending">Sending...</span>';
    
    try {
        const response = await fetch('https://formspree.io/f/xanyzdep', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            alert(currentLang === 'es' 
                ? '¡Gracias por su mensaje! Me pondré en contacto con usted pronto.'
                : 'Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            throw new Error('Failed');
        }
    } catch (error) {
        alert(currentLang === 'es'
            ? 'Lo siento, hubo un error. Por favor llame al (562) 777-4267.'
            : 'Sorry, there was an error. Please call (562) 777-4267.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }
});

// Phone formatting
const phoneInput = contactForm?.querySelector('input[type="tel"]');
phoneInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 0) {
        if (val.length <= 3) val = `(${val}`;
        else if (val.length <= 6) val = `(${val.slice(0,3)}) ${val.slice(3)}`;
        else val = `(${val.slice(0,3)}) ${val.slice(3,6)}-${val.slice(6,10)}`;
    }
    e.target.value = val;
});

// ===================================
// BACK TO TOP
// ===================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================
// INITIALIZE
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    console.log('✅ Joe Garcia Real Estate - Initialized');
    console.log('✅ Language:', currentLang);
    console.log('✅ Hero image:', document.querySelector('.hero-portrait')?.src);
});