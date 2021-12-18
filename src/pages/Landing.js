import React from "react";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import Experience from "../sections/Experience";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Banner from "../sections/Banner";
const Landing = () => {
  return (
    <div className='bg-white max-w-8xl overflow-hidden font-sans'>
      <Header />
      <Banner />
      <Education />
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
