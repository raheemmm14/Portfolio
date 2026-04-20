/* ==========================================================================
   RESUME DATA
   ========================================================================== */
const skillsData = [
    {
        category: "Programming Languages",
        icon: "⚡",
        skills: ["HTML5", "CSS3", "JavaScript", "Python", "Dart"]
    },
    {
        category: "Databases",
        icon: "💾",
        skills: ["MySQL", "Oracle", "SQLite"]
    },
    {
        category: "Tools & Frameworks",
        icon: "🛠",
        skills: ["GitHub", "Figma", "VS Code", "Firebase", "TensorFlow", "Streamlit"]
    },
    {
        category: "Core Competencies",
        icon: "🧠",
        skills: ["Quality Assurance", "Content Moderation", "SLA", "RCA", "Error Detection", "RESTful & SOAP APIs"]
    }
];

const experienceData = [
    {
        role: "Business Development Associate & Quality Assurance",
        company: "Syncpedia Technologies",
        year: "2023 - Present",
        bullets: [
            "Developed and maintained client relationships while ensuring service quality met business standards.",
            "Collected and analyzed market data to identify business opportunities and support strategic decisions.",
            "Monitored business processes and flagged discrepancies to maintain operational accuracy.",
            "Collaborated with cross-functional teams to streamline workflows and uphold delivery standards.",
            "Reviewed content and business data to ensure consistency and compliance with company guidelines."
        ]
    }
];

const educationData = [
    {
        degree: "Bachelor of Technology",
        institution: "B V Raju Institute of Technology",
        year: "2022 - 2026"
    },
    {
        degree: "Intermediate",
        institution: "Narayana Junior College",
        year: "2020 - 2022"
    },
    {
        degree: "Secondary Education",
        institution: "St. Andrews School",
        year: "2020"
    }
];

const projectsData = [
    {
        id: 1,
        title: 'Smart Kart App',
        description: 'Developed a mobile shopping application to streamline the checkout process at supermarkets and malls, allowing users to scan and bill products directly. Reduced customer wait times and improved shopping efficiency.',
        tags: ['Git', 'Figma', 'Firebase', 'HTML', 'CSS', 'Java'],
        image: 'images/smartkart.png',
    },
    {
        id: 2,
        title: 'Cut-Phase Nutrition Planner',
        description: 'AI-driven fitness and meal planner integrating the Gemini API to custom-tailor rigorous nutritional blueprints. Features safe Razorpay/UPI integration and an interactive Streamlit dashboard.',
        tags: ['Python', 'Streamlit', 'Gemini AI', 'SQLite', 'Razorpay'],
        image: 'images/nutrition.png',
    },
    {
        id: 3,
        title: 'Health AI Assistant',
        description: 'A life-saving diagnostic aide evaluating medical reports, risk assessments for surgery, and suggesting targeted lifestyle advice using advanced LLMs.',
        tags: ['Python', 'Streamlit', 'Gemini AI', 'Medical Data'],
        image: 'images/health.png',
    },
    {
        id: 4,
        title: 'Credit/Debit Card Fraud Detection',
        description: 'Created a fraud detection system to identify and prevent online payment frauds. Implemented real-time transaction monitoring with anomaly detection alerts and developed machine learning models to identify suspicious patterns.',
        tags: ['Python', 'Machine Learning', 'SQL', 'Flask', 'Pandas', 'TensorFlow'],
        image: 'images/fraud.png',
    },
    {
        id: 5,
        title: 'AI-Powered Test Case Generator',
        description: 'Developed an AI tool utilizing Streamlit and the Gemini API that converts uploaded feature requirement documents into comprehensive, downloadable CSV files containing positive, negative, and edge-case testing scenarios.',
        tags: ['Python', 'Streamlit', 'Gemini AI', 'Data Engineering'],
        image: 'images/test-case-generator.png',
    },
    {
        id: 6,
        title: 'Study With Me App',
        description: 'Created a focus application built with advanced authentication workflows including OTP (One-Time Password) generation, local terminal logging for OTP verification, and functional SQLite user state management.',
        tags: ['Python', 'SQLite', 'Authentication', 'Full-Stack'],
        image: 'images/study-with-me.png',
    }
];

/* ==========================================================================
   DOM INITIALIZATION & RENDER FUNCTIONS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Render Skills
    const skillsContainer = document.getElementById('skills-grid');
    if (skillsContainer) {
        skillsData.forEach(cat => {
            const box = document.createElement('div');
            box.className = 'skill-card';

            const tagsHtml = cat.skills.map(s => `<span class="tech-tag">${s}</span>`).join('');

            box.innerHTML = `
          <div class="skill-card-icon">${cat.icon}</div>
          <h3 class="skill-category-title">${cat.category}</h3>
          <div class="skill-tags">${tagsHtml}</div>
        `;
            skillsContainer.appendChild(box);
        });
    }

    // 4. Render Experience
    const expContainer = document.getElementById('experience-timeline');
    if (expContainer) {
        experienceData.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');

            item.innerHTML = `
          <div class="timeline-meta">${exp.year}</div>
          <h3 class="timeline-title">${exp.role}</h3>
          <h4 class="timeline-subtitle">${exp.company}</h4>
          <ul class="timeline-details">${bulletsHtml}</ul>
        `;
            expContainer.appendChild(item);
        });
    }

    // 5. Render Education
    const eduContainer = document.getElementById('education-timeline');
    if (eduContainer) {
        educationData.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            item.innerHTML = `
          <div class="timeline-meta">${edu.year}</div>
          <h3 class="timeline-title">${edu.degree}</h3>
          <h4 class="timeline-subtitle">${edu.institution}</h4>
        `;
            eduContainer.appendChild(item);
        });
    }

    // 6. Render Projects
    const projectsContainer = document.getElementById('projects-grid');
    if (projectsContainer) {
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const tagsHtml = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

            card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'220\\'><rect width=\\'400\\' height=\\'220\\' fill=\\'%23111\\'/><text x=\\'50%\\' y=\\'50%\\' font-family=\\'Arial\\' font-size=\\'18\\' fill=\\'%23a0a0a5\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'>Image Not Found</text></svg>'"/>
            <div class="card-img-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <div class="skill-tags" style="margin-bottom: 15px;">${tagsHtml}</div>
            <p class="card-desc">${project.description}</p>
            <div>
              <a href="#" class="card-link" onclick="event.preventDefault(); alert('Accessing Project Protocol: ${project.title}')">View Project Overview &rarr;</a>
            </div>
          </div>
        `;
            projectsContainer.appendChild(card);
        });
    }

    // 7. Hero Typing Effect
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const texts = ["Web Developer", "Full-Stack Engineer", "Data Enthusiast", "UI/UX Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                textElement.innerText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.innerText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before start typing new word
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect after a small delay
        setTimeout(type, 1500);
    }

    // 8. Intersection Observer for Fade-In Effects
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: to animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Dynamically set current year in footer
    document.getElementById('current-year').innerText = new Date().getFullYear();
});
