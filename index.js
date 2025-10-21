// ===================================
// Navigation Mobile Toggle
// ===================================
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll pour tous les liens d'ancrage
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Animation au scroll (Intersection Observer)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.skill-category, .project-card-modern, .cert-card, .experience-card-modern');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Active Link dans la Navigation
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Gestion des liens externes
// ===================================
const externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(link => {
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// Message de bienvenue dans la console
// ===================================
console.log('%c👋 Bienvenue sur mon portfolio !', 'font-size: 20px; color: #1e40af; font-weight: bold;');
console.log('%cVous êtes curieux ? C\'est une qualité de développeur ! 😊', 'font-size: 14px; color: #64748b;');

// ===================================
// Gestion du redimensionnement de la fenêtre
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }, 250);
});

// ===================================
// Initialisation au chargement de la page
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio chargé avec succès ! 🚀');
    
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    }
    
    highlightNavigation();
});

// ===================================
// SYSTÈME DE FORMULAIRE DE CONTACT
// ===================================

// ⚠️ IMPORTANT : Remplacez par votre vraie adresse email
const YOUR_EMAIL = "mathias.celle42230@gmail.com"; // 👈 MODIFIEZ ICI

// Fonction pour ouvrir le modal de contact
function openContactModal() {
    const modal = document.getElementById('contactModalOverlay');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
    document.getElementById('formMessage').style.display = 'none';
}

// Fonction pour fermer le modal de contact
function closeContactModal() {
    const modal = document.getElementById('contactModalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fonction pour envoyer l'email
function sendEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-submit');
    const messageDiv = document.getElementById('formMessage');
    
    // Récupérer les données du formulaire
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳</span> Envoi en cours...';
    
    // Créer le lien mailto
    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    )}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher un message de succès
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>📤</span> Envoyer le message';
        
        messageDiv.className = 'form-message success';
        messageDiv.innerHTML = '✅ Votre client email va s\'ouvrir. Vous pourrez envoyer le message depuis votre messagerie.';
        messageDiv.style.display = 'block';
        
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
            form.reset();
            messageDiv.style.display = 'none';
        }, 3000);
    }, 1000);
}

// Fermer le modal de contact avec Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

console.log('%c📧 Système de formulaire de contact chargé !', 'color: #10b981; font-weight: bold;');
console.log('%cN\'oubliez pas de remplacer YOUR_EMAIL dans script.js', 'color: #f59e0b; font-weight: bold;');