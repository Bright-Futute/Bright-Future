import React, { useState } from "react";
import Lottie from "lottie-react";
import AppDev from "./app.json";
import FullStack from "./web.json";
import UiUx from "./fullstack.json";
import WebDev from "./uiux.json";

const Services = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const services = [
    {
      id: "1",
      serviceName: "Ui/Ux Design",
      img: UiUx,
      description:
        "We offer UI/UX design services for software, websites, and dashboards. Our designs are created using Figma, ensuring high-quality and user-friendly interfaces. Let us help you enhance your user experience and create a visually appealing product.",
    },
    {
      id: "2",
      serviceName: "Web Development",
      img: WebDev,
      description:
        "We offer comprehensive web development services tailored to your needs, from simple static pages to complex dynamic websites. Our experienced team uses the latest technologies and tools to deliver high-quality results on time and within budget. Contact us today to bring your online presence to life.",
    },
    {
      id: "3",
      serviceName: "Full Stack",
      img: FullStack,
      description:
        "Our full-stack development service provides end-to-end solutions for your software needs. From planning to deployment, we handle it all with our team of experts. Whether it's a web or mobile app, we ensure smooth functionality and user experience. Leave the technicalities to us and focus on growing your business.",
    },
    {
      id: "4",
      serviceName: "App Development",
      img: AppDev,
      description:
        "We develop legal software for you! Our app development services cover all your needs, ensuring a seamless experience for your users. From ideation to launch, we've got you covered. Our team is experienced in creating high-quality apps that are tailored to your specific needs. Get started today and let us help bring your ideas to life!",
    },
  ];
  return (
    <section
      id="services"
      className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h2 className="text-sty text-[26px] lg:text-4xl font-[700]  text-center mb-10 drop-shadow-md">
        <span className="text-[#A737D5] drop-shadow-md">Services</span> We
        Provide
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services?.map(({ id, img, serviceName, description }) => (
          <div className="bg-[#001E00] hover:shadow-inner rounded-xl hover:shadow-[#A737D5] drop-shadow-xl flex flex-col justify-between w-full sm:w-auto mx-auto">
            <div>
              <div className="w-10/12 mx-auto">
                <Lottie
                  className="w-full h-[250px] mx-auto"
                  animationData={img}
                  loop={true}
                />
              </div>
              <div className=" pt-2 text-white text-center w-full mx-auto">
                <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 ">
                  {serviceName}
                </h4>

                <p className="px-4 text-justify">
                  {readMore ? description : `${description.slice(0, 80)}...`}
                  {description.length > 80 && (
                    <button
                      className="font-semibold text-[#fa51d0]"
                      onClick={toggleReadMore}
                    >
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>
              </div>
            </div>
            <button className="w-3/4 mx-auto py-3 rounded-full bg-[#CB40A8] hover:bg-[#A737D5] text-white my-5">
              Get Start With Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
