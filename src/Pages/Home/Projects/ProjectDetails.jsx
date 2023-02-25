import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import ContactForm from "../../ContactForm/ContactForm";

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
    <section>
      <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col gap-y-10">
          <div>
            <img src={item?.detailsImg} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-5">
              Project Name:
              <span className="font-mono text-[#FCA503]  text-3xl pl-2">
                {item.name}
              </span>
            </h2>
            <p className="text-xl">
              <span className="font-bold mr-2">About:</span>
              <span className="font-mono">{item.feature}</span>
            </p>
            <div className="my-5">
              <p>
                <span className="font-bold text-xl">Technology Used:</span>
                {item?.tech.map((t, i) => (
                  <>
                    <button className="btn btn-sm text-white ml-2 cursor-default">
                      {t}
                    </button>
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
        <Link to="/#projects">
          <button className="flex justify-center items-center gap-x-2 font-mono font-bold btn btn-sm bg-[#FCA503] hover:bg-[#6e4800] hover:text-white border-0 text-black">
            <FaHome></FaHome> Back to Home
          </button>
        </Link>
      </section>
      <ContactForm></ContactForm>
    </section>
  );
};

export default ProjectDetails;
