import React from "react";
import Image from "./HeroSectionOfBrightFuture.jpg";
const About = () => {
  return (
    <section id="about" className="lg:py-10 lg:pb-10">
      <h2 className="text-center text-[40px] lg:text-[48px] font-mono font-bold lg:py-20">
        About
        <span className="text-[#3B80B8] font-extrabold">Bright-Future</span>
      </h2>

      <div className="flex flex-col lg:flex-row px-10 gap-y-10 lg:gap-x-5">
        <div className=" lg:w-2/4 py-20">
          <h1 className="text-2xl font-mono font-bold py-5">
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
        <img className="lg:w-2/4 rounded-lg" src={Image} alt="" />
      </div>
    </section>
  );
};

export default About;
