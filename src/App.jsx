import { useEffect, useState } from 'react'

const content = {
  en: {
    language: 'EN',
    otherLanguage: 'ES',
    nav: { work: 'Selected Work', expertise: 'Expertise', journey: 'Journey', contact: 'Get in touch' },
    hero: {
      availability: 'Available for new projects',
      title: <>Building digital experiences <br /><span className="text-primary">with a smile.</span></>,
      description: "Hi, I'm Giuliano! A full stack developer with a frontend strength and solid backend foundations. I enjoy leading teams, mentoring developers, and turning real problems into well-crafted software.",
      work: 'View My Work',
      hello: 'Say Hello',
    },
    work: {
      title: 'Selected Work',
      intro: 'A collection of software projects focused on practical solutions, maintainable architecture, and intuitive user interfaces.',
      all: 'Explore All My Projects',
      projects: [
        {
          name: 'Gym Tracker',
          type: 'React, Hono & Cloudflare',
          image: '/img/GymTracker.png',
          url: 'https://gym-tracker-frontend.giulianopascarelli.workers.dev/',
          alt: 'Gym Tracker dashboard',
          description: 'A mobile-first web application for managing exercises, workout routines, training sessions, progress, and current personal records. Built with React and Vite, a Hono REST API, Cloudflare Workers, and D1.',
          color: 'bg-primary/10',
        },
        {
          name: 'Study Plan Manager',
          type: 'React & Node.js',
          image: '/img/SPM.png',
          url: 'https://study-plan-manager-frontend-react.vercel.app',
          alt: 'Study Plan Manager',
          description: 'A personal full stack application that helps students organize their study plan and academic schedule. Currently an 80% complete individual project.',
          color: 'bg-gb-orange/10',
        },
        {
          name: "Juliette's Kitchen Timer",
          type: 'React & Vite',
          image: '/img/juliettesKitchenTimer.png',
          url: 'https://julietteskitchentimer.vercel.app/',
          alt: "Juliette's Kitchen Timer",
          description: 'A lightweight PWA based on the Pomodoro technique, with an illustrated aesthetic and an animated pastry-chef cat accompanying each work session.',
          color: 'bg-gb-purple/10',
        },
      ],
    },
    expertise: {
      title: 'Core Expertise',
      intro: "I'm a full stack developer with a strong frontend focus and solid backend foundations. My experience spans React and Next.js, Java and Spring Boot, Node.js, REST APIs, and SQL databases. I enjoy designing systems, solving real problems, and contributing to open source projects that make technology more accessible.",
      cards: [
        ['code', 'Frontend Development', 'React, Next.js, HTML, CSS, SCSS, Material UI, and responsive interfaces.', 'text-primary'],
        ['dns', 'Backend Engineering', 'Java, Spring Boot, Node.js, Express, Hono, REST APIs, and backend architecture.', 'text-gb-purple'],
        ['storage', 'Data & Systems', 'SQL, MySQL, Supabase, MongoDB, data modeling, and system design.', 'text-gb-orange'],
        ['terminal', 'Tools & Methodologies', 'Git, Docker, Cloudflare Workers, Maven, UNIX/Linux, Scrum, and Kanban.', 'text-gb-blue'],
      ],
      strengths: [
        ['hub', 'Open Source Oriented', 'Contributing to community-focused tools through collaborative projects such as SimpleDevsSL.', 'bg-primary'],
        ['groups', 'Technical Leadership', 'Coordinating small teams and mentoring more than 20 junior developers.', 'bg-gb-purple'],
        ['psychology', 'Problem-Driven Development', 'Building simple, reliable, and maintainable software for real-world needs.', 'bg-gb-orange'],
      ],
    },
    journey: {
      title: 'My Professional Journey',
      entries: [
        ['Dec 2025 — Present', 'Backend / Full Stack Developer — SimpleDevsSL', 'An open source, non-profit initiative developing software solutions for real community needs in San Luis, Argentina. I contribute to backend development, architecture, technical planning, frontend, infrastructure, and deployment as needed.'],
        ['Feb 2021 — Apr 2024', 'Full Stack Developer / Team Leader — Aptugo', 'Built full stack web applications with the MERN stack, led a team of up to three developers, trained more than 20 junior developers, and taught programming courses to external clients in an agile Scrum and Kanban environment.'],
        ['Freelance', 'Object-Oriented Programming Tutor', 'Private programming lessons for students and self-taught developers, applying experience gained as a tutor and trainer at Aptugo.'],
      ],
    },
    contact: {
      title: 'Ready to start a conversation?',
      description: "Whether you have a specific project in mind or just want to say hi, I'm always happy to connect and talk shop.",
      cv: 'Download CV',
    },
    footer: "© 2026 Giuliano Pascarelli. Built with passion and clean code.",
  },
  es: {
    language: 'ES',
    otherLanguage: 'EN',
    nav: { work: 'Proyectos', expertise: 'Especialidad', journey: 'Trayectoria', contact: 'Contactarme' },
    hero: {
      availability: 'Disponible para nuevos proyectos',
      title: <>Construyendo experiencias digitales <br /><span className="text-primary">con una sonrisa.</span></>,
      description: '¡Hola, soy Giuliano! Desarrollador Full Stack con especial fortaleza en Frontend y bases sólidas en Backend. Disfruto liderar equipos, capacitar desarrolladores y convertir problemas reales en software bien construido.',
      work: 'Ver mis proyectos',
      hello: 'Saludar',
    },
    work: {
      title: 'Proyectos destacados',
      intro: 'Una colección de proyectos de software enfocados en soluciones prácticas, arquitectura mantenible e interfaces intuitivas.',
      all: 'Explorar todos mis proyectos',
      projects: [
        {
          name: 'Gym Tracker',
          type: 'React, Hono y Cloudflare',
          image: '/img/GymTracker.png',
          url: 'https://gym-tracker-frontend.giulianopascarelli.workers.dev/',
          alt: 'Panel de Gym Tracker',
          description: 'Aplicación web mobile-first para gestionar ejercicios, rutinas, sesiones de entrenamiento, progreso y récords personales actuales. Construida con React y Vite, una API REST con Hono, Cloudflare Workers y D1.',
          color: 'bg-primary/10',
        },
        {
          name: 'Study Plan Manager',
          type: 'React y Node.js',
          image: '/img/SPM.png',
          url: 'https://study-plan-manager-frontend-react.vercel.app',
          alt: 'Study Plan Manager',
          description: 'Aplicación full stack personal para ayudar a estudiantes a organizar su plan de estudios y cronograma académico. Proyecto individual actualmente avanzado en un 80%.',
          color: 'bg-gb-orange/10',
        },
        {
          name: "Juliette's Kitchen Timer",
          type: 'React y Vite',
          image: '/img/juliettesKitchenTimer.png',
          url: 'https://julietteskitchentimer.vercel.app/',
          alt: "Juliette's Kitchen Timer",
          description: 'PWA liviana basada en la técnica Pomodoro, con una estética ilustrada propia y una mascota animada que acompaña las sesiones de trabajo.',
          color: 'bg-gb-purple/10',
        },
      ],
    },
    expertise: {
      title: 'Especialidad principal',
      intro: 'Soy desarrollador Full Stack con especial fortaleza en Frontend y bases sólidas en Backend. Mi experiencia abarca React y Next.js, Java y Spring Boot, Node.js, APIs REST y bases de datos SQL. Disfruto diseñar sistemas, resolver problemas reales y contribuir a proyectos open source que hagan la tecnología más accesible.',
      cards: [
        ['code', 'Desarrollo Frontend', 'React, Next.js, HTML, CSS, SCSS, Material UI e interfaces responsive.', 'text-primary'],
        ['dns', 'Ingeniería Backend', 'Java, Spring Boot, Node.js, Express, Hono, APIs REST y arquitectura backend.', 'text-gb-purple'],
        ['storage', 'Datos y sistemas', 'SQL, MySQL, Supabase, MongoDB, modelado de datos y diseño de sistemas.', 'text-gb-orange'],
        ['terminal', 'Herramientas y metodologías', 'Git, Docker, Cloudflare Workers, Maven, UNIX/Linux, Scrum y Kanban.', 'text-gb-blue'],
      ],
      strengths: [
        ['hub', 'Orientación open source', 'Contribución a herramientas enfocadas en la comunidad mediante proyectos colaborativos como SimpleDevsSL.', 'bg-primary'],
        ['groups', 'Liderazgo técnico', 'Coordinación de equipos pequeños y capacitación de más de 20 desarrolladores junior.', 'bg-gb-purple'],
        ['psychology', 'Desarrollo orientado a problemas', 'Construcción de software simple, confiable y mantenible para necesidades reales.', 'bg-gb-orange'],
      ],
    },
    journey: {
      title: 'Mi trayectoria profesional',
      entries: [
        ['Dic 2025 — Actualidad', 'Desarrollador Backend / Full Stack — SimpleDevsSL', 'Iniciativa open source sin fines de lucro que desarrolla soluciones para necesidades reales de la comunidad de San Luis. Contribuyo en backend, arquitectura, planificación técnica, frontend, infraestructura y despliegue según las necesidades. También participé en el desarrollo de Guía Puntana.'],
        ['Feb 2021 — Abr 2024', 'Desarrollador Full Stack / Team Leader — Aptugo', 'Desarrollé aplicaciones web full stack con el stack MERN, lideré un equipo de hasta tres desarrolladores, capacitando a más de 20 perfiles junior, y dicté cursos de programación para clientes externos bajo metodologías Scrum y Kanban.'],
        ['Freelance', 'Profesor particular de Programación Orientada a Objetos', 'Clases particulares de POO para estudiantes y autodidactas, aplicando la experiencia adquirida como tutor y capacitador en Aptugo.'],
      ],
    },
    contact: {
      title: '¿Empezamos una conversación?',
      description: 'Ya sea que tengas un proyecto específico en mente o simplemente quieras saludar, siempre estoy dispuesto a conectar y hablar de tecnología.',
      cv: 'Descargar CV',
    },
    footer: '© 2026 Giuliano Pascarelli. Construido con pasión y código limpio.',
  },
}

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem('portfolio-language') || 'en'
  })
  const t = content[language]

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b-4 border-gb-fg0 bg-gb-bg1/95 px-6 py-4 backdrop-blur-sm lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a className="flex items-center gap-3" href="#">
            <div className="flex h-12 w-12 items-center justify-center pixel-border bg-primary text-gb-bg0"><span className="material-symbols-outlined font-bold">code</span></div>
            <span className="text-xl font-display font-bold tracking-tight text-gb-fg0">Giuliano<span className="text-primary">'s</span> portfolio</span>
          </a>
          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden items-center gap-8 md:flex">
              <a className="text-lg font-bold text-gb-fg0 transition-colors hover:text-primary" href="#work">{t.nav.work}</a>
              <a className="text-lg font-bold text-gb-fg0 transition-colors hover:text-primary" href="#expertise">{t.nav.expertise}</a>
              <a className="text-lg font-bold text-gb-fg0 transition-colors hover:text-primary" href="#journey">{t.nav.journey}</a>
              <a className="pixel-button bg-primary px-6 py-2 text-lg font-bold text-gb-bg0 transition-all" href="#contact">{t.nav.contact}</a>
            </div>
            <button aria-label={`Switch to ${t.otherLanguage}`} className="pixel-button shrink-0 bg-gb-bg2 px-2 py-1 text-base font-bold text-gb-fg0 transition-all hover:bg-primary hover:text-gb-bg0 sm:px-3 sm:py-2 sm:text-lg" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
              <span className="sm:hidden">{t.language}/{t.otherLanguage}</span>
              <span className="hidden sm:inline">{t.language} <span aria-hidden="true">↔</span> {t.otherLanguage}</span>
            </button>
            <span className="material-symbols-outlined text-3xl text-gb-fg0 md:hidden">menu</span>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 pixel-border bg-gb-bg2 px-4 py-1 text-sm font-bold text-gb-purple"><span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping bg-gb-purple opacity-75" /><span className="relative inline-flex h-3 w-3 bg-gb-purple" /></span>{t.hero.availability}</div>
              <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">{t.hero.title}</h1>
              <p className="max-w-lg text-2xl leading-relaxed">{t.hero.description}</p>
              <div className="flex flex-wrap gap-4"><a className="flex h-14 items-center justify-center pixel-button bg-primary px-8 text-xl font-bold text-gb-bg0 transition-all" href="#work">{t.hero.work}</a><a className="flex h-14 items-center justify-center pixel-button border-4 border-gb-fg0 bg-gb-bg2 px-8 text-xl font-bold text-gb-fg0 transition-all hover:bg-gb-bg1" href="#contact">{t.hero.hello}</a></div>
            </div>
            <div className="relative order-first lg:order-last"><div className="absolute -inset-4 bg-primary/10 blur-xl" /><div className="relative overflow-hidden pixel-border bg-gb-bg2"><img alt="Giuliano Pascarelli professional portrait" className="block h-auto w-full opacity-90 pixelated-img" src="/img/Giuliano%20Pascarelli%20Portrait.jpg" /></div></div>
          </div>
        </section>

        <section className="border-y-4 border-gb-fg0/10 bg-gb-bg1 px-6 py-24 lg:px-20" id="work">
          <div className="mx-auto max-w-7xl"><div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"><div className="max-w-xl"><h2 className="mb-4 text-3xl font-bold uppercase tracking-tight">{t.work.title}</h2><p className="text-xl">{t.work.intro}</p></div><a className="group flex items-center gap-2 text-xl font-bold text-primary" href="https://github.com/lelox028" target="_blank" rel="noreferrer">{t.work.all}<span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a></div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">{t.work.projects.map((project) => <a href={project.url} target="_blank" rel="noreferrer" key={project.name}><div className="group flex h-full flex-col gap-5 overflow-hidden pixel-border bg-gb-bg2 p-4 transition-all hover:-translate-y-1"><div className={`aspect-square overflow-hidden pixel-border ${project.color}`}><img alt={project.alt} className="h-full w-full object-cover pixelated-img transition-transform duration-500 group-hover:scale-110" src={project.image} /></div><div className="px-2"><p className="mb-1 text-lg font-bold uppercase tracking-wider text-gb-orange">{project.type}</p><h3 className="mb-2 text-2xl font-bold">{project.name}</h3><p className="text-lg leading-relaxed">{project.description}</p></div></div></a>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-20" id="expertise"><div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"><div><h2 className="mb-6 text-4xl font-bold uppercase tracking-tight">{t.expertise.title}</h2><p className="mb-10 text-2xl leading-relaxed">{t.expertise.intro}</p><div className="grid grid-cols-1 gap-6 sm:grid-cols-2">{t.expertise.cards.map(([icon, title, description, color]) => <div className="pixel-border bg-gb-bg2 p-6" key={title}><span className={`material-symbols-outlined mb-4 text-4xl ${color}`}>{icon}</span><h4 className="mb-2 text-xl font-bold text-gb-fg0">{title}</h4><p className="text-lg">{description}</p></div>)}</div></div><div className="relative"><div className="flex flex-col gap-6">{t.expertise.strengths.map(([icon, title, description, color], index) => <div className={`${index === 1 ? 'ml-8 ' : ''}flex items-center gap-4 pixel-border bg-gb-bg2 p-6`} key={title}><div className={`flex h-14 w-20 items-center justify-center pixel-border ${color} text-gb-bg0`}><span className="material-symbols-outlined text-3xl">{icon}</span></div><div><p className="text-xl font-bold text-gb-fg0">{title}</p><p className="text-lg">{description}</p></div></div>)}</div></div></div></section>

        <section className="border-y-4 border-gb-fg0/10 bg-gb-bg1 px-6 py-24 lg:px-20" id="journey"><div className="mx-auto max-w-4xl text-center"><h2 className="mb-12 text-3xl font-bold uppercase">{t.journey.title}</h2><div className="relative flex flex-col gap-16 text-left"><div className="absolute left-0 top-0 h-full w-1 bg-gb-fg0/20 md:left-1/2" />{t.journey.entries.map(([date, title, description], index) => <div className="relative flex flex-col md:flex-row md:justify-between" key={title}><div className={`${index % 2 ? 'md:order-last' : ''} md:w-[45%] pixel-border bg-gb-bg2 p-6`}><div className="mb-2 text-lg font-bold text-primary">{date}</div><h3 className="mb-2 text-2xl font-bold">{title}</h3><p className="text-lg">{description}</p></div><div className="absolute left-[-6px] top-6 h-4 w-4 border-2 border-gb-fg0 bg-primary md:left-1/2 md:ml-[-8px]" /></div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-2 py-16 sm:px-4 sm:py-20 lg:px-20 lg:py-24" id="contact"><div className="flex w-full flex-col items-center gap-8 pixel-border bg-gb-fg0 p-4 text-center text-gb-bg0 sm:gap-12 sm:p-8 lg:p-20"><div className="w-full max-w-2xl"><h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-gb-bg0 sm:text-4xl" style={{ color: '#fbf1c7' }}>{t.contact.title}</h2><p className="mb-8 text-lg text-gb-bg2 sm:mb-10 sm:text-2xl">{t.contact.description}</p><div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8"><a className="flex w-full items-center justify-center gap-3 pixel-button bg-primary px-4 py-3 text-lg font-bold text-gb-bg0 transition-all sm:w-auto sm:px-8 sm:py-4 sm:text-2xl" href="mailto:giulianopascarelli@gmail.com"><span className="material-symbols-outlined">mail</span><span className="truncate">giulianopascarelli@gmail.com</span></a><a className="flex w-full items-center justify-center gap-3 pixel-button border-4 border-gb-bg0 bg-transparent px-4 py-3 text-lg font-bold transition-all hover:bg-gb-bg0 hover:text-gb-fg0 sm:w-auto sm:px-8 sm:py-4 sm:text-2xl" href={`/cv_giuliano_pascarelli_${language}.pdf`} download><span className="material-symbols-outlined">description</span><span className="truncate">{t.contact.cv}</span></a></div></div><div className="flex w-full flex-wrap justify-center gap-6 text-lg font-bold text-gb-bg2 sm:gap-10 sm:text-xl"><a className="transition-colors hover:text-primary" href="https://www.linkedin.com/in/giuliano-pascarelli-097100190/" target="_blank" rel="noreferrer">LinkedIn</a><a className="transition-colors hover:text-primary" href="https://github.com/lelox028" target="_blank" rel="noreferrer">GitHub</a></div></div></section>
      </main>

      <footer className="border-t-4 border-gb-fg0 bg-gb-bg1 px-6 py-12 lg:px-20"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center pixel-border bg-primary text-gb-bg0"><span className="material-symbols-outlined text-sm font-bold">code</span></div><span className="text-xl font-display font-bold tracking-tight text-gb-fg0">Giuliano's portfolio</span></div><p className="text-lg">{t.footer}</p></div></footer>
    </div>
  )
}

export default App
