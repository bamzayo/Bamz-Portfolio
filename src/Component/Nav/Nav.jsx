import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={(event) => setActiveNav("#home")}
      >
        <AiOutlineHome />
      </a>
      <div className="sideline"></div>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={(event) => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <div className="sideline"></div>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={(event) => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <div className="sideline"></div>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={(event) => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <div className="sideline"></div>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={(event) => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
