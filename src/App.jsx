import React from "react";
import "./index.css";

import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import Experience from "./Component/Experience/Experience";
import Portfolio from "./Component/Portfolio/Portfolio";
// import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

// echo "# Bamz-Portfolio" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bamzayo/Bamz-Portfolio.git
// git push -u origin main

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
