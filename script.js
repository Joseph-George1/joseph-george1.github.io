// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-category, .project-card, .certificate-card').forEach(el => {
    observer.observe(el);
});

// Fetch GitHub repositories
async function fetchGitHubRepos() {
    const username = 'joseph-george1';
    const githubProjectsContainer = document.getElementById('github-projects');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        // Filter out the portfolio repo itself
        const filteredRepos = repos.filter(repo => !repo.name.includes('github.io'));
        
        // Display only the first 6 repos
        const displayRepos = filteredRepos.slice(0, 6);
        
        displayRepos.forEach(repo => {
            const projectCard = createGitHubProjectCard(repo);
            githubProjectsContainer.insertAdjacentHTML('beforeend', projectCard);
        });
        
        // Re-observe new cards for animations
        document.querySelectorAll('#github-projects .project-card').forEach(el => {
            observer.observe(el);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        githubProjectsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 2rem;">
                <p>Unable to load GitHub repositories. Please visit my <a href="https://github.com/${username}" target="_blank" style="color: var(--accent-primary);">GitHub profile</a> to view my projects.</p>
            </div>
        `;
    }
}

// Create project card from GitHub repo data
function createGitHubProjectCard(repo) {
    const description = repo.description || 'No description available';
    const language = repo.language || 'Code';
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    
    return `
        <div class="project-card">
            <div class="project-header">
                <i class="fab fa-github"></i>
                <h3>${repo.name}</h3>
            </div>
            <p class="project-description">${description}</p>
            <div class="project-tech">
                ${language ? `<span class="tech-tag">${language}</span>` : ''}
                ${stars > 0 ? `<span class="tech-tag">⭐ ${stars}</span>` : ''}
                ${forks > 0 ? `<span class="tech-tag">🔱 ${forks}</span>` : ''}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Repository
                </a>
                ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// Handle certificate and project link clicks for placeholders
document.addEventListener('click', (e) => {
    if (e.target.closest('.certificate-link')) {
        const link = e.target.closest('.certificate-link');
        const certId = link.getAttribute('data-cert');
        
        // Check if it's a placeholder (href="#")
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert(`Certificate placeholder: ${certId}\n\nPlease update the href attribute with your actual certificate URL.`);
        }
    }
    
    if (e.target.closest('.project-link')) {
        const link = e.target.closest('.project-link');
        const repoName = link.getAttribute('data-repo');
        
        // Check if it's a placeholder (href="#")
        if (link.getAttribute('href') === '#' && repoName) {
            e.preventDefault();
            alert(`Project placeholder: ${repoName}\n\nPlease update the href attribute with your actual project URL.`);
        }
    }
});

// Update project links with actual GitHub URLs
function updateProjectLinks() {
    const username = 'joseph-george1';
    const projectLinks = document.querySelectorAll('.project-link[data-repo]');
    
    projectLinks.forEach(link => {
        const repoName = link.getAttribute('data-repo');
        if (link.getAttribute('href') === '#') {
            // Set a placeholder GitHub search URL
            link.setAttribute('href', `https://github.com/${username}?tab=repositories`);
            link.setAttribute('target', '_blank');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubRepos();
    updateProjectLinks();
    
    // Add a small delay for smooth initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Email update reminder
console.log('%c⚠️ Remember to update the email address in the Contact section!', 'color: #64ffda; font-size: 14px; font-weight: bold;');
console.log('%c📝 Also update certificate URLs and LinkedIn profile link!', 'color: #64ffda; font-size: 14px;');
