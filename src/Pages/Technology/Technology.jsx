import React from "react";
import TimeLine from "../TimeLine";

const Technology = () => {
  const technologies = [
    {
      name: "JavaScript",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpyhE72TORjuLw4w8VsDVNJeQy04VFqPLFg&usqp=CAU",
    },
    {
      name: "ReactJS",
      img: "https://cdn.dribbble.com/users/14814/screenshots/16535574/reactlogo_4x.png",
    },
    {
      name: "NodeJS",
      img: "https://swall.teahub.io/photos/small/303-3030786_node-js.jpg",
    },
    {
      name: "ExpressJS",
      img: "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    },
    {
      name: "Mongodb",
      img: "https://www.pngitem.com/pimgs/m/385-3850359_icon-mongodb-logo-hd-png-download.png",
    },
    {
      name: "Mongoose",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU7OThk_FsW2_Jtca19h1wUYqgq50zlnTlDxN7TJ4xf9b54jhqrxE2NmQaPhqlo00BAE&usqp=CAU",
    },
    {
      name: "Tailwind CSS",
      img: "https://wp.5balloons.info/wp-content/uploads/2022/06/install-tailwindcss.png",
    },
  ];
  return (
    <div className="px-4 py-5 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="mb-10">
        <h2 className=" text-[26px] lg:text-4xl font-[700] text-sty text-center ">
          Our <span className="text-[#A737D5] drop-shadow-md">Technology</span>{" "}
          and <span className="text-[#A737D5] drop-shadow-md">Tools</span>
        </h2>
        <p className="mt-8 lg:w-8/12 mx-auto">
          We Use modern and update tech for our clients Those are most popular
          and demandable to user and customer.
        </p>
      </div>

      <TimeLine></TimeLine>
      {/* <section className="mt-3 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {technologies.map((technology) => {
          const { name, img } = technology;
          return (
            <div className="shadow p-3 text-center">
              <figure>
                <img
                  src={img}
                  className="h-[150px] w-[150px] mx-auto rounded"
                  alt=""
                />
              </figure>
              <h3 className="text-[26px] font-[500] my-2 text-slate-800">
                {name}
              </h3>
            </div>
          );
        })}
      </section> */}
    </div>
  );
};

export default Technology;
