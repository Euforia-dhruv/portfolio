import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, ExternalLink, Menu, X } from "lucide-react";

function useIntersectionObserver() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return elementsRef;
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const elementsRef = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">DB</div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <section id="hero" className="hero-section bg-dark" ref={addToRefs}>
        <div className="ink-splash"></div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="text-hero" data-testid="text-name">Dhruv Brahmbhatt</h1>
          <div className="text-subtitle" data-testid="text-role">FULL STACK DEVELOPER</div>
          <p className="text-intro">
            Crafting digital experiences from the shadows — where elegant code meets gothic imagination.
          </p>
          <div className="social-links">
            <a href="https://github.com/Euforia-dhruv" target="_blank" rel="noreferrer" className="social-icon" data-testid="link-github">
              <span>GH</span>
            </a>
            <a href="https://linkedin.com/in/dhruvxyn" target="_blank" rel="noreferrer" className="social-icon" data-testid="link-linkedin">
              <span>in</span>
            </a>
            <a href="mailto:dhruvxyn@gmail.com" className="social-icon" data-testid="link-email-hero">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper grunge-border-top" ref={addToRefs}>
        <div className="container">
          <h2 className="section-heading">About Me</h2>
          <div className="about-grid">
            <div className="about-visual">
              <div className="abstract-silhouette">
                <div className="silhouette-head"></div>
                <div className="silhouette-body"></div>
              </div>
            </div>
            <div className="about-text">
              <p>Dhruv Brahmbhatt is a Diploma in Computer Engineering graduate from Ganpat University.</p>
              <br />
              <p>A passionate beginner full stack developer on a journey to master React, Node.js, Express, and MongoDB — driven by a love for building things that live on the web.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-darker grunge-border-top grunge-border-bottom" ref={addToRefs}>
        <div className="container">
          <h2 className="section-heading">Arsenic & Architecture</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">MySQL Basics</span>
                <span className="skill-tag">REST API</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Npm/Pnpm</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-paper" ref={addToRefs}>
        <div className="container">
          <h2 className="section-heading">Featured Work</h2>
          <div className="project-card">
            <div className="project-header"></div>
            <h3 className="project-title">TechScout</h3>
            <p className="project-desc">
              A comprehensive platform for PC builders and tech enthusiasts — find components, compare products, and build your perfect setup.
            </p>
            <div className="skill-tags" style={{ marginBottom: '1.5rem' }}>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">Vercel</span>
            </div>
            <div className="project-links">
              <div className="project-links">
  <a
    href="https://techsc0ut.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
    data-testid="button-live-demo"
  >
    <ExternalLink size={16} /> Live Demo
  </a>

  <a
    href="https://github.com/Euforia-dhruv/techscout"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline"
    data-testid="button-github-project"
  >
     <span>GH</span> GitHub
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="bg-dark grunge-border-top" ref={addToRefs}>
        <div className="container">
          <h2 className="section-heading">Education</h2>
          <div className="education-card">
            <div className="edu-icon">🎓</div>
            <h3 className="edu-title">Ganpat University</h3>
            <div className="edu-degree">Diploma in Computer Engineering</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-darker grunge-border-top" ref={addToRefs}>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-heading">Get In Touch</h2>
            <p className="contact-text">
              Whether you have a project, a question, or just want to connect — the ink is ready.
            </p>
            <div className="contact-info">
              <a href="mailto:dhruvxyn@gmail.com" className="contact-item" data-testid="link-email-contact">
                <Mail size={20} color="var(--accent)" />
                dhruvxyn@gmail.com
              </a>
              <div className="contact-item" data-testid="text-location">
                <MapPin size={20} color="var(--accent)" />
                Gujarat, India
              </div>
            </div>
            <a href="mailto:dhruvxyn@gmail.com" className="btn btn-primary" data-testid="button-send-message">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-darker footer">
        © 2025 Dhruv Brahmbhatt <span className="footer-ornament">†</span>
      </footer>
    </>
  );
}

export default Home;