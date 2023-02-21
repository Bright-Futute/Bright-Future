import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./styles.module.css";

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
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono pb-5 text-[#3B80B8] drop-shadow-md">
          Our Team
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className="mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.swiper}
        >
          {employees?.map((employee) => (
            <SwiperSlide key={employee._id} className={styles.swiperSlide}>
              <EmployeeCard employee={employee}></EmployeeCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Employee;
