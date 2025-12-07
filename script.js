// Import centralized content
import {
    personalInfo,
    about,
    experience,
    projects,
    skills,
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
                <span class="work-meta">${job.location} • ${job.type}</span>
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
            <a href="${project.link}" target="_blank" class="project-link">${project.linkText}</a>
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
// Elegant Data Flow Waves
// Smooth sine waves representing data streams & metrics
// ===================================

class DataWave {
    constructor(canvas, index, total) {
        this.canvas = canvas;
        this.index = index;
        this.total = total;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.002 + Math.random() * 0.002;
        this.amplitude = 50 + Math.random() * 100;
        this.yOffset = canvas.height / 2;
    }

    draw(ctx, time, isDark, mouse) {
        const opacity = isDark ? 0.15 : 0.1;
        const color = isDark 
            ? `hsla(${260 + this.index * 10}, 70%, 70%, ${opacity})` // Light purple/pink
            : `hsla(${260 + this.index * 10}, 60%, 50%, ${opacity})`; // Darker purple

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        const points = [];
        for (let x = 0; x <= this.canvas.width; x += 50) {
            let y = this.yOffset + 
                Math.sin(x * 0.003 + this.phase + time * this.speed) * this.amplitude +
                Math.sin(x * 0.01 + time * this.speed * 2) * (this.amplitude * 0.2);

            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = x - mouse.x;
                const dy = y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 400; // Increased radius

                if (dist < interactionRadius) {
                    const force = (interactionRadius - dist) / interactionRadius;
                    // Waves "avoid" the mouse or get excited by it - much stronger effect now
                    y += Math.sin(dist * 0.05 - time * 0.1) * force * 150; // Increased intensity (50 -> 150)
                }
            }

            points.push({x, y});
        }

        // Smooth curve through points
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        // Connect to last point
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        
        ctx.stroke();
    }
}

class DataFlowWaves {
    constructor() {
        this.canvas = document.getElementById('flowerCanvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.waves = [];
        this.mouse = { x: null, y: null };
        
        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.resizeCanvas();
        this.createWaves();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createWaves() {
        this.waves = [];
        const waveCount = 5;
        for (let i = 0; i < waveCount; i++) {
            this.waves.push(new DataWave(this.canvas, i, waveCount));
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createWaves();
        });

        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        this.time = (this.time || 0) + 1;
        const isDark = document.documentElement.hasAttribute('data-theme');

        // Clear canvas
        this.ctx.fillStyle = isDark ? '#0a0a0a' : '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw waves
        this.waves.forEach(wave => {
            wave.draw(this.ctx, this.time, isDark, this.mouse);
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Alias for initialization
class FlowerEffect extends DataFlowWaves {}

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
