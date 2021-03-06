import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Production and maintenance of website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building responsive websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prioritizing user experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing the site for usability and fixing any bugs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
