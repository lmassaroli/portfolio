import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li className="selected">
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
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
                JS and Node JS.
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
              >
                Pixi Shooter
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.gamesflood.ezejedrez"
                rel="me"
                target="_blank"
              >
                Ezejedrez
              </a>
            </li>
          </ul>
        </section>

        <section id="about">
          <header>
            <h1>About</h1>
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
