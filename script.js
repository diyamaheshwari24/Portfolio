// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
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

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(24, 26, 27, 0.98)';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(24, 26, 27, 0.95)';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        }
    });
}

// Active Navigation Link
function initActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        });
    }
}

// Typing Effect (optional, can be removed if not needed)
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Parallax background effect
function parallaxBackground() {
    const scrollY = window.scrollY;
    const shape = document.querySelector('.bg-3d-shape');
    const img = document.querySelector('.bg-image-bg');
    const blob1 = document.querySelector('.bg-3d-blob1');
    const blob2 = document.querySelector('.bg-3d-blob2');
    if (shape) shape.style.transform = `translateY(${scrollY * 0.12}px)`;
    if (img) img.style.transform = `translateY(${scrollY * 0.08}px)`;
    if (blob1) blob1.style.transform = `translateY(${scrollY * 0.18}px)`;
    if (blob2) blob2.style.transform = `translateY(${scrollY * 0.22}px)`;
}
window.addEventListener('scroll', () => {
    window.requestAnimationFrame(parallaxBackground);
});

// Spotlight follows mouse
function updateSpotlight(e) {
    const spotlight = document.querySelector('.bg-spotlight');
    if (spotlight) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        spotlight.style.setProperty('--x', `${x}%`);
        spotlight.style.setProperty('--y', `${y}%`);
    }
}
document.addEventListener('mousemove', updateSpotlight);

// On DOMContentLoaded, add spotlight div if not present
if (!document.querySelector('.bg-spotlight')) {
    const spot = document.createElement('div');
    spot.className = 'bg-spotlight';
    document.body.appendChild(spot);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initMobileNav();
    initScrollAnimations();
    initNavbarScroll();
    initActiveNavLink();
    initContactForm();
    initTypingEffect();
}); 