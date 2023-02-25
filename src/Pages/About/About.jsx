import React from "react";
import Image from "./HeroSectionOfBrightFuture.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <h2 className="text-center  text-[32px] lg:text-4xl mb-10 text-sty">
        About
        <span className="text-[#3B80B8] "> Bright-Future</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-5 justify-between items-center">
        <div className="w-[40%]">
          <img className="rounded-lg drop-shadow-lg" src={Image} alt="" />
        </div>
        <div className=" lg:w-2/4">
          <h1 className="text-2xl  font-bold py-5">
            Bright Future For Your Bright Solution
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            aliquid eius ad omnis animi sit quae repudiandae tenetur debitis,
            facere voluptatum amet veritatis minus natus dicta tempore rem?
            Fugiat atque eveniet a, distinctio vel, quas repellendus ab ratione
            beatae porro libero, odio modi neque unde debitis laudantium ullam.
            Veniam id numquam labore obcaecati consectetur molestiae beatae
            tempora eligendi voluptates accusamus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
