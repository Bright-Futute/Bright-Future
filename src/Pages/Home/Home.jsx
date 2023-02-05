import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Technology from "../Technology/Technology";
import Test from "./Hero/Test";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Test></Test>
      <Services></Services>
      <Technology></Technology>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
