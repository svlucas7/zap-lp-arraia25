// JavaScript para Landing Page Festa Junina - Zap Gráfica

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== SCROLL SUAVE ==========
    window.scrollToForm = function() {
        const formSection = document.getElementById('orcamento');
        if (formSection) {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // ========== FORMULÁRIO DE ORÇAMENTO ==========
    const form = document.getElementById('orcamentoForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    field.focus();
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            // Simulação de envio (loading state)
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '⏳ Enviando...';
            submitButton.disabled = true;
            form.classList.add('loading');

            // Simula delay de envio
            setTimeout(() => {
                // Coleta dados do formulário
                const formData = {
                    nome: document.getElementById('nome').value,
                    whatsapp: document.getElementById('whatsapp').value,
                    email: document.getElementById('email').value,
                    produto: document.getElementById('produto').value,
                    mensagem: document.getElementById('mensagem').value,
                    utm_source: 'landing_page',
                    utm_medium: 'organic',
                    utm_campaign: 'festa_junina_2025',
                    timestamp: new Date().toISOString()
                };

                // Log dos dados (em produção, enviar para servidor/RD Station)
                console.log('Dados do formulário:', formData);

                // Monta mensagem para WhatsApp
                const whatsappMessage = `
🎪 *Novo Lead - Festa Junina 2025*

👤 *Nome:* ${formData.nome}
📱 *WhatsApp:* ${formData.whatsapp}
📧 *E-mail:* ${formData.email}
🎯 *Produto:* ${formData.produto}
💬 *Mensagem:* ${formData.mensagem || 'Não informado'}

🕒 *Data/Hora:* ${new Date().toLocaleString('pt-BR')}
                `.trim();

                // Link do WhatsApp para a empresa
                const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
                
                // Abre WhatsApp em nova aba
                window.open(whatsappLink, '_blank');

                // Mostra mensagem de sucesso
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.scrollIntoView({ behavior: 'smooth' });

                // Notificação de sucesso
                showNotification('✅ Solicitação enviada com sucesso!', 'success');

                // Google Analytics / GTM tracking (se disponível)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'lead_generation',
                        'event_label': 'festa_junina_orcamento',
                        'value': 1
                    });
                }

                // Reset do botão após um tempo
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    form.classList.remove('loading');
                }, 2000);

            }, 1500);
        });
    }

    // ========== FORMATAÇÃO DO CAMPO WHATSAPP ==========
    const whatsappField = document.getElementById('whatsapp');
    if (whatsappField) {
        whatsappField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length >= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 7) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
            
            e.target.value = value;
        });
    }

    // ========== ANIMAÇÕES DE SCROLL ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);

    // Observa elementos para animação
    const animatedElements = document.querySelectorAll('.product-card, .differential-card, .form-container');
    animatedElements.forEach(el => observer.observe(el));

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('bg-white/98', 'shadow-xl');
                header.classList.remove('bg-white/95');
            } else {
                header.classList.add('bg-white/95');
                header.classList.remove('bg-white/98', 'shadow-xl');
            }
        });
    }

    // ========== INDICADOR DE PROGRESSO DE SCROLL ==========
    createScrollIndicator();

    // ========== PARTÍCULAS FLUTUANTES ==========
    createFloatingParticles();    // ========== LAZY LOADING DE IMAGENS ==========
    setupLazyLoading();

    // ========== SWIPER CARROSSEL ==========
    var swiper = new Swiper('.product-swiper', {
        // Parâmetros
        slidesPerView: 1.2,
        spaceBetween: 16,
        centeredSlides: true,
        loop: true,
        // Paginação
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Responsivo
        breakpoints: {
            // quando a largura da janela for >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            // quando a largura da janela for >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // quando a largura da janela for >= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: false,
            }
        }
    });
});

// ========== FUNÇÕES AUXILIARES ==========

// Indicador de progresso de scroll
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
}

// Partículas flutuantes no background
function createFloatingParticles() {
    const hero = document.querySelector('section');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles absolute inset-0 pointer-events-none';
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Lazy loading de imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        imageObserver.observe(img);
    });
}

// Função para tracking de eventos (integração futura com Google Analytics/RD Station)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // RD Station (quando integrado)
    if (typeof RdIntegration !== 'undefined') {
        RdIntegration.track(eventName, eventData);
    }
    
    // Facebook Pixel (quando integrado)
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
}

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showNotification('🎪 Arraiá Mode Ativado! 🎪', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        konamiCode = [];
    }
});

// Prevenir spam do formulário
let formSubmitted = false;
window.addEventListener('beforeunload', () => {
    if (!formSubmitted && document.getElementById('nome').value) {
        return 'Você tem informações não salvas. Deseja realmente sair?';
    }
});

// Console log customizado (apenas em desenvolvimento)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c🎪 Arraiá da Personalização - Zap Gráfica 🎪', 'color: #FF8C00; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvido com ❤️ para capturar leads de festa junina!', 'color: #228B22; font-size: 14px;');
}

// Função para alternar tema (futura implementação)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

/*
// Service Worker para cache (implementação futura para PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/

// ========== MONTE SEU KIT ARRAIÁ ==========
const products = [
    { id: 'caneca', name: 'Canecas Personalizadas', image: 'assets/images/CANECA.png' },
    { id: 'adesivos', name: 'Adesivos', image: 'assets/images/ADESIVOS.png' },
    { id: 'pulseiras', name: 'Pulseiras Tyvek', image: 'assets/images/PULSEIRAS.png' },
    { id: 'embalagem', name: 'Embalagem Delivery', image: 'assets/images/EMBALAGEM PARA DELIVERY.png' },
    { id: 'convites', name: 'Convites', image: 'assets/images/CONVITES.png' },
    { id: 'cartaz', name: 'Cartaz', image: 'assets/images/CARTAZ.png' },
    { id: 'panfletos', name: 'Panfletos', image: 'assets/images/PANFLETOS.png' },
    { id: 'cardapios', name: 'Cardápios', image: 'assets/images/CARDÁPIOS.png' },
    { id: 'ingressos', name: 'Ingressos de Entrada', image: 'assets/images/INGRESSOS.png' },
    { id: 'rifas', name: 'Rifas Numeradas', image: 'assets/images/RIFAS.png' },
    { id: 'raspadinha', name: 'Raspadinhas', image: 'assets/images/RASPADINHA.png' },
    { id: 'forro_bandeja', name: 'Forro de Bandeja', image: 'assets/images/FORRO DE BANDEJA.png' }
];

const productListContainer = document.getElementById('kit-product-list');
const kitSummaryList = document.getElementById('kit-summary-list');
const kitEmptyMessage = document.getElementById('kit-empty-message');
const requestQuoteButton = document.getElementById('request-kit-quote');

let kitItems = {};

function renderProducts() {
    if (!productListContainer) return;
    productListContainer.innerHTML = '';
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-md';
        productEl.innerHTML = `
            <div class="flex items-center w-full sm:w-auto">
                <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
                <span class="font-semibold text-gray-700 flex-grow">${product.name}</span>
            </div>
            <div class="flex flex-col items-stretch gap-2 w-full sm:w-auto">
                <div class="flex items-center justify-center gap-2">
                    <button class="qty-btn bg-gray-200 text-gray-800 py-1 px-2 text-sm rounded-lg hover:bg-gray-300 transition-colors" data-product-id="${product.id}" data-amount="10">+10</button>
                    <button class="qty-btn bg-gray-200 text-gray-800 py-1 px-2 text-sm rounded-lg hover:bg-gray-300 transition-colors" data-product-id="${product.id}" data-amount="50">+50</button>
                    <button class="qty-btn bg-gray-200 text-gray-800 py-1 px-2 text-sm rounded-lg hover:bg-gray-300 transition-colors" data-product-id="${product.id}" data-amount="100">+100</button>
                    <button class="qty-btn bg-gray-200 text-gray-800 py-1 px-2 text-sm rounded-lg hover:bg-gray-300 transition-colors" data-product-id="${product.id}" data-amount="500">+500</button>
                </div>
                <div class="flex items-center gap-2">
                    <input type="number" id="qty-${product.id}" min="1" class="w-full text-center border-gray-300 rounded-lg focus:ring-junino-orange focus:border-junino-orange" placeholder="Qtd">
                    <button data-product-id="${product.id}" class="add-to-kit-btn bg-junino-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-junino-red transition-colors">Adicionar</button>
                </div>
            </div>
        `;
        productListContainer.appendChild(productEl);
    });
}

function updateKitSummary() {
    if (!kitSummaryList) return;
    kitSummaryList.innerHTML = '';
    const items = Object.values(kitItems);

    if (items.length === 0) {
        kitSummaryList.appendChild(kitEmptyMessage);
        kitEmptyMessage.style.display = 'block';
        requestQuoteButton.disabled = true;
    } else {
        kitEmptyMessage.style.display = 'none';
        items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'flex justify-between items-center bg-gray-100 p-2 rounded-lg';
            itemEl.innerHTML = `
                <span class="text-gray-800">${item.name}</span>
                <span class="font-bold text-gray-900">Qtd: ${item.quantity}</span>
            `;
            kitSummaryList.appendChild(itemEl);
        });
        requestQuoteButton.disabled = false;
    }
}

if (productListContainer) {
    productListContainer.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('add-to-kit-btn')) {
            const productId = target.dataset.productId;
            const product = products.find(p => p.id === productId);
            const quantityInput = document.getElementById(`qty-${productId}`);
            const quantity = parseInt(quantityInput.value, 10);

            if (product && quantity > 0) {
                kitItems[productId] = { name: product.name, quantity: quantity };
                updateKitSummary();
                quantityInput.value = ''; // Limpa o campo
                showNotification(`✅ ${product.name} adicionado à cesta!`, 'success');
            } else {
                showNotification('Por favor, insira uma quantidade válida.', 'error');
            }
        }

        if (target.classList.contains('qty-btn')) {
            const productId = target.dataset.productId;
            const amount = parseInt(target.dataset.amount, 10);
            const quantityInput = document.getElementById(`qty-${productId}`);
            const currentQuantity = parseInt(quantityInput.value, 10) || 0;
            quantityInput.value = currentQuantity + amount;
        }
    });
}

if (requestQuoteButton) {
    requestQuoteButton.addEventListener('click', function() {
        const kitSummaryText = Object.values(kitItems).map(item => `- ${item.name} (Quantidade: ${item.quantity})`).join('\n');
        const fullMessage = `Olá! Gostaria de um orçamento para o seguinte kit de festa junina:\n\n${kitSummaryText}`;

        // Espera um pouco para o caso do formulário RD ainda não ter carregado completamente
        setTimeout(() => {
            const rdFormMessageField = document.querySelector('#formulario-zap-arraia-51f62e0f9cd3842dfbfc textarea');
            if (rdFormMessageField) {
                rdFormMessageField.value = fullMessage;
                showNotification('Seu kit foi adicionado à mensagem do formulário!', 'success');
            } else {
                // Fallback se o campo não for encontrado
                navigator.clipboard.writeText(fullMessage);
                showNotification('Seu kit foi copiado. Cole no campo de mensagem!', 'info');
            }
            scrollToForm();
        }, 300);
    });
}

// ========== NOTIFICAÇÕES ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : (type === 'error' ? 'bg-red-500' : 'bg-blue-500');
    notification.className = `fixed bottom-5 right-5 text-white px-6 py-3 rounded-lg shadow-xl text-lg ${bgColor} transform translate-y-20 opacity-0 transition-all duration-500`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animação de entrada
    setTimeout(() => {
        notification.classList.remove('translate-y-20', 'opacity-0');
    }, 10);

    // Animação de saída
    setTimeout(() => {
        notification.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Inicializa a lista de produtos do kit
renderProducts();
updateKitSummary();

/* Service Worker - Comentado para evitar erros no console local 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
*/