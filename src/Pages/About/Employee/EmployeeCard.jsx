import React from "react";
import "./employeeCadCSS.css";
import { BsLinkedin } from "react-icons/bs";

const EmployeeCard = ({ employee }) => {
  const { name, position, linkedin, img } = employee;

  // const bgImg = {
  //   backgroundImage: `url(${img})`,
  //   backgroundColor: "#cccccc",
  //   height: "500px",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // };
  return (
    <div className="card h-[433px] w-[310px]">
      <img src={img} alt="Employee" className="card-img p-0" />
      <div className="card-body text-white flex flex-col justify-end text-center font-mono">
        <h3 className="text-3xl font-bold text-white">{name}</h3>
        <h5>{position}</h5>
        <a
          target="_blank"
          rel="noreferrer"
          href={linkedin}
          className="mx-auto mt-5"
        >
          <BsLinkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default EmployeeCard;
