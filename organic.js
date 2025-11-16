// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
gsap.to('.header', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top -100',
        end: 'top -200',
        scrub: true
    },
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
});

// Hero Section Animation
gsap.from('.hero-title', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
});

gsap.from('.hero-subtitle', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power4.out'
});

gsap.from('.hero-description', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power4.out'
});

gsap.from('.hero-buttons', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power4.out'
});

gsap.from('.hero-shape', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        toggleActions: 'play none none none'
    },
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: 'back.out(1.7)'
});

// Features Section Animation
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// About Section Animation
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none none'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.utils.toArray('.about-feature-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Products Section Animation
gsap.from('.section-header', {
    scrollTrigger: {
        trigger: '.products',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.utils.toArray('.product-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Stats Section Animation
gsap.utils.toArray('.stat-item').forEach((stat, index) => {
    const statNumber = stat.querySelector('.stat-number');
    const targetValue = statNumber.getAttribute('data-target');
    
    gsap.from(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.7)',
        onComplete: () => {
            // Animate counting
            gsap.to(statNumber, {
                innerText: targetValue,
                duration: 2,
                snap: { innerText: 0.1 },
                ease: 'power2.out',
                onUpdate: function() {
                    const currentValue = parseFloat(this.targets()[0].innerText);
                    if (currentValue % 1 !== 0) {
                        statNumber.innerText = currentValue.toFixed(1);
                    } else {
                        statNumber.innerText = Math.floor(currentValue);
                    }
                }
            });
        }
    });
});

// Testimonials Section Animation
gsap.from('.testimonials .section-header', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out'
    });
});

// Contact Section Animation
gsap.from('.contact .section-header', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.utils.toArray('.contact-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Footer Animation
gsap.from('.footer-grid', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Parallax effect for hero shape
gsap.to('.hero-shape', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    scale: 1.2,
    rotation: 10
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
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

// Form submission (prevent default)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});

