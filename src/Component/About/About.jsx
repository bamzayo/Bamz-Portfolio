import React from "react";
import "./about.css";
import Me from "../../assets/Bamz2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>-1 year working</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>...</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <p>
            To procure a full time job where I can utilize the variety of
            website development skills I have acquired through online courses
            and personal practice. Currently seeking internship or employment in
            website development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
