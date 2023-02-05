import React from "react";

const Services = () => {
  const services = [
    {
      name: "Web Development",
      img: "https://img.freepik.com/free-photo/network-graphic-overlay-banner-laptop_53876-120748.jpg?w=996&t=st=1675521906~exp=1675522506~hmac=58fd3ad04ad0f6a5386b7def2a675e30b83fdfcc5892d5ca3e7df3bb49b4ccb1 ",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
    {
      name: "Web Design ",
      img: "https://img.freepik.com/free-photo/web-design-website-coding-concept_53876-64988.jpg?w=900&t=st=1675521846~exp=1675522446~hmac=ae488eb6108ccd081ed1edbdecc9cbf28f428a2105029e6ee5b888a863c510e8",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
    {
      name: "App Development",
      img: "https://img.freepik.com/free-photo/technology-app-development-wireless-e-commerce_53876-124044.jpg?w=1060&t=st=1675522366~exp=1675522966~hmac=667abdd2d89c66f7fa05438bb86fe5168fdd0f0c7bd3c205f80a59a19fe65266",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
    {
      name: "Full Stack Services",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1675522505~exp=1675523105~hmac=7bfee447c7da80244e60154789eea96aaa336fbcb8f0fbb77110670fa9b0ed09",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae ",
    },
  ];

  return (
    <div className=" bg-blue-40 mt-5 px-6 container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
      {services.map((service) => {
        const { img, name, details } = service;

        return (
          <div className="p-2 shadow-xl flex text-center">
            <img
              className="h-[200px] w-[220px] rounded-full mx-auto"
              src={img}
              alt=""
            />
            <div className="px-3 py-1">
              <h1 className="text-2xl font-bold font-serif">{name}</h1>
              <p>{details}</p>
              <button className="my-3 bg-blue-500 px-3 py-3 text-white rounded text-x font-bold">
                Go Projects
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
