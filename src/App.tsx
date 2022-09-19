import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

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
                I am an IT professional who has worked in the design of web
                applications, both third-party and my own. I specialize in React
                JS and Typescript.
              </p>
              <p>
                I want to be able to use my knowledge to benefit other people
                and thus also gain experience, meet people with similar
                interests and contribute to exciting projects that have an
                impact on the world.
              </p>
            </div>
          </header>
        </section>

        <section id="projects">
          <header>
            <h1>Projects</h1>
          </header>

          <ul className="projects">
            <li>
              <a
                href="https://leoflood.github.io/pixi-shooter"
                rel="me"
                target="_blank"
                className="project"
              >
                <img src="/pixi-shooter.png" />
                <b>Pixi Shooter</b>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.gamesflood.ezejedrez"
                rel="me"
                target="_blank"
                className="project"
              >
                <img src="/ezejedrez.png" />
                <b>Ezejedrez</b>
              </a>
            </li>
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
