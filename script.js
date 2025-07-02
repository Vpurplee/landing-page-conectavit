// Formulário de inscrição
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const instagram = document.getElementById('instagram').value;
    
    // Validação básica
    if (!name || !email || !instagram) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Validação do Instagram (deve começar com @)
    if (!instagram.startsWith('@')) {
        document.getElementById('instagram').value = '@' + instagram;
    }

    // Mensagem para o WhatsApp
    const mensagem = `Olá! Quero receber uma proposta personalizada.%0A
    Nome: ${name}%0A
    E-mail: ${email}%0A
    Instagram: ${instagram}`;
    
    // Número do WhatsApp (substitua pelo seu)
    const numero = '555192542155'; // <-- coloque seu número com DDI/DDD aqui
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;
    
    // Redireciona para o WhatsApp
    window.open(linkWhatsApp, '_blank');

    // Alerta
    alert('🎉 Proposta solicitada com sucesso! Você será redirecionado para o WhatsApp.');

    // Limpar formulário
    document.getElementById('signupForm').reset();

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navegação suave
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fixa
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scroll para CTAs
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('PROPOSTA') && !this.closest('form')) {
            e.preventDefault();
            document.querySelector('.signup-form').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar transparente no scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Animações de entrada
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-card, .explanation-content, .final-cta-content, .hero-stats');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Configurar animações iniciais
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.benefit-card, .explanation-content, .final-cta-content, .hero-stats');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// Executar animações no scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Efeito de partículas
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remover partícula após animação
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
    
    // Criar partículas periodicamente
    setInterval(createParticle, 1200);
}

// Movimento dinâmico dos ícones flutuantes
function enhanceFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        // Movimento aleatório adicional
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
        
        // Rotação suave
        let rotation = 0;
        setInterval(() => {
            rotation += 0.5;
            icon.style.transform += ` rotate(${rotation}deg)`;
        }, 100);
    });
}

// Efeito de hover nos cards de benefícios
function addBenefitCardEffects() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax suave para elementos
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + index * 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Efeito de clique
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: #8cff2d;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: ripple 0.6s ease-out;
        left: ${e.clientX - 5}px;
        top: ${e.clientY - 5}px;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Inicializar todos os efeitos
window.addEventListener('load', function() {
    createParticles();
    enhanceFloatingIcons();
    addBenefitCardEffects();
    addParallaxEffect();
});

// Adicionar CSS para animação de ripple e menu mobile
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(20);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.95);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 20px 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);

