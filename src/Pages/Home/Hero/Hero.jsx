import React from "react";
import Lottie from "lottie-react";
import Typical from "react-typical";
import Image from "./web.json";
import { NavHashLink as Link } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroStyle from "./hero.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className=""
      >
        <SwiperSlide>
          <div className="lg:flex justify-around items-center ">
            <aside className="text-black">
              <h1 className="font-mono text-[30px] text-white lg:text-5xl font-[800] text-center lg:text-start">
                We Are Professional <br />
                <span className="text-[#3B80B8]">Design & Development</span>
                <br />
                Service Provider
              </h1>
              <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                <Typical
                  className="text-left text-2xl text-[#f8d400]"
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
              <Link smooth={true} duration={1000} delay={1000} to="/#contact">
                <button className=" my-4 bg-[#fe9105] hover:bg-[#f9c301] px-3 py-3 font-semibold rounded text-xl text-white font-mono">
                  Let's Work Together
                </button>
              </Link>
            </aside>
            <Lottie
              className="lg:w-[420px] lg:h-[420px]"
              animationData={Image}
              loop={true}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex justify-around items-center ">
            <aside className="text-black">
              <h1 className="font-mono text-[30px] text-white lg:text-5xl font-[800] text-center lg:text-start">
                We Are Professional <br />
                <span className="text-[#3B80B8]">Design & Development</span>
                <br />
                Service Provider
              </h1>
              <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                <Typical
                  className="text-left text-2xl text-[#f8d400]"
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
              <Link smooth={true} duration={1000} delay={1000} to="/#contact">
                <button className=" my-4 bg-[#fe9105] hover:bg-[#f9c301] px-3 py-3 font-semibold rounded text-xl text-white font-mono">
                  Let's Work Together
                </button>
              </Link>
            </aside>
            <Lottie
              className="lg:w-[420px] lg:h-[420px]"
              animationData={Image}
              loop={true}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex justify-around items-center ">
            <aside className="text-black">
              <h1 className="font-mono text-[30px] text-white lg:text-5xl font-[800] text-center lg:text-start">
                We Are Professional <br />
                <span className="text-[#3B80B8]">Design & Development</span>
                <br />
                Service Provider
              </h1>
              <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                <Typical
                  className="text-left text-2xl text-[#f8d400]"
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
              <Link smooth={true} duration={1000} delay={1000} to="/#contact">
                <button className=" my-4 bg-[#fe9105] hover:bg-[#f9c301] px-3 py-3 font-semibold rounded text-xl text-white font-mono">
                  Let's Work Together
                </button>
              </Link>
            </aside>
            <Lottie
              className="lg:w-[420px] lg:h-[420px]"
              animationData={Image}
              loop={true}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex justify-around items-center ">
            <aside className="text-black">
              <h1 className="font-mono text-[30px] text-white lg:text-5xl font-[800] text-center lg:text-start">
                We Are Professional <br />
                <span className="text-[#3B80B8]">Design & Development</span>
                <br />
                Service Provider
              </h1>
              <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
                <Typical
                  className="text-left text-2xl text-[#f8d400]"
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
              <Link smooth={true} duration={1000} delay={1000} to="/#contact">
                <button className=" my-4 bg-[#fe9105] hover:bg-[#f9c301] px-3 py-3 font-semibold rounded text-xl text-white font-mono">
                  Let's Work Together
                </button>
              </Link>
            </aside>
            <Lottie
              className="lg:w-[420px] lg:h-[420px]"
              animationData={Image}
              loop={true}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
