import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Typical from "react-typical";
import Lottie from "lottie-react";
import Image from "./web.json";
import Scroll from "./scroll-site-dot.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroStyle from "./hero.module.css";

// import required modules
import { Autoplay } from "swiper";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = currentScrollPos > 0;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-img py-10">
      <div className="px-4 py-16 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=""
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center xl:flex-row mb-32">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:w-7/12 mx-auto lg:mx-0 text-center sm:text-start ">
                <h2 className="mb-6 font-[Kanit] text-4xl tracking-tight text-white sm:text-5xl font-[700] leading-8 uppercase hero-h2-margin">
                  <span className="sm:text-5xl text-4xl font-medium">
                    We Are Professional
                  </span>
                  <br className="" />
                  <span className="text-[#A737D5] text-sty text-4xl">
                    Design & Development
                  </span>{" "}
                  <br className="" />
                  <span className="sm:text-5xl text-4xl font-medium">
                    Service Provider
                  </span>
                </h2>
                <div className="">
                  <Typical
                    className="max-w-xl mb-4 text-base text-[#ffffff] md:text-lg block"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Client Management",
                      5000,
                      "Develop and Designing",
                      6000,
                      "Web Application Based Interface",
                      6000,
                    ]}
                  ></Typical>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[#ffffff]"
                  >
                    Let's Work Together
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 lg:flex lg:justify-end">
                <Lottie
                  className="lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] mx-auto lg:mx-0  "
                  animationData={Image}
                  loop={true}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center xl:flex-row mb-32 ">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:w-7/12 mx-auto lg:mx-0 text-center sm:text-start">
                <h2 className="mb-6 font-[Kanit] text-4xl tracking-tight text-white sm:text-5xl font-[700] leading-8 uppercase hero-h2-margin">
                  <span className="sm:text-5xl text-4xl font-medium">
                    We Are Professional
                  </span>
                  <br className="" />
                  <span className="text-[#A737D5] text-sty text-4xl">
                    Design & Development
                  </span>{" "}
                  <br className="" />
                  <span className="sm:text-5xl text-4xl font-medium">
                    Service Provider
                  </span>
                </h2>
                <div className="">
                  <Typical
                    className="max-w-xl mb-4 text-base text-[#ffffff] md:text-lg block"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Client Management",
                      5000,
                      "Develop and Designing",
                      6000,
                      "Web Application Based Interface",
                      6000,
                    ]}
                  ></Typical>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[#ffffff]"
                  >
                    Let's Work Together
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 flex justify-end">
                <Lottie
                  className="lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] mx-auto lg:mx-0  "
                  animationData={Image}
                  loop={true}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center xl:flex-row mb-32 ">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:w-7/12 mx-auto lg:mx-0 text-center sm:text-start">
                <h2 className="mb-6 font-[Kanit] text-4xl tracking-tight text-white sm:text-5xl font-[700] leading-8 uppercase hero-h2-margin">
                  <span className="sm:text-5xl text-4xl font-medium">
                    We Are Professional
                  </span>
                  <br className="" />
                  <span className="text-[#A737D5] text-sty text-4xl">
                    Design & Development
                  </span>{" "}
                  <br className="" />
                  <span className="sm:text-5xl text-4xl font-medium">
                    Service Provider
                  </span>
                </h2>
                <div className="">
                  <Typical
                    className="max-w-xl mb-4 text-base text-[#ffffff] md:text-lg block"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Client Management",
                      5000,
                      "Develop and Designing",
                      6000,
                      "Web Application Based Interface",
                      6000,
                    ]}
                  ></Typical>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[#ffffff]"
                  >
                    Let's Work Together
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 flex justify-end">
                <Lottie
                  className="lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] mx-auto lg:mx-0  "
                  animationData={Image}
                  loop={true}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center xl:flex-row mb-32 ">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:w-7/12 mx-auto lg:mx-0 text-center sm:text-start">
                <h2 className="mb-6 font-[Kanit] text-4xl tracking-tight text-white sm:text-5xl font-[700] leading-8 uppercase hero-h2-margin">
                  <span className="sm:text-5xl text-4xl font-medium">
                    We Are Professional
                  </span>
                  <br className="" />
                  <span className="text-[#A737D5] text-sty text-4xl">
                    Design & Development
                  </span>{" "}
                  <br className="" />
                  <span className="sm:text-5xl text-4xl font-medium">
                    Service Provider
                  </span>
                </h2>
                <div className="">
                  <Typical
                    className="max-w-xl mb-4 text-base text-[#ffffff] md:text-lg block"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Client Management",
                      5000,
                      "Develop and Designing",
                      6000,
                      "Web Application Based Interface",
                      6000,
                    ]}
                  ></Typical>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-[#fff]"
                  >
                    Let's Work Together
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 flex justify-end">
                <Lottie
                  className="lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] mx-auto lg:mx-0 "
                  animationData={Image}
                  loop={true}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className={`scroll-down-btn ${isVisible ? "" : "show"}`}>
          <Lottie
            className="w-20 absolute -bottom-3 right-5"
            animationData={Scroll}
            loop={true}
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;