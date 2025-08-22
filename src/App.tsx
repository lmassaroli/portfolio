import { useState } from "react";
import { Carousel } from "@mantine/carousel";

import styles from "./App.module.css";
import "font-awesome/css/font-awesome.min.css";

import projects from "./projects";
import experiences from "./experiences";

export default function App() {
  const [selectedLink, setSelectedLink] = useState("");

  const LiLink = ({ title = "", link = "" }) => (
    <li className={`${selectedLink === link ? styles.selected : ""}`}>
      <a href={`#${link}`} onClick={() => setSelectedLink(link)}>
        {title}
      </a>
    </li>
  );

  return (
    <div className={styles.App}>
      <nav>
        <ul>
          <LiLink title="Home" link="home" />
          <LiLink title="Projects" link="projects" />
          <LiLink title="Contact" link="contact" />
        </ul>
      </nav>

      <div className={styles.pageContent}>
        <section id="home">
          <header>
            <div className={styles.homeTitleContainer}>
              <h1 className={styles.homeTitle}>Leonardo Massaroli</h1>
              <h2 className={styles.homeSubtitle}>Software Engineer</h2>
            </div>

            <div className={styles.homeIntro}>
              <p>
                I’m a Software Engineer with over 6 years of experience
                developing web and mobile applications for startups and
                established companies. As the founder of Sophie Games, I built
                Lines of Battle, a multiplayer strategy game that achieved
                175,000 registered users within 12 months of development in
                2024. My expertise lies in full-stack development, leveraging
                technologies like Typescript, Postgres, and AWS to create
                scalable, user-focused solutions.
              </p>
            </div>
          </header>
        </section>

        <section>
          <header>
            <h2>Worked for</h2>
          </header>

          <div className={styles.experiencesContainer}>
            <div className={styles.experiences}>
              <Carousel slideSize="80%" height={160} slideGap="md" loop>
                {experiences.map((exp) => {
                  return (
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
                            />
                          </a>
                        ) : (
                          <div className={styles.experience} title={exp.title}>
                            <img
                              className={styles.experienceLogo}
                              src={exp.img}
                            />
                          </div>
                        )}
                      </div>
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        <section id="projects">
          <header>
            <h2>Projects</h2>
          </header>

          <ul className={styles.projects}>
            {projects.map((p) => (
              <li key={p.title}>
                <div className={styles.project}>
                  <div>
                    <img alt={p.title} src={p.imgUrl} />
                  </div>

                  <div>
                    <b>{p.title}</b>
                    <p className={styles.projectTechnologies}>
                      {p.technologies.join(" - ")}
                    </p>
                  </div>

                  <div className={styles.projectLinksContainer}>
                    {p.url && (
                      <a
                        className={styles.projectLink}
                        href={p.url}
                        rel="me"
                        target="_blank"
                        title={p.description}
                      >
                        Project
                      </a>
                    )}

                    {p.codeUrl && (
                      <a
                        className={styles.projectLink}
                        href={p.codeUrl}
                        title="Project code"
                        rel="me"
                        target="_blank"
                      >
                        <i className="fa fa-github"></i>
                        &nbsp; Code
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <header>
            <h2>Contact</h2>
          </header>
        </section>

        <footer>
          <ul className={styles.links}>
            <li>
              <a
                href="https://github.com/leoflood"
                title="GitHub profile"
                rel="me"
                target="_blank"
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
              >
                <img src="/portfolio/toptal.svg" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
