import React from "react";
import Lottie from "lottie-react";
import ourMission from "./Misn.json";

const Mission = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-10/12">
      <div className="lg:grid md:grid grid-cols-3 gap-16 justify-around items-center">
        <div className="">
          <Lottie className="" animationData={ourMission} loop={true} />
        </div>
        <div className="col-span-2">
          <h2 className="text-sty  text-[32px] lg:text-4xl font-[700] mb-10 drop-shadow-md">
            <span className="text-[#3B80B8] drop-shadow-md">Our</span> Mission
          </h2>
          <p>
            BRIGHT FUTURE Is A Bank Of Solution For The Root Level Retail Stores
            And An End To End Next-Generation Business Market Place Where Our
            Vision Is To Organize The Unorganized Retail Industry. The Purpose
            Of BRIGHT FUTURE Is To Resolve A Retail Store’s Most Critical Issues
            That Are Worth Solving. Our Innovation And Business Concept Is
            Exceptionally Attractive, Business-Friendly, Modern, Innovative,
            Easily Executable, Cost-Efficient, Result Oriented, Low-In-Risk,
            Affordable And Profitable. The Most Powerful Outcomes That We
            Provide, We Protect And Secure Their Business. Reduce Investment And
            Operational Cost. Increase Customer-Base, Sales And Profit Minimum
            Double To 10 Times. We Will Turn Their Business From Ordinary To
            Extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
