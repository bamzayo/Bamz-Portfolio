import React from "react";
import "./portfolio.css";
import shefizy from "../../assets/shefizywears.png";
import Loruki from "../../assets/Loruki.png";
import PortF from "../../assets/Portfolio.png";
import ECom from "../../assets/ecom.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={shefizy} alt="img" />
          </div>
          <h5>Fashion Hub Website</h5>

          <div className="portfolio__item-cta">
            <a href="https://github.com/bamzayo" className="btn">
              Github
            </a>
            <a
              href="https://sheficywears.netlify.app"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Loruki} alt="img" />
          </div>
          <h5>Web Hosting / Deployment</h5>

          <div className="portfolio__item-cta">
            <a href="https://github.com/bamzayo" className="btn">
              Github
            </a>
            <a
              href="https://bamz-loruki.netlify.app"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PortF} alt="img" />
          </div>
          <h5>Portfolio Website</h5>

          <div className="portfolio__item-cta">
            <a href="https://github.com/bamzayo" className="btn">
              Github
            </a>
            <a
              href="https://bamigbolagbolahan.netlify.app"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ECom} alt="img" />
          </div>
          <h5>E-Commerce</h5>

          <div className="portfolio__item-cta">
            <a href="https://github.com/bamzayo" className="btn">
              Github
            </a>
            <a
              href="https://bamz-comfy-house-shopping-cart.netlify.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
