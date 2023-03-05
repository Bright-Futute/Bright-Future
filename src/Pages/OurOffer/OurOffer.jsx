import React from "react";
import Lottie from "lottie-react";
import Animation1 from "./teamwork1.json";
import Animation2 from "./teamwork2.json";
import Animation3 from "./teamwork3.json";
import Animation4 from "./teamwork4.json";
const OurOffer = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 leading-none tracking-tight text-center md:mx-auto text-[26px] lg:text-4xl font-[700] text-sty">
          <span className="relative inline-block">
            <span className="relative"> What</span>
          </span>{" "}
          we <span className=" drop-shadow-md text-[#A737D5]">Offer</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2 text-center">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px] mb-4 mx-auto">
            <Lottie className="" animationData={Animation4} loop={true} />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Qualified Expertise
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear. We never had the chance to.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px] mb-4 mx-auto">
            <Lottie className="" animationData={Animation2} loop={true} />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Dedicated Teamhas justice
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Rough pomfret lemon shark plownose chimaera southern sandfish
            kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin
            gulper South American Lungfish mahi-mahi, butterflyfish glass
            catfish soapfish ling gray mullet!
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px] mb-4 mx-auto">
            <Lottie className="" animationData={Animation1} loop={true} />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Collaborative Process
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            A slice of heaven. O for awesome, this chocka full cuzzie is as
            rip-off as a cracker. Meanwhile, in behind the bicycle shed,
            Hercules Morse, as big as a horse and Mrs Falani were up to no good
            with a bunch of crook pikelets.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px] mb-4 mx-auto">
            <Lottie className="" animationData={Animation3} loop={true} />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Continuous Supervision
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Disrupt inspire and think tank, social entrepreneur but preliminary
            thinking think tank compelling. Inspiring, invest synergy capacity
            building, white paper; silo, unprecedented challenge B-corp
            problem-solvers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;

// <section
//   id=""
//   className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
// >
//   <div className="text-center">
//     <h2 className="  text-[26px] lg:text-4xl font-[700] text-sty">
//       What we <span className=" drop-shadow-md text-[#A737D5]">Offer</span>
//     </h2>
//     <p className="mt-8 lg:w-8/12 text-justify mx-auto">
//       Bright-Future is an addition of your development and testing team. We
//       will work together to resolve your business cases and get the most
//       significant value out of your budget. One of our hallmarks is that we
//       take the time to understand your company's unique challenges and
//       needs.
//     </p>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
//     <div className="flex flex-col-reverse gap-2 items-center justify-center">
//       <h2 className="text-xl font-bold ">Qualified Expertise</h2>
//       <Lottie
//         className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px]"
//         animationData={Animation4}
//         loop={true}
//       />
//     </div>
//     <div className="flex flex-col-reverse gap-2 items-center justify-center">
//       <h2 className="text-xl  font-bold "></h2>
//       <Lottie
//         className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px]"
//         animationData={Animation2}
//         loop={true}
//       />
//     </div>
//     <div className="flex flex-col-reverse gap-2 items-center justify-center">
//       <h2 className="text-xl  font-bold "></h2>
//       <Lottie
//         className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px]"
//         animationData={Animation1}
//         loop={true}
//       />
//     </div>
//     <div className="flex flex-col-reverse gap-2 items-center justify-center">
//       <h2 className="text-xl  font-bold "></h2>
//       <Lottie
//         className="lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] w-[220px] h-[220px]"
//         animationData={Animation3}
//         loop={true}
//       />
//     </div>
//   </div>
// </section>
