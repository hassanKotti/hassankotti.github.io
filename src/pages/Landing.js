import React from "react";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import Experience from "../sections/Experience";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Section from "../components/Section";
const Landing = () => {
  return (
    <div className='w-full bg-stone-50 snap-y snap-mandatory'>
      <Header />     
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
