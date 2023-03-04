import React, { useState } from "react";
import Lottie from "lottie-react";
import AppDev from "./app.json";
import FullStack from "./web.json";
import UiUx from "./fullstack.json";
import WebDev from "./uiux.json";

const Services = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

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
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h2 className="text-sty  text-[32px] lg:text-4xl font-[700]  text-center mb-10 drop-shadow-md">
        <span className="text-[#3B80B8] drop-shadow-md">Services</span> We
        Provide
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services?.map((service) => (
          <div className="bg-white drop-shadow-sm flex flex-col justify-between hover:border-2 hover:border-[#f8d30067]">
            <div className="shadow-sm bg-[#fe9105] rounded-r-full">
              <Lottie
                className="w-full h-[250px] mx-auto"
                animationData={service.img}
                loop={true}
              />
            </div>
            <div className=" pt-2 pb-0">
              <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
                {service.serviceName}
              </h4>

              {showFullDescription ? (
                <p className="px-5 text-justify">{service.description}</p>
              ) : (
                <p className="truncate px-5 text-justify">
                  {service.description}
                </p>
              )}
              {service.description?.length > 120 && (
                <button
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-2"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Read less" : "Read more"}
                </button>
              )}
              <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
                Get Start With Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
{
  /*  */
}

// {/*
//         <div className="bg-white drop-shadow-sm flex flex-col hover:border-2 hover:border-[#f8d30067]">
//           <div className="drop-shadow-lg bg-[#fe9105] rounded-l-full">
//             <Lottie
//               className="w-full h-[250px] mx-auto"
//               animationData={AppDev}
//               loop={true}
//             />
//           </div>
//           <div className="bg-[] pt-2 pb-0">
//             <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
//               App Development
//             </h4>
//             <p className="px-5 text-justify">
//               We develop legal software for you! Our app development services
//               cover all your needs, ensuring a seamless experience for your
//               users. From ideation to launch, we've got you covered. Our team is
//               experienced in creating high-quality apps that are tailored to
//               your specific needs. Get started today and let us help bring your
//               ideas to life!
//             </p>
//             <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
//               Get Start With Us
//             </button>
//           </div>
//         </div>

//         <div className="bg-white drop-shadow-sm flex flex-col hover:border-2 hover:border-[#f8d30067]">
//           <div className="drop-shadow-lg bg-[#fe9105] rounded-r-full">
//             <Lottie
//               className="w-full h-[250px] mx-auto"
//               animationData={FullStack}
//               loop={true}
//             />
//           </div>
//           <div className="bg-[] pt-2 pb-0">
//             <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
//               Full Stack
//             </h4>
//             <p className="px-5 text-justify">
//               Our full-stack development service provides end-to-end solutions
//               for your software needs. From planning to deployment, we handle it
//               all with our team of experts. Whether it's a web or mobile app, we
//               ensure smooth functionality and user experience. Leave the
//               technicalities to us and focus on growing your business.
//             </p>
//             <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
//               Get Start With Us
//             </button>
//           </div>
//         </div>

//         <div className="bg-white drop-shadow-sm flex flex-col hover:border-2 hover:border-[#f8d30067]">
//           <div className="drop-shadow-lg bg-[#fe9105] rounded-l-full">
//             <Lottie
//               className="w-full h-[250px] mx-auto"
//               animationData={WebDev}
//               loop={true}
//             />
//           </div>
//           <div className="bg-[] pt-2 pb-0">
//             <h4 className="text-xl mt-4 px-5 text-center font-bold mb-3 text-[#3B80B8]">
//               Web Development
//             </h4>
//             <p className="px-5 text-justify">
//               We offer comprehensive web development services tailored to your
//               needs, from simple static pages to complex dynamic websites. Our
//               experienced team uses the latest technologies and tools to deliver
//               high-quality results on time and within budget. Contact us today
//               to bring your online presence to life
//             </p>
//             <button className="mt-5 w-full bg-[#fe9105] py-2 text-white rounded-b-sm font-bold">
//               Get Start With Us
//             </button>
//           </div>
//         </div> */}
