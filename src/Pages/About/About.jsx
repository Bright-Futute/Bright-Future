import React from "react";
import Image from "./HeroSectionOfBrightFuture.jpg";
const About = () => {
  return (
    <section className="py-10 pb-10">
      <h2 className="text-center text-[52px] font-mono font-bold py-20">
        About Bright-Future
      </h2>

      <div className="flex px-10 gap-x-5">
        <div className="w-2/4 ">
          <h1 className="text-2xl font-mono font-bold">
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
        <img className="w-2/4 rounded-lg" src={Image} alt="" />
      </div>
    </section>
  );
};

export default About;
