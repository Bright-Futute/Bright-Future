import React from "react";
import Lottie from "lottie-react";
import Animation1 from "./teamwork1.json";
import Animation2 from "./teamwork2.json";
import Animation3 from "./teamwork3.json";
import Animation4 from "./teamwork4.json";
const OurOffer = () => {
  return (
    <section
      id=""
      className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div className="text-center">
        <h2 className=" text-[20px] lg:text-4xl font-[700] text-sty">
          What we <span className=" drop-shadow-md text-[#3B80B8]">Offer</span>
        </h2>
        <p className="mt-8 text-xl  lg:w-8/12 text-justify mx-auto">
          Bright-Future is an addition of your development and testing team. We
          will work together to resolve your business cases and get the most
          significant value out of your budget. One of our hallmarks is that we
          take the time to understand your company's unique challenges and
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 mt-10">
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl  font-bold ">Qualified Expertise</h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation4}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl  font-bold ">Dedicated Team</h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation2}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl  font-bold ">Collaborative Process</h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation1}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl  font-bold ">Continuous Supervision</h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation3}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default OurOffer;
