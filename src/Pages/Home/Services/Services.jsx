import React from "react";
import Lottie from "lottie-react";

import AppDev from "./app.json";
import FullStack from "./web.json";
import UiUx from "./fullstack.json";
import WebDev from "./uiux.json";

const Services = () => {
  return (
    <section
      id="services"
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h2 className="text-sty  text-[32px] lg:text-4xl font-[700]  text-center mb-10 drop-shadow-md">
        <span className="text-[#3B80B8] drop-shadow-md">Services</span> We
        Provide
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white drop-shadow-sm flex flex-col justify-between hover:border-2 hover:border-[#f8d30067]">
          <div className="shadow-sm bg-[#fe9105] rounded-r-full">
            <Lottie
              className="w-full h-[250px] mx-auto"
              animationData={UiUx}
              loop={true}
            />
          </div>
          <div className=" pt-2 pb-0">
            <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
              Ui/Ux Design
            </h4>
            <p className="px-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
              Get Start With Us
            </button>
          </div>
        </div>

        <div className="bg-white drop-shadow-sm flex flex-col rounded-xl hover:border-2 hover:border-[#f8d30067]">
          <div className="drop-shadow-lg bg-[#fe9105] rounded-l-full">
            <Lottie
              className="w-full h-[250px] mx-auto"
              animationData={AppDev}
              loop={true}
            />
          </div>
          <div className="bg-[] pt-2 pb-0">
            <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
              App Development
            </h4>
            <p className="px-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
              Get Start With Us
            </button>
          </div>
        </div>

        <div className="bg-white drop-shadow-sm flex flex-col rounded-xl hover:border-2 hover:border-[#f8d30067]">
          <div className="drop-shadow-lg bg-[#fe9105] rounded-r-full">
            <Lottie
              className="w-full h-[250px] mx-auto"
              animationData={FullStack}
              loop={true}
            />
          </div>
          <div className="bg-[] pt-2 pb-0">
            <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
              Full Stack
            </h4>
            <p className="px-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
              Get Start With Us
            </button>
          </div>
        </div>

        <div className="bg-white drop-shadow-sm flex flex-col rounded-xl hover:border-2 hover:border-[#f8d30067]">
          <div className="drop-shadow-lg bg-[#fe9105] rounded-l-full">
            <Lottie
              className="w-full h-[250px] mx-auto"
              animationData={WebDev}
              loop={true}
            />
          </div>
          <div className="bg-[] pt-2 pb-0">
            <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
              Web Development
            </h4>
            <p className="px-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
              Get Start With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
