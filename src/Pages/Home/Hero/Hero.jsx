import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Typical from "react-typical";
import Image from "./web.json";
import { NavHashLink as Link } from "react-router-hash-link";
import Lottie from "lottie-react";

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
    <div className="relative bg-no-repeat">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-[#001E00] backdrop-blur-sm">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
          npm
          st
        >
          <path
            fill="white"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
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
              <div className="lg:flex justify-around items-center ">
                <aside className="text-black">
                  <h1 className=" text-[30px]  text-white font-[Kanit] lg:text-5xl font-[600] text-center lg:text-start ">
                    We Are Professional <br />
                    <span className="text-[#3B80B8] text-sty">
                      Design & Development
                    </span>
                    <br />
                    Service Provider
                  </h1>
                  <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                    <Typical
                      className="lg:text-left md:text-left text-center text-left text-2xl text-[#f8d400]"
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "Client Management",
                        1000,
                        "Develop and Designing",
                        2000,
                        "Web Application Based Interface",
                        2000,
                      ]}
                    ></Typical>
                  </ul>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#contact"
                  >
                    <button
                      className="text-gray-100
                      my-4 bg-[#fe9105] hover:bg-[#3B80B8] hover:duration-700 px-3 py-3 font-semibold rounded text-xl"
                    >
                      Let's Work Together
                    </button>
                  </Link>
                </aside>
                <Lottie
                  className="lg:w-[420px] lg:h-[420px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
                  animationData={Image}
                  loop={true}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center align-middle">
                <aside className="text-black">
                  <h1 className=" text-[30px]  text-white font-[Kanit] lg:text-5xl font-[800] text-center lg:text-start  leading-8">
                    We Are Professional <br />
                    <span className="text-[#3B80B8] text-sty">
                      Design & Development
                    </span>
                    <br />
                    Service Provider
                  </h1>
                  <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                    <Typical
                      className="lg:text-left md:text-left text-center text-2xl text-[#f8d400]"
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "Client Management",
                        1000,
                        "Develop and Designing",
                        2000,
                        "Web Application Based Interface",
                        2000,
                      ]}
                    ></Typical>
                  </ul>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#contact"
                  >
                    <button
                      className="text-gray-100
                     my-4 bg-[#fe9105] hover:bg-[#3B80B8] hover:duration-700 px-3 py-3 font-semibold rounded text-xl "
                    >
                      Let's Work Together
                    </button>
                  </Link>
                </aside>
                <Lottie
                  className="lg:w-[420px] lg:h-[420px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
                  animationData={Image}
                  loop={true}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:flex justify-around items-center ">
                <aside className="text-black">
                  <h1 className=" text-[30px]  text-white font-[Kanit] lg:text-5xl font-[800] text-center lg:text-start  leading-8">
                    We Are Professional <br />
                    <span className="text-[#3B80B8] text-sty">
                      Design & Development
                    </span>
                    <br />
                    Service Provider
                  </h1>
                  <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                    <Typical
                      className="lg:text-left md:text-left text-center text-left text-2xl text-[#f8d400]"
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "Client Management",
                        1000,
                        "Develop and Designing",
                        2000,
                        "Web Application Based Interface",
                        2000,
                      ]}
                    ></Typical>
                  </ul>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#contact"
                  >
                    <button
                      className="text-gray-100
                      my-4 bg-[#fe9105] hover:bg-[#3B80B8] hover:duration-700 px-3 py-3 font-semibold rounded text-xl"
                    >
                      Let's Work Together
                    </button>
                  </Link>
                </aside>
                <Lottie
                  className="lg:w-[420px] lg:h-[420px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
                  animationData={Image}
                  loop={true}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:flex justify-around items-center ">
                <aside className="text-black">
                  <h1 className=" text-[30px]  text-white font-[Kanit] lg:text-5xl font-[800] text-center lg:text-start  leading-8">
                    We Are Professional <br />
                    <span className="text-[#3B80B8] text-sty">
                      Design & Development
                    </span>
                    <br />
                    Service Provider
                  </h1>
                  <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                    <Typical
                      className="lg:text-left md:text-left text-center text-left text-2xl text-[#f8d400]"
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "Client Management",
                        1000,
                        "Develop and Designing",
                        2000,
                        "Web Application Based Interface",
                        2000,
                      ]}
                    ></Typical>
                  </ul>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#contact"
                  >
                    <button
                      className="text-gray-100
                      my-4 bg-[#fe9105] hover:bg-[#3B80B8] hover:duration-700 px-3 py-3 font-semibold rounded text-xl"
                    >
                      Let's Work Together
                    </button>
                  </Link>
                </aside>
                <Lottie
                  className="lg:w-[420px] lg:h-[420px] md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
                  animationData={Image}
                  loop={true}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <button className={`scroll-down-btn ${isVisible ? "" : "show"}`}>
            <FaArrowDown className="fill-[#fe9205c8]" />
          </button>
        </div>
        <div className="bg-white w-full h-2 absolute -bottom-1"></div>
      </div>
    </div>
  );
};

export default Hero;
