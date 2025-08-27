import { useState, useEffect, useRef } from "react";
import { Carousel } from "@mantine/carousel";

import styles from "./App.module.css";
import "font-awesome/css/font-awesome.min.css";

import Button from "./components/Button";
import projects from "./projects";
import experiences from "./experiences";

export default function App() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['home']));
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Handle smooth scrolling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSelectedLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedLink(sectionId);
  };

  const NavLink = ({ title = "", link = "" }) => (
    <li className={styles.navItem}>
      <button 
        onClick={() => scrollToSection(link)}
        className={`${styles.navLink} ${selectedLink === link ? styles.selected : ""}`}
      >
        {title}
      </button>
    </li>
  );

  return (
    <div className={styles.App}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ul className={styles.navList}>
            <NavLink title="Home" link="home" />
            <NavLink title="Experience" link="experience" />
            <NavLink title="Projects" link="projects" />
            <NavLink title="Contact" link="contact" />
          </ul>
        </div>
      </nav>

      <div className={styles.pageContent}>
        {/* Hero Section */}
        <section 
          id="home" 
          className={styles.hero}
          ref={(el) => sectionRefs.current['home'] = el}
        >
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Leonardo Massaroli</h1>
            <h2 className={styles.heroSubtitle}>Software Engineer & Game Developer</h2>
            <p className={styles.heroIntro}>
              I'm a Software Engineer with over 6 years of experience developing web and mobile applications 
              for startups and established companies. As the founder of Sophie Games, I built Lines of Battle, 
              a multiplayer strategy game that achieved 175,000 registered users within 12 months of development in 2024. 
              My expertise lies in full-stack development, leveraging technologies like Typescript, Postgres, and AWS 
              to create scalable, user-focused solutions.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className={`${styles.section} ${visibleSections.has('experience') ? styles.visible : ''}`}
          ref={(el) => sectionRefs.current['experience'] = el}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              <p className={styles.sectionSubtitle}>
                Companies I've had the pleasure to work with
              </p>
            </div>

            <div className={styles.experiencesContainer}>
              <div className={styles.experiences}>
                <Carousel 
                  slideSize="80%" 
                  height={160} 
                  slideGap="md" 
                  loop
                  withIndicators
                  styles={{
                    indicator: {
                      backgroundColor: 'var(--primary-color)',
                    },
                    control: {
                      backgroundColor: 'var(--primary-color)',
                      border: 'none',
                      color: 'white',
                    }
                  }}
                >
                  {experiences.map((exp) => (
                    <Carousel.Slide key={exp.title}>
                      <div className={styles.experienceContainer}>
                        {exp.url ? (
                          <a
                            className={styles.experience}
                            title={exp.title}
                            href={exp.url}
                            rel="me"
                            target="_blank"
                          >
                            <img
                              className={styles.experienceLogo}
                              src={exp.img}
                              alt={exp.title}
                            />
                          </a>
                        ) : (
                          <div className={styles.experience} title={exp.title}>
                            <img
                              className={styles.experienceLogo}
                              src={exp.img}
                              alt={exp.title}
                            />
                          </div>
                        )}
                      </div>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className={`${styles.section} ${visibleSections.has('projects') ? styles.visible : ''}`}
          ref={(el) => sectionRefs.current['projects'] = el}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <p className={styles.sectionSubtitle}>
                A showcase of my recent work and personal projects
              </p>
            </div>

            <ul className={styles.projects}>
              {projects.map((project) => (
                <li key={project.title}>
                  <div className={styles.project}>
                    <img 
                      className={styles.projectImage}
                      alt={project.title} 
                      src={project.imgUrl} 
                    />
                    
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    
                    <div className={styles.projectTechnologies}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.technologyTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.projectLinks}>
                      {project.url && (
                        <Button
                          href={project.url}
                          target="_blank"
                          rel="me"
                          title={project.description}
                          variant="primary"
                          size="small"
                        >
                          View Project
                        </Button>
                      )}

                      {project.codeUrl && (
                        <Button
                          href={project.codeUrl}
                          target="_blank"
                          rel="me"
                          title="Project code"
                          variant="secondary"
                          size="small"
                        >
                          <i className="fa fa-github"></i>
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className={`${styles.contact} ${visibleSections.has('contact') ? styles.visible : ''}`}
          ref={(el) => sectionRefs.current['contact'] = el}
        >
          <div className={styles.container}>
            <h2 className={styles.contactTitle}>Let's Connect</h2>
            <p className={styles.contactText}>
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://github.com/lmassaroli"
                  title="GitHub profile"
                  rel="me"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/lmassaroli/"
                  title="LinkedIn profile"
                  rel="me"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.toptal.com/resume/leonardo-massaroli/"
                  title="Toptal profile"
                  rel="me"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <img src="/portfolio/toptal.svg" alt="Toptal" />
                </a>
              </li>
            </ul>
            
            <p className={styles.copyright}>
              © 2024 Leonardo Massaroli. Built with React & TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
