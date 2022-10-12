import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

const projects = [
  {
    title: "Pixi Shooter",
    imgUrl: "/portfolio/pixi-shooter.png",
    url: "https://leoflood.github.io/pixi-shooter",
    description:
      "A demo shooter developed with Typescript, Pixi JS and React, uses the composite design pattern.",
  },
  {
    title: "Ezejedrez",
    imgUrl: "/portfolio/ezejedrez.png",
    url: "https://play.google.com/store/apps/details?id=com.gamesflood.ezejedrez",
    description: "A chess developed on React Native using Typescript and TDD.",
  },
];

export default function App() {
  const [selectedLink, setSelectedLink] = useState("");

  const LiLink = ({ title = "", link = "" }) => (
    <li className={`${selectedLink === link ? "selected" : ""}`}>
      <a href={`#${link}`} onClick={() => setSelectedLink(link)}>
        {title}
      </a>
    </li>
  );

  return (
    <div className="App">
      <nav>
        <ul>
          <LiLink title="Home" link="home" />
          <LiLink title="Projects" link="projects" />
          <LiLink title="Contact" link="contact" />
        </ul>
      </nav>

      <div className="page-content">
        <section id="home">
          <header>
            <div className="home-title-container">
              <h1 className="home-title">Leonardo Massaroli</h1>
              <h2 className="home-subtitle">Software Engineer</h2>
            </div>

            <div className="home-intro">
              <p>
                I am an IT professional with a solid background in the design of
                web applications, both third-party and my own. Having experience
                working as part of teams of diverse companies and as a
                freelancer, I specialize in React and TypeScript.
              </p>
              <p>
                I am eager to apply my knowledge to benefit other people, gain
                new experience, and contribute to exciting projects that impact
                the world.
              </p>
            </div>
          </header>
        </section>

        <section id="projects">
          <header>
            <h1>Projects</h1>
          </header>

          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title}>
                <a href={p.url} rel="me" target="_blank" className="project">
                  <img src={p.imgUrl} />
                  <b>{p.title}</b>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <header>
            <h1>Contact</h1>
          </header>
        </section>

        <footer>
          <ul className="links">
            <li>
              <a
                href="https://github.com/leoflood"
                title="GitHub"
                rel="me"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/leonardoflood/"
                title="LinkedIn"
                rel="me"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
