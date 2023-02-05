import React from "react";
const Hero = () => {
  return (
    <section className="max-h-[100px bg-blue-4 mt-32 container ">
      <div className="block lg:flex  items-cen px-8 py-8 bg-blue-5 mx-auto shadow-xl">
        <aside className="text-black    lg:w-[55%] mx-auto  ">
          <h1 className="flex flex-col gap-5 font-serif text-5xl font-[800]">
            <span> We Are Professional</span>

            <span> Design & Development</span>

            <span>Service Provider.</span>
          </h1>
          <ul className="mt-3 text-[24px] flex flex-col gap-[10px] font-[500] ">
            <li>@ Client Management</li>
            <li>@ Develop and Designing </li>
            <li>@ Web Aplication Based Interface</li>
          </ul>
          <button className=" my-4 bg-blue-500 px-2 py-3 font-semibold rounded text-xl text-white">
            More About Us
          </button>
        </aside>
        <figure className="lg:w-[45%] mx-auto">
          <img
            src="https://www.dhakasolution.com/img/header-img.webp"
            className="h-[450px] w-[500px]"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
