import React from "react";
import app from "./img/app.png";
import webDes from "./img/webDes.png";
import webDev from "./img/webDev.png";
import fullStack from "./img/full-stack.png";

const Services = () => {
  const services = [
    {
      name: "Web Design ",
      img: `${webDes}`,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
    {
      name: "Web Development",
      img: `${webDev}`,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },

    {
      name: "Full Stack",
      img: `${fullStack}`,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
    {
      name: "App Development",
      img: `${app}`,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
  ];

  return (
    <section
      id="services"
      className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h2 className="text-4xl text-gray-700 font-bold font-mono text-center pb-5 drop-shadow-md">
        <span className="text-[#3B80B8] drop-shadow-md">Services</span> We
        Provide
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {services.map((service) => {
          const { img, name, details } = service;
          return (
            <div className="bg-[#ffffffdb] drop-shadow-sm flex flex-col rounded hover:drop-shadow-lg">
              <img
                className="h-[100px] w-[100px] drop-shadow-md mx-auto my-8"
                src={img}
                alt=""
              />
              <div className="bg-[#f6f6f6f8] pt-2 pb-0">
                <h1 className="text-2xl px-5 text-center font-bold mb-3 font-mono underline text-[#3B80B8]">
                  {name}
                </h1>
                <p className="px-5 text-justify">{details}</p>
                <button className="mt-5 w-full bg-[#fe9105] hover:bg-[#f9c301] py-2 text-white rounded-b-sm font-bold font-mono">
                  Get Start With Us
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
