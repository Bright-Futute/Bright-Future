import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setItem(data.find((item) => item._id === parseInt(id))));
  }, [id]);
  console.log(item);
  if (!item) {
    return (
      <div className="text-medium text-center py-24 font-mono text-2xl text-[#FCA503]">
        Loading...
      </div>
    );
  }

  console.log(item?.tech);
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="container px-6 py-10 mx-auto">
        <div className="">
          <img
            src={item?.detailsImg1}
            className="object-center w-full h-96 rounded-lg lg:h-[36rem]"
            alt="from img"
          />
        </div>
      </div>
      <div>
        <img src="./projectAssets/ema-jhon-mobile.png" alt="" />
      </div>

      <div>
        <h2 className="text-3xl font-mono font-bold ">
          Project Name: <span className="text-[#FCA503]">{item.name}</span>
        </h2>
        <p className="font-mono font-semibold">Details: {item.feature}</p>
        {/* {item?.tech((t) => console.log(t))} */}
      </div>
      <Link to="/">
        <button className="btn btn-sm text-[#FCA503]">Back to Home</button>
      </Link>
    </section>
  );
};

export default ProjectDetails;
