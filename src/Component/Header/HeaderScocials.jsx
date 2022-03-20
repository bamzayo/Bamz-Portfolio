import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const HeaderScocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/gbolahan-bamigbola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="http://github.com/bamzayo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderScocials;
