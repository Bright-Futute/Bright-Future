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
      <div className="bg-[#001E00] mb-20" id="top">
        <Hero></Hero>
      </div>
      <div className="mb-20" id="about">
        <About></About>
      </div>
      <div className="mb-20 bg-[#f7f7f7] py-10" id="service">
        <Services></Services>
      </div>
      <div className="mb-20" id="technology">
        <Technology></Technology>
      </div>
      <div className="mb-20 bg-[#f7f7f7] py-10" id="offer">
        <OurOffer></OurOffer>
      </div>
      <div className="mb-20" id="projects">
        <Projects></Projects>
      </div>
      <div className="mb-20 bg-[#f7f7f7] py-10" id="team">
        <Employee></Employee>
      </div>
      <div className="mb-20" id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
