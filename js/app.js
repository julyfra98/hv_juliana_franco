/* ==================================================
   JULIANA FRANCO VILLEGAS
   PORTFOLIO PREMIUM
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TYPEWRITER
    ========================================== */

    const heroBadge = document.getElementById("hero-badge");
    const heroDescription = document.getElementById("hero-description");
    const typedText = document.getElementById("typed-text");

    const translations = {
        es: {
            badge: "IA • EDUCACIÓN • TECNOLOGÍA",
            description: "Ingeniera de Sistemas y Computación, Docente Universitaria, Mentora Tecnológica, Instructora SENA y Líder en Transformación Digital Educativa.",
            typed: [
                "Especialista en Inteligencia Artificial",
                "Docente Universitaria",
                "Mentora Talento Tech",
                "Instructora SENA",
                "Desarrolladora Full Stack",
                "Transformación Digital",
                "Líder en Innovación Educativa"
            ]
        },
        en: {
            badge: "AI • EDUCATION • TECHNOLOGY",
            description: "Systems and Computer Engineer, University Professor, Technology Mentor, SENA Instructor and Leader in Digital Educational Transformation.",
            typed: [
                "Artificial Intelligence Specialist",
                "University Professor",
                "Technology Mentor",
                "SENA Instructor",
                "Full Stack Developer",
                "Digital Transformation",
                "Educational Innovation Leader"
            ]
        }
    };

    let typedInstance = null;

    const initTyped = (lang) => {

        if(!typedText) return;

        if(typedInstance){
            typedInstance.destroy();
            typedInstance = null;
        }

        typedInstance = new Typed("#typed-text", {
            strings: translations[lang].typed,
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1800,
            loop: true
        });

    };

    const applyHeroLanguage = (lang) => {

        const current = translations[lang];

        if(heroBadge){
            heroBadge.textContent = current.badge;
        }

        if(heroDescription){
            heroDescription.textContent = current.description;
        }

        initTyped(lang);

    };

    applyHeroLanguage("es");

    /* ==========================================
       COUNTERS
    ========================================== */

    const counters = document.querySelectorAll('.counter');

    const animateCounter = (counter) => {

        const target = parseInt(counter.innerText);

        let current = 0;

        const increment = target / 100;

        const update = () => {

            if(current < target){

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        }

        update();

    }

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    animateCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================================
       REVEAL ON SCROLL
    ========================================== */

    const revealElements = document.querySelectorAll(

        '.dashboard-card,' +
        '.about-left,' +
        '.about-right,' +
        '.achievement-card,' +
        '.specialty-card,' +
        '.project-card,' +
        '.cert-card,' +
        '.timeline-item'

    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(60px)";

    });

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    entry.target.style.transition =
                        "all .8s ease";

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(el => {

        revealObserver.observe(el);

    });

    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            navbar.style.background =
                "rgba(5,8,22,.95)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.3)";

        }else{

            navbar.style.background =
                "rgba(5,8,22,.85)";

            navbar.style.boxShadow = "none";

        }

    });

    /* ==========================================
       PHOTO PARALLAX
    ========================================== */

    const photo = document.querySelector(".hero-image img");

    if(photo){

        document.addEventListener("mousemove", (e)=>{

            let x =
                (window.innerWidth/2 - e.pageX)/40;

            let y =
                (window.innerHeight/2 - e.pageY)/40;

            photo.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

    /* ==========================================
       3D CARDS
    ========================================== */

    const cards = document.querySelectorAll(

        '.specialty-card,' +
        '.achievement-card,' +
        '.project-card'

    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                -(y - rect.height/2) / 15;

            const rotateY =
                (x - rect.width/2) / 15;

            card.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =

                `perspective(1000px)
                 rotateX(0deg)
                 rotateY(0deg)
                 translateY(0px)`;

        });

    });

    /* ==========================================
       LANGUAGE SWITCHER
    ========================================== */

    const btnES =
        document.getElementById("btn-es");

    const btnEN =
        document.getElementById("btn-en");

    const translationsContent = {
        es: {
            'nav.home': 'Inicio',
            'nav.about': 'Perfil',
            'nav.timeline': 'Trayectoria',
            'nav.achievements': 'Logros',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'dashboard.experience': 'Años de Experiencia',
            'dashboard.students': 'Estudiantes Formados',
            'dashboard.projects': 'Proyectos Educativos',
            'dashboard.technologies': 'Tecnologías Dominadas',
            'sections.about': 'Sobre Mí',
            'about.spanishTitle': 'Español',
            'about.leftP1': 'Ingeniera de Sistemas y Computación con más de 20 años de experiencia en desarrollo de software, educación e implementación de soluciones tecnológicas para la mejora de procesos. Candidata a Magíster en Inteligencia Artificial y Ciencia de Datos, con experiencia en análisis, diseño y desarrollo de aplicaciones, gestión de proyectos tecnológicos, formación académica y uso de herramientas digitales para fortalecer los procesos de enseñanza y aprendizaje.',
            'about.leftP2': 'Me caracterizo por ser una profesional ética, responsable, proactiva y orientada a resultados, con capacidad para trabajar en equipo, adaptarme a nuevos desafíos y aportar soluciones innovadoras que generen valor tanto en organizaciones del sector tecnológico como educativo.',
            'about.englishTitle': 'English',
            'about.rightP1': 'Systems and Computer Engineer with over 20 years of experience in software development, education, and the implementation of technology solutions to improve organizational processes. Master\'s candidate in Artificial Intelligence and Data Science, with experience in systems analysis, application design and development, technology project management, academic instruction, and the integration of digital tools to enhance teaching and learning processes.',
            'about.rightP2': 'I am recognized as an ethical, responsible, and proactive professional with a results-oriented mindset. I have strong teamwork, adaptability, and problem-solving skills, enabling me to contribute innovative solutions that create value for organizations in both the technology and education sectors.',
            'sections.institutions': 'Instituciones',
            'sections.timeline': 'Trayectoria Profesional',
            'timeline.1.title': 'Mentora Talento Tech Valle',
            'timeline.1.items': '<li>Mentoría y acompañamiento a jóvenes en el desarrollo de habilidades tecnológicas y competencias digitales.</li><li>Participación en la planificación y ejecución de talleres, charlas y actividades de formación tecnológica.</li>',
            'timeline.2.title': 'Universidad Tecnológica de Pereira',
            'timeline.2.items': '<li>Docente de cátedra de bases de datos en el programa de tecnología en desarrollo de software.</li>',
            'timeline.3.title': 'Servicio Nacional de Aprendizaje - SENA',
            'timeline.3.items': '<li>Diseño, desarrollo y ejecución de programas de formación técnica en el área de desarrollo de software.</li>',
            'timeline.4.title': 'CIAF',
            'timeline.4.items': '<li>Organización de sesiones de aprendizaje, clases, seminarios, talleres y/o prácticas de laboratorio y de campo y virtuales.</li><li>Participación en el diseño, desarrollo y elaboración de registros calificados de los programas técnico en programación de Software y en desarrollo de aplicaciones móviles, este últimoen ampliación de cobertura en Santuario y Santa Rosa.</li>',
            'timeline.5.title': 'Ambientes Virtuales.',
            'timeline.5.role': 'Analista de Software',
            'timeline.5.items': '<li>Levantamiento de requerimientos a los clientes</li><li>Análisis e implementación de Software en lenguajes de programación para web.</li><li>Diseño y desarrollo de bases de datos en el motor MySQL</li>',
            'sections.achievements': 'Reconocimientos',
            'achievements.fedesoft.title': 'Finalista Nacional Fedesoft',
            'achievements.fedesoft.text': 'Proyecto GreenScanner desarrollado con estudiantes de la Institución Educativa Centenario.',
            'achievements.hackathon.title': 'Jurado Hackathon',
            'achievements.hackathon.text': 'Computadores para Educar 2024.',
            'achievements.mentor.title': 'Mentora Talento Tech',
            'achievements.mentor.text': 'Programa Talento Tech Valle.',
            'achievements.men.title': 'Par Académico MEN',
            'achievements.men.text': 'Ministerio de Educación Nacional.',
            'achievements.quality.title': 'Gestora de Calidad',
            'achievements.quality.text': 'Secretarías de Educación de Pereira y Chocó.',
            'achievements.speaker.title': 'Ponente Académica',
            'achievements.speaker.text': 'Herramientas Tecnológicas como Soporte para la Educación.',
            'sections.specialties': 'Especialidades',
            'specialties.ai': 'Inteligencia Artificial',
            'specialties.education': 'Innovación Educativa y transformación digital',
            'specialties.fullstack': 'Desarrollo Full Stack',
            'specialties.database': 'Bases de Datos',
            'sections.projects': 'Proyectos Destacados',
            'projects.green.badge': '<i class="fas fa-seedling"></i> IA + Educación',
            'projects.green.title': 'GreenScanner',
            'projects.green.text': 'Proyecto finalista nacional Fedesoft con enfoque en sostenibilidad y tecnología educativa.',
            'projects.avanza.badge': '<i class="fas fa-mobile-alt"></i> Social',
            'projects.avanza.title': 'Avanza Sin Drogas',
            'projects.avanza.text': 'Aplicativo móvil desarrollado para acompañar procesos de prevención y bienestar social.',
            'projects.claseweb.badge': '<i class="fas fa-graduation-cap"></i> Educación',
            'projects.claseweb.title': 'ClaseWeb',
            'projects.claseweb.text': 'Primer colegio virtual y plataforma educativa orientada a la formación continua.',
            'projects.talento.badge': '<i class="fas fa-rocket"></i> Talento',
            'projects.talento.title': 'Talento Tech',
            'projects.talento.text': 'Mentoría y formación tecnológica para jóvenes que inician su camino en desarrollo.',
            'sections.certifications': 'Certificaciones',
            'certifications.hybrid': 'Diplomado Estrategias Híbridas',
            'certifications.php': 'Diplomado PHP',
            'certifications.didactics': 'Diseño de Estrategias Didácticas',
            'certifications.projects': 'Estructuración de Proyectos Formativos',
            'certifications.english': 'Inglés A2',
            'sections.video': 'Video Currículum',
            'video.title': 'Video CV',
            'video.description': 'Dale clic para ver mi video currículum y conocer más sobre mi experiencia profesional, habilidades y logros en el ámbito de la inteligencia artificial, educación y transformación digital.',
            'sections.contact': 'Contáctame',
            'contact.cardTitle': 'Hablemos',
            'contact.cardText': '¿Tienes un proyecto, una oportunidad de colaboración o quieres conversar sobre educación, tecnología e innovación?',
            'contact.nameLabel': 'Nombre completo',
            'contact.namePlaceholder': 'Tu nombre',
            'contact.emailLabel': 'Correo electrónico',
            'contact.emailPlaceholder': 'tu@email.com',
            'contact.subjectLabel': 'Asunto',
            'contact.subjectPlaceholder': '¿Qué deseas consultar?',
            'contact.messageLabel': 'Mensaje',
            'contact.messagePlaceholder': 'Escribe tu mensaje aquí...',
            'contact.submit': 'Enviar Mensaje',
            'footer.title': 'Juliana Franco Villegas',
            'footer.description': 'Conectando educación, tecnología e inteligencia artificial para construir el aprendizaje del futuro.',
            'footer.linkedin': 'LinkedIn',
            'footer.github': 'GitHub',
            'footer.youtube': 'YouTube',
            'footer.cv': 'CV',
            'hero.linkedin': 'LinkedIn',
            'hero.github': 'GitHub',
            'hero.youtube': 'YouTube',
            'hero.cv': 'CV'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'Profile',
            'nav.timeline': 'Experience',
            'nav.achievements': 'Achievements',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'dashboard.experience': 'Years of Experience',
            'dashboard.students': 'Students Trained',
            'dashboard.projects': 'Educational Projects',
            'dashboard.technologies': 'Technologies Mastered',
            'sections.about': 'About Me',
            'about.spanishTitle': 'Spanish',
            'about.leftP1': 'Systems and Computer Engineer with over 20 years of experience in software development, education, and the implementation of technology solutions to improve processes. Candidate for a Master\'s degree in Artificial Intelligence and Data Science, with experience in analysis, design, development of applications, technological project management, academic training, and the use of digital tools to strengthen teaching and learning processes.',
            'about.leftP2': 'I am characterized as an ethical, responsible, proactive, and results-oriented professional, with the ability to work in a team, adapt to new challenges, and contribute innovative solutions that generate value for organizations in both the technology and education sectors.',
            'about.englishTitle': 'English',
            'about.rightP1': 'Systems and Computer Engineer with over 20 years of experience in software development, education, and the implementation of technology solutions to improve organizational processes. Master\'s candidate in Artificial Intelligence and Data Science, with experience in systems analysis, application design and development, technology project management, academic instruction, and the integration of digital tools to enhance teaching and learning processes.',
            'about.rightP2': 'I am recognized as an ethical, responsible, and proactive professional with a results-oriented mindset. I have strong teamwork, adaptability, and problem-solving skills, enabling me to contribute innovative solutions that create value for organizations in both the technology and education sectors.',
            'sections.institutions': 'Institutions',
            'sections.timeline': 'Professional Experience',
            'timeline.1.title': 'Talento Tech Valle Mentor',
            'timeline.1.items': '<li>Mentoring and support for young people in the development of technological skills and digital competencies.</li><li>Participation in the planning and execution of workshops, talks, and activities for technological training.</li>',
            'timeline.2.title': 'Universidad Tecnológica de Pereira',
            'timeline.2.items': '<li>Lecturer in database courses in the software development technology program.</li>',
            'timeline.3.title': 'Servicio Nacional de Aprendizaje - SENA',
            'timeline.3.items': '<li>Design, development, and execution of technical training programs in the software development area.</li>',
            'timeline.4.title': 'CIAF',
            'timeline.4.items': '<li>Organization of learning sessions, classes, seminars, workshops, and laboratory or field and virtual practices.</li><li>Participation in the design, development, and preparation of qualified records for software programming and mobile application development programs, the latter in coverage expansion in Santuario and Santa Rosa.</li>',
            'timeline.5.title': 'Virtual Environments.',
            'timeline.5.role': 'Software Analyst',
            'timeline.5.items': '<li>Requirements gathering from clients</li><li>Analysis and implementation of software in web programming languages.</li><li>Design and development of databases in MySQL</li>',
            'sections.achievements': 'Recognitions',
            'achievements.fedesoft.title': 'National Fedesoft Finalist',
            'achievements.fedesoft.text': 'GreenScanner project developed with students from Institución Educativa Centenario.',
            'achievements.hackathon.title': 'Hackathon Jury',
            'achievements.hackathon.text': 'Computers for Education 2024.',
            'achievements.mentor.title': 'Talento Tech Mentor',
            'achievements.mentor.text': 'Talento Tech Valle Program.',
            'achievements.men.title': 'MEN Academic Partner',
            'achievements.men.text': 'Ministry of National Education.',
            'achievements.quality.title': 'Quality Manager',
            'achievements.quality.text': 'Education Secretariats of Pereira and Chocó.',
            'achievements.speaker.title': 'Academic Speaker',
            'achievements.speaker.text': 'Technological Tools as Support for Education.',
            'sections.specialties': 'Specialties',
            'specialties.ai': 'Artificial Intelligence',
            'specialties.education': 'Educational Innovation and digital transformation',
            'specialties.fullstack': 'Full Stack Development',
            'specialties.database': 'Databases',
            'sections.projects': 'Featured Projects',
            'projects.green.badge': '<i class="fas fa-seedling"></i> AI + Education',
            'projects.green.title': 'GreenScanner',
            'projects.green.text': 'National Fedesoft finalist project focused on sustainability and educational technology.',
            'projects.avanza.badge': '<i class="fas fa-mobile-alt"></i> Social',
            'projects.avanza.title': 'Avanza Sin Drogas',
            'projects.avanza.text': 'Mobile application developed to support prevention and social well-being processes.',
            'projects.claseweb.badge': '<i class="fas fa-graduation-cap"></i> Education',
            'projects.claseweb.title': 'ClaseWeb',
            'projects.claseweb.text': 'First virtual school and educational platform focused on continuous training.',
            'projects.talento.badge': '<i class="fas fa-rocket"></i> Talent',
            'projects.talento.title': 'Talento Tech',
            'projects.talento.text': 'Technology mentoring and training for young people beginning their path in development.',
            'sections.certifications': 'Certifications',
            'certifications.hybrid': 'Hybrid Strategies Diploma',
            'certifications.php': 'PHP Diploma',
            'certifications.didactics': 'Didactic Strategies Design',
            'certifications.projects': 'Formative Project Structuring',
            'certifications.english': 'English A2',
            'sections.video': 'Video Resume',
            'video.title': 'Video CV',
            'video.description': 'Click to watch my video resume and learn more about my professional experience, skills, and achievements in artificial intelligence, education, and digital transformation.',
            'sections.contact': 'Contact Me',
            'contact.cardTitle': 'Let\'s talk',
            'contact.cardText': 'Do you have a project, a collaboration opportunity, or want to talk about education, technology, and innovation?',
            'contact.nameLabel': 'Full name',
            'contact.namePlaceholder': 'Your name',
            'contact.emailLabel': 'Email',
            'contact.emailPlaceholder': 'you@email.com',
            'contact.subjectLabel': 'Subject',
            'contact.subjectPlaceholder': 'What would you like to discuss?',
            'contact.messageLabel': 'Message',
            'contact.messagePlaceholder': 'Write your message here...',
            'contact.submit': 'Send Message',
            'footer.title': 'Juliana Franco Villegas',
            'footer.description': 'Connecting education, technology, and artificial intelligence to build the learning of the future.',
            'footer.linkedin': 'LinkedIn',
            'footer.github': 'GitHub',
            'footer.youtube': 'YouTube',
            'footer.cv': 'CV',
            'hero.linkedin': 'LinkedIn',
            'hero.github': 'GitHub',
            'hero.youtube': 'YouTube',
            'hero.cv': 'CV'
        }
    };

    const applyTranslations = (lang) => {
        const current = translationsContent[lang];

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if(current[key]){
                if(element.getAttribute('data-i18n-type') === 'html'){
                    element.innerHTML = current[key];
                } else {
                    element.textContent = current[key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.getAttribute('data-i18n-placeholder');
            if(current[key]){
                element.setAttribute('placeholder', current[key]);
            }
        });
    };

    if(btnES && btnEN){

        const setActiveLanguage = (activeButton) => {
            btnES.classList.toggle("active", activeButton === btnES);
            btnEN.classList.toggle("active", activeButton === btnEN);
        };

        btnEN.addEventListener("click", () => {
            applyHeroLanguage("en");
            applyTranslations("en");
            setActiveLanguage(btnEN);
        });

        btnES.addEventListener("click", () => {
            applyHeroLanguage("es");
            applyTranslations("es");
            setActiveLanguage(btnES);
        });

        setActiveLanguage(btnES);
        applyTranslations("es");
    }

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});


/* ==========================================
   PARTICLES.JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 90,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#00D4FF"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.35

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 140,

            color: "#00D4FF",

            opacity: 0.15,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "repulse"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            repulse: {

                distance: 120

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});