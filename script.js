// Import centralized content
import {
    personalInfo,
    about,
    experience,
    projects,
    skills,
    education,
    contact
} from './data.js';

// ===================================
// Content Population
// ===================================
function populateContent() {
    // Hero section
    document.querySelector('.hero-title').textContent = personalInfo.name;
    document.querySelector('.hero-subtitle').textContent = personalInfo.role;
    document.querySelector('.hero-description').textContent = personalInfo.tagline;
    
    // About section
    const aboutContent = document.querySelector('#about .section-content');
    aboutContent.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    
    // Metrics
    const metricsGrid = document.querySelector('.metrics-grid');
    metricsGrid.innerHTML = about.metrics.map(metric => `
        <div class="metric-card">
            <div class="metric-number">${metric.number}</div>
            <div class="metric-label">${metric.label}</div>
            <div class="metric-detail">${metric.detail}</div>
        </div>
    `).join('');
    
    // Experience (renamed from work)
    const experienceContent = document.querySelector('#experience .section-content');
    experienceContent.innerHTML = experience.map(job => `
        <div class="work-item">
            <div class="work-header">
                <h3 class="work-title">${job.title}</h3>
                <span class="work-company">${job.company}</span>
                <span class="work-date">${job.dates}</span>
            </div>
            <ul class="work-details">
                ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    
    // Projects
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" class="project-link">View on GitHub →</a>
        </div>
    `).join('');
    
    // Skills
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = skills.categories.map(category => `
        <div class="skill-category">
            <h3>${category.name}</h3>
            <p>${category.items}</p>
        </div>
    `).join('');
    
    // Resume section
    const resumeContent = document.querySelector('#resume .section-content');
    if (personalInfo.social.resume) {
        resumeContent.innerHTML = `
            <p class="resume-intro">
                Download my complete resume for detailed information about my experience, skills, and education.
            </p>
            <div class="resume-actions">
                <a href="${personalInfo.social.resume}" target="_blank" class="resume-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Resume
                </a>
            </div>
        `;
    }
    
    // Contact
    const contactContent = document.querySelector('#contact .section-content');
    contactContent.innerHTML = `
        <p class="contact-intro">${contact.intro}</p>
        <div class="contact-links">
            <a href="mailto:${personalInfo.email}" class="contact-link">Email</a>
            <a href="${personalInfo.social.linkedin}" target="_blank" class="contact-link">LinkedIn</a>
            <a href="${personalInfo.social.github}" target="_blank" class="contact-link">GitHub</a>
        </div>
    `;
}

// ===================================
// Dark Mode Toggle (Floating Button)
// ===================================
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.classList.add('dark');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        if (root.hasAttribute('data-theme')) {
            root.removeAttribute('data-theme');
            themeToggle.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
            themeToggle.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===================================
// Animated Flower/Particle Background
// (Existing code - keeping as is)
// ===================================

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = this.getRandomColor();
    }

    getRandomColor() {
        const colors = [
            'rgba(217, 190, 209, 0.6)',
            'rgba(255, 182, 193, 0.5)',
            'rgba(255, 192, 203, 0.4)',
            'rgba(200, 162, 200, 0.5)',
            'rgba(230, 190, 220, 0.4)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class FlowerEffect {
    constructor() {
        this.canvas = document.getElementById('flowerCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.numberOfParticles = 100;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    connectParticles() {
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a + 1; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const opacity = 1 - (distance / 100);
                    this.ctx.strokeStyle = `rgba(217, 190, 209, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    handleMouseInteraction() {
        if (this.mouse.x == null || this.mouse.y == null) return;

        this.particles.forEach(particle => {
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouse.radius) {
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                const directionX = dx / distance;
                const directionY = dy / distance;
                
                particle.x -= directionX * force * 2;
                particle.y -= directionY * force * 2;
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });

        this.connectParticles();
        this.handleMouseInteraction();

        requestAnimationFrame(() => this.animate());
    }
}

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Initialize on Load
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    populateContent();
    initDarkMode();
    initMobileMenu();
    new FlowerEffect();
});
