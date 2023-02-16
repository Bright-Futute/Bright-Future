import React from "react";

const EmployeeCard = ({ employee }) => {
  const { name, position, linkedin } = employee;
  return (
    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-20 h-20 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src=""
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p class="text-gray-700 text-base mb-4">{position}</p>
          <a href={linkedin}>Linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
