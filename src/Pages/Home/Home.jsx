import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Technology from "../Technology/Technology";
import Test from "./Hero/Test";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Test></Test>
      <Services></Services>
      <Technology></Technology>
      <About></About>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
