import React from "react";
import Lottie from "lottie-react";
import Animation1 from "./teamwork1.json";
import Animation2 from "./teamwork2.json";
import Animation3 from "./teamwork3.json";
import Animation4 from "./teamwork4.json";
const OurOffer = () => {
  return (
    <section id="ourOffer" className="py-20">
      <div className="text-center container">
        <h2 className="font-bold font-mono text-[40px] lg:text-[48px] py-5">
          What we Offer
        </h2>
        <p className="font-mono w-3/4 text-center mx-auto">
          Bright-Future is an addition of your development and testing team. We
          will work together to resolve your business cases and get the most
          significant value out of your budget. One of our hallmarks is that we
          take the time to understand your company's unique challenges and
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10">
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl font-mono font-bold text-[#3B80B8]">
            Qualified Expertise
          </h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation4}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl font-mono font-bold text-[#3B80B8]">
            Dedicated Team
          </h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation2}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl font-mono font-bold text-[#3B80B8]">
            Collaborative Process
          </h2>
          <Lottie
            className="lg:w-[200px] lg:h-[200px]"
            animationData={Animation1}
            loop={true}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 items-center justify-center">
          <h2 className="text-xl font-mono font-bold text-[#3B80B8]">
            Continuous Supervision
          </h2>
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
