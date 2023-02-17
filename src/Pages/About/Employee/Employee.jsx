import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

const Employee = () => {
  const [employees, SetEmployees] = useState();
  useEffect(() => {
    fetch("employees.json")
      .then((res) => res.json())
      .then((data) => SetEmployees(data));
  }, []);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="block lg:flex justify-between items-center">
        <div className=" lg:w-[45%]">
          <h2 className="text-4xl font-bold font-mono pb-5 text-[#3B80B8] drop-shadow-md">
            Our Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            deleniti nemo nulla quod et laboriosam inventore tempore dolorem
            corrupti eveniet hic saepe, ipsam fugiat, architecto nihil ipsum
            dolorum officiis aliquam quasi! Tempore, maxime tenetur reiciendis
            sint sed voluptate qui blanditiis placeat veritatis perspiciatis rem
            illo vitae porro voluptas, fugiat debitis?
          </p>
        </div>
        <div className="mx-auto">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {employees?.map((employee) => (
              <SwiperSlide>
                <EmployeeCard
                  key={employee._id}
                  employee={employee}
                ></EmployeeCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* {employees?.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee}></EmployeeCard>
      ))} */}
    </div>
  );
};

export default Employee;
