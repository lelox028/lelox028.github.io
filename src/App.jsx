function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-gb-fg0 bg-gb-bg1/95 backdrop-blur-sm px-6 py-4 lg:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center pixel-border bg-primary text-gb-bg0">
              <span className="material-symbols-outlined font-bold">code</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-gb-fg0">
              Giuliano<span className="text-primary">'s</span> portofolio
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a className="text-lg font-bold transition-colors hover:text-primary text-gb-fg0" href="#work">Selected Work</a>
            <a className="text-lg font-bold transition-colors hover:text-primary text-gb-fg0" href="#expertise">Expertise</a>
            <a className="text-lg font-bold transition-colors hover:text-primary text-gb-fg0" href="#journey">Journey</a>
            <a className="pixel-button bg-primary px-6 py-2 text-lg font-bold text-gb-bg0 transition-all" href="#contact">
              Get in touch
            </a>
          </div>
          <button className="flex md:hidden text-gb-fg0">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 pixel-border bg-gb-bg2 px-4 py-1 text-sm font-bold text-gb-purple">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-gb-purple opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 bg-gb-purple"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                Building digital experiences <br />
                <span className="text-primary">with a smile.</span>
              </h1>
              <p className="max-w-lg text-2xl leading-relaxed">
                Hi, I'm Giuliano! A Backend-focused fullstack developer who cares about architecture and clean decisions.
                I enjoy working with teams and turning ideas into well-crafted software.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="flex h-14 items-center justify-center pixel-button bg-primary px-8 text-xl font-bold text-gb-bg0 transition-all" href="#work">
                  View My Work
                </a>
                <a className="flex h-14 items-center justify-center pixel-button border-4 border-gb-fg0 bg-gb-bg2 px-8 text-xl font-bold text-gb-fg0 transition-all hover:bg-gb-bg1" href="#contact">
                  Say Hello
                </a>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-4 bg-primary/10 blur-xl"></div>
              <div className="relative aspect-[4/3] overflow-hidden pixel-border bg-gb-bg2">
                <img
                  alt="Giuliano's Studio"
                  className="h-full w-full object-cover opacity-90 pixelated-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDm_0_DccnX8zLyQE_6YEfLkOUn6lMfyOH-7kHZ1ml45tlV41NEpdUnuEwgsI8V7B-HiEXHsghGx2vZN-MwPnvOnuPsGhTIh1TOU7aSEBNTPcmWrpKWizSW3iE-aYvziepVoSkXGjvyyc-Dd0I5Sp026b9YL5MQjrnD2ubAoXQ07K9IhGt8v9vh7ukSxVWBP-0J53ZTwt-uUGfXI6pmQy_Kncs16u2BCETwSvWGLWwx2tf5_rGbCjTGeQqgvP8hEE8O-7L3keHTzr4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="bg-gb-bg1 px-6 py-24 lg:px-20 border-y-4 border-gb-fg0/10" id="work">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-xl">
                <h2 className="mb-4 text-3xl font-bold tracking-tight uppercase">Selected Work</h2>
                <p className="text-xl">A collection of software engineering projects focused on scalability, performance, and intuitive user interfaces.</p>
              </div>
              <a className="group flex items-center gap-2 text-xl font-bold text-primary" href="https://github.com/lelox028">
                Explore All My Projects
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col gap-5 overflow-hidden pixel-border bg-gb-bg2 p-4 transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden pixel-border bg-primary/10">
                  <img alt="Guia Puntana" className="h-full w-full object-cover pixelated-img transition-transform duration-500 group-hover:scale-110" src="../img/guiaPuntana.png" />
                </div>
                <div className="px-2">
                  <p className="mb-1 text-lg font-bold uppercase tracking-wider text-gb-orange">Nextjs &amp; TypeScript</p>
                  <h3 className="mb-2 text-2xl font-bold">Guia Puntanta</h3>
                  <p className="text-lg leading-relaxed">Open-source platform designed to connect entrepreneurs and local service providers from San Luis, Argentina, with citizens seeking reliable services directly and free of charge.</p>
                </div>
              </div>
              <div className="group flex flex-col gap-5 overflow-hidden pixel-border bg-gb-bg2 p-4 transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden pixel-border bg-gb-orange/10">
                  <img alt="Study Plan Manager" className="h-full w-full object-cover pixelated-img transition-transform duration-500 group-hover:scale-110" src="../img/SPM.png" />
                </div>
                <div className="px-2">
                  <p className="mb-1 text-lg font-bold uppercase tracking-wider text-primary">Full-stack Dev</p>
                  <h3 className="mb-2 text-2xl font-bold">Study Plan Manager</h3>
                  <p className="text-lg leading-relaxed">Companion designed to help students manage their study program and schedule, allowing for a better and more optimized use of their time. </p>
                </div>
              </div>
              <div className="group flex flex-col gap-5 overflow-hidden pixel-border bg-gb-bg2 p-4 transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden pixel-border bg-gb-purple/10">
                  <img alt="Healthcare Portal" className="h-full w-full object-cover pixelated-img transition-transform duration-500 group-hover:scale-110" src="../img/tramitesSanLuis.png" />
                </div>
                <div className="px-2">
                  <p className="mb-1 text-lg font-bold uppercase tracking-wider text-gb-purple">Full-stack Dev</p>
                  <h3 className="mb-2 text-2xl font-bold">San Luis Tramites</h3>
                  <p className="text-lg leading-relaxed">Web platform that aggregates and organizes information about public procedures in San Luis, Argentina, helping citizens quickly find requirements, documentation, and steps for completing government services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-20" id="expertise">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight uppercase">Core Expertise</h2>
              <p className="mb-10 text-2xl leading-relaxed">
                I'm a full stack developer focused on building practical and maintainable software.
                My experience ranges from backend development with Java and Spring Boot to full stack
                web applications using React and Node.js. I enjoy designing systems, solving real
                problems, and contributing to open source projects that make technology more accessible.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div className="pixel-border bg-gb-bg2 p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-primary">code</span>
                  <h4 className="mb-2 text-xl font-bold text-gb-fg0">Frontend Development</h4>
                  <p className="text-lg">
                    React, HTML, CSS, SCSS, responsive interfaces and modern web UI development.
                  </p>
                </div>

                <div className="pixel-border bg-gb-bg2 p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-gb-purple">dns</span>
                  <h4 className="mb-2 text-xl font-bold text-gb-fg0">Backend Engineering</h4>
                  <p className="text-lg">
                    Java, Spring Boot, Node.js, Express, REST APIs and scalable backend services.
                  </p>
                </div>

                <div className="pixel-border bg-gb-bg2 p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-gb-orange">storage</span>
                  <h4 className="mb-2 text-xl font-bold text-gb-fg0">Data & Systems</h4>
                  <p className="text-lg">
                    SQL, MongoDB, data modeling and system design for real-world applications.
                  </p>
                </div>

                <div className="pixel-border bg-gb-bg2 p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-gb-blue">terminal</span>
                  <h4 className="mb-2 text-xl font-bold text-gb-fg0">Linux & Development Tools</h4>
                  <p className="text-lg">
                    Linux environments, Git workflows, Docker and automation with shell scripting.
                  </p>
                </div>

              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col gap-6">

                <div className="flex items-center gap-4 pixel-border bg-gb-bg2 p-6">
                  <div className="flex h-14 w-20 items-center justify-center pixel-border bg-primary text-gb-bg0">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gb-fg0">Open Source Oriented</p>
                    <p className="text-lg">
                      Building community-focused tools through collaborative projects like SimpleDevsSL.
                    </p>
                  </div>
                </div>

                <div className="ml-8 flex items-center gap-4 pixel-border bg-gb-bg2 p-6">
                  <div className="flex h-14 w-20 items-center justify-center pixel-border bg-gb-purple text-gb-bg0">
                    <span className="material-symbols-outlined text-3xl">groups</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gb-fg0">Team Leadership</p>
                    <p className="text-lg">
                      Experience mentoring junior developers and coordinating small development teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pixel-border bg-gb-bg2 p-6">
                  <div className="flex h-14 w-20 items-center justify-center pixel-border bg-gb-orange text-gb-bg0">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gb-fg0">Problem Driven Development</p>
                    <p className="text-lg">
                      Focused on solving real-world problems with simple, reliable and maintainable software.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="bg-gb-bg1 px-6 py-24 lg:px-20 border-y-4 border-gb-fg0/10" id="journey">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold uppercase">My Professional Journey</h2>
            <div className="relative flex flex-col gap-16 text-left">
              <div className="absolute left-0 top-0 h-full w-1 bg-gb-fg0/20 md:left-1/2"></div>
              <div className="relative flex flex-col md:flex-row md:justify-between">
                <div className="md:w-[45%] pixel-border bg-gb-bg2 p-6">
                  <div className="mb-2 text-lg font-bold text-primary">2021 — Present</div>
                  <h3 className="mb-2 text-2xl font-bold">Software Developer (Backend / Full Stack) & Open Source Initiative</h3>
                  <p className="text-lg">Collaborative initiative focused on developing open source software solutions for real-world community problems, aiming to provide simple and accessible tools for everyday use.</p>
                </div>
                <div className="absolute left-[-6px] top-6 h-4 w-4 bg-primary border-2 border-gb-fg0 md:left-1/2 md:ml-[-8px]"></div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-between">
                <div className="md:order-last md:w-[45%] pixel-border bg-gb-bg2 p-6">
                  <div className="mb-2 text-lg font-bold text-primary">Feb 2021 – Apr 2024</div>
                  <h3 className="mb-2 text-2xl font-bold">Tutor</h3>
                  <p className="text-lg">Delivered programming tutoring sessions and courses, participating in internal and external company training programs.</p>
                </div>
                <div className="absolute left-[-6px] top-6 h-4 w-4 bg-primary border-2 border-gb-fg0 md:left-1/2 md:ml-[-8px]"></div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-between">
                <div className="md:w-[45%] pixel-border bg-gb-bg2 p-6">
                  <div className="mb-2 text-lg font-bold text-primary">Feb 2021 – Apr 2024</div>
                  <h3 className="mb-2 text-2xl font-bold">Software Developer (Full Stack / Backend)</h3>
                  <p className="text-lg">Worked as a full stack web developer, actively contributing to technical leadership responsibilities.</p>
                </div>
                <div className="absolute left-[-6px] top-6 h-4 w-4 bg-primary border-2 border-gb-fg0 md:left-1/2 md:ml-[-8px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-20" id="contact">
          <div className="flex flex-col items-center gap-12 pixel-border bg-gb-fg0 p-8 text-center text-gb-bg0 lg:p-20">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-bold tracking-tight uppercase" style={{ color: '#fbf1c7' }}>
                Ready to start a conversation?
              </h2>
              <p className="mb-10 text-2xl text-gb-bg2">
                Whether you have a specific project in mind or just want to say hi, I'm always happy to connect and talk shop.
              </p>
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                <a className="flex items-center gap-3 pixel-button bg-primary px-8 py-4 text-2xl font-bold text-gb-bg0 transition-all" href="mailto:giulianopascarelli@gmail.com">
                  <span className="material-symbols-outlined">mail</span>
                  giulianopascarelli@gmail.com
                </a>
                <a className="flex items-center gap-3 pixel-button border-4 border-gb-bg0 bg-transparent px-8 py-4 text-2xl font-bold transition-all hover:bg-gb-bg0 hover:text-gb-fg0" href="/cv.pdf" download>
                  <span className="material-symbols-outlined">description</span>
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex gap-10 text-xl font-bold text-gb-bg2">
              <a className="transition-colors hover:text-primary" href="https://www.linkedin.com/in/giuliano-pascarelli-097100190/">LinkedIn</a>
              <a className="transition-colors hover:text-primary" href="https://github.com/lelox028">GitHub</a>
              {/* <a className="transition-colors hover:text-primary" href="#">Twitter</a> */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-gb-fg0 bg-gb-bg1 px-6 py-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center pixel-border bg-primary text-gb-bg0">
              <span className="material-symbols-outlined text-sm font-bold">code</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-gb-fg0">lelox's portofolio</span>
          </div>
          <p className="text-lg">© 2026 Giuliano Pascarelli. Built with passion and clean code.</p>
          {/* <div className="flex gap-8 text-lg font-bold text-gb-fg0">
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Cookies</a>
          </div> */}
        </div>
      </footer>
    </div>
  )
}

export default App
