import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestStyle from "./testimonialStyle.module.css";

// import required modules
import { Keyboard, Autoplay } from "swiper";

const Testimonial = () => {
  return (
    <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <h6 className="text-center text-gray-700 uppercase  text-sm font-bold">
          Testimonials
        </h6>
        <h2 className="text-sty mt-2  text-[26px] lg:text-4xl font-[700]  text-center drop-shadow-md">
          We do people love{" "}
          <span className="text-[#A737D5] drop-shadow-md">Bright Future</span>?
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Keyboard, Autoplay]}
          className={TestStyle.swiperTestimonial}
        >
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight ">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className={TestStyle.swiperSlideTestimonial}>
            <section className="my-8 bg-[#001E00] py-5">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <h4 className="text-xl font-bold text-white">Company Name</h4>
                <p className="px-6 text-center lg:max-w-2xl xl:max-w-4xl text-gray-300">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white leading-tight">Leroy Jenkins</p>
                    <p className="text-sm leading-tight dark:text-gray-300">
                      Founder, Company
                    </p>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
