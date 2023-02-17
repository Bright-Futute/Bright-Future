import Lottie from "lottie-react";
import React from "react";
import Typical from "react-typical";
import Image from "./web.json";
import { NavHashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <section className="pt-20 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="block lg:flex justify-between items-center">
        <aside className="text-black lg:w-[55%]">
          <h1 className="font-mono text-[30px] lg:text-5xl font-[800] lg:w-3/4 lg:my-10 text-center lg:text-start">
            We Are Professional{" "}
            <span className="text-[#3B80B8]">Design & Development</span> Service
            Provider.
          </h1>
          <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
            <Typical
              className="text-left text-2xl text-teal-700"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Client Management",
                2000,
                "Develop and Designing",
                2000,
                "Web Application Based Interface",
                2000,
              ]}
            ></Typical>
          </ul>
          <Link smooth={true} duration={1000} delay={1000} to="/#contact">
            <button className=" my-4 bg-[#fe9105] hover:bg-[#f9c301] px-3 py-3 font-semibold rounded text-xl text-white font-mono">
              Let's Work Together
            </button>
          </Link>
        </aside>
        <Lottie
          className="lg:w-[500px] lg:h-[500px]"
          animationData={Image}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
