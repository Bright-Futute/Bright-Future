import Lottie from "lottie-react";
import React from "react";
import Typical from "react-typical";
import Image from "./web.json";
const Hero = () => {
  return (
    <section className="mt-32 container -z-50">
      <div className="block lg:flex  items-cen p-8 mx-auto">
        <aside className="text-black lg:w-[55%] mx-auto ">
          <h1 className="flex flex-col gap-2 font-serif text-4xl font-[800] w-3/4 my-10">
            <span> We Are Professional</span>

            <span> Design & Development</span>

            <span>Service Provider.</span>
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
          <button className=" my-4 bg-blue-500 px-2 py-3 font-semibold rounded text-xl text-white">
            More About Us
          </button>
        </aside>
        <Lottie
          className="w-[500px] h-[500px]"
          animationData={Image}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
