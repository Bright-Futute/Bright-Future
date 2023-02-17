import React from "react";

const EmployeeCard = ({ employee }) => {
  const { name, position, linkedin, img } = employee;
  return (
    <div className="flex flex-col">
      <div className="w-[45%] mx-auto">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <h3>{name}</h3>
        <h5>{position}</h5>
        <a href={linkedin}>Linkedin</a>
      </div>
      {/* <figure className="">
        <img src={img} alt="" className="rounded-xl mx-auto w-max h-20" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm font-light">{position}</p>
        <a href={linkedin}>Linkedin</a>
      </div> */}
    </div>
  );
};

export default EmployeeCard;
