import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Technology from "../Technology/Technology";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "../About/About";
import OurOffer from "../OurOffer/OurOffer";
import Employee from "../About/Employee/Employee";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <>
      <div id="top">
        <Hero></Hero>
      </div>
      {/* <div id="about">
        <About></About>
      </div> */}
      <div id="service">
        <Services></Services>
      </div>
      <div id="technology">
        <Technology></Technology>
      </div>
      <div id="offer">
        <OurOffer></OurOffer>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="team">
        <Employee></Employee>
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
