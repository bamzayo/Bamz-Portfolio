import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/Bamz.png";
import HeaderScocials from "./HeaderScocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Gbolahan Bamigbola</h1>
        <h5 className="text-light">Junior Full-Stack Web Developer</h5>
        <CTA />
        <HeaderScocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
