import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Technology from "../Technology/Technology";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "../About/About";
import OurOffer from "../OurOffer/OurOffer";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <OurOffer></OurOffer>
      <Services></Services>
      <Technology></Technology>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
