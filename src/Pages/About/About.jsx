import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Shared/Navbar/Header";
import Image from "./HeroSectionOfBrightFuture.jpg";
const About = () => {
  return (
    <>
      <Header />
      <section className="bg-white text-black">
        <div className="container max-w-xl py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-sty text-[26px] lg:text-4xl font-[700] drop-shadow-md text-center text-[#A737D5]">
              Bright Future
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-800">
              Bright future for your bright solution
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-justify">
                Bright Future is a startup software company that specializes in
                creating web apps, Android apps, and UI/UX designs. We were
                founded in January 2023 in Dhaka, Bangladesh by a team of IT
                specialists who wanted to create a company that would not only
                be successful in business but also contribute to the
                transformation of society through software development. Our
                mission is to provide enterprise solutions to both local and
                international organizations, with a strong focus on software
                security and development for business automation. We work
                closely with our customers to ensure that we are meeting their
                needs and constantly improving our service performance.
              </p>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={Image}
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-justify">
                  At Bright Future, we pride ourselves on the quality of our
                  solutions and services. We offer a range of services including
                  web-based application development, software and Android app
                  development, and internet marketing strategy development. We
                  also specialize in web application design, helping our clients
                  to create beautiful, functional, and user-friendly interfaces
                  for their customers. Our team of experienced developers and
                  designers is committed to creating innovative solutions that
                  meet the needs of our customers. We are dedicated to
                  maintaining long-term relationships with our clients and
                  providing them with the support they need to succeed in
                  today's digital era.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={Image}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm></ContactForm>
    </>
  );
};

export default About;
