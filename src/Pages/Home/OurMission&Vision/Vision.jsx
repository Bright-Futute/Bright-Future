import React from "react";
import Lottie from "lottie-react";
import ourVisn from "./Visn.json";

const Vision = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-10/12">
      <div className="lg:grid md:grid grid-cols-3 gap-16 justify-between items-center">
        <div className="col-span-2">
          <h2 className="text-sty  text-[32px] lg:text-4xl font-[700] mb-10 drop-shadow-md">
            <span className="text-[#3B80B8] drop-shadow-md">Our</span> Vision
          </h2>
          <p className="text-justify">
            Statistics Show That 20% Of New Businesses Fail In Their First Year,
            30% Within The Second Year And 50% Of Businesses Fail Within Five
            Years. Finally, About 70% Of Business Owners Fail In The Tenth Year
            Of Their Business. No Entrepreneur Starts A Business With The
            Intention Of Failing. But Unfortunately, A Business Failure Is A
            Reality For Many. The Hardest Part Is Facing And Admitting This
            Reality – My Business Is Failing. But The Reality Is, Business
            Failure Is Much More Common Than We See And Think. Losing Happens To
            Everyone And Getting Down About It Is Not Going To Accomplish
            Anything Productive. Instead, Forward-Thinking Will Enable You To
            Get Past The Problem And Work Toward A Brighter Future.
          </p>
        </div>
        <div>
          <Lottie
            className="w-full h-full"
            animationData={ourVisn}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
