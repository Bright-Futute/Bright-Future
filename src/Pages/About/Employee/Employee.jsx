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
    <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex justify-center items-center relative">
        <h2 className="text-[72px] tracking-widest pb-5 text-[#A737D5] drop-shadow-md text-modeChange absolute lg:left-[230px] md:left-[5px] left-[5px] unique-font">
          our team
        </h2>
        <div className="">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.swiper}
          >
            {employees?.map((employee) => (
              <SwiperSlide className={styles.swiperSlide}>
                <EmployeeCard
                  key={employee._id}
                  employee={employee}
                ></EmployeeCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h2 className="text-[72px] tracking-widest pb-5 text-[#CB40A8] drop-shadow-md text-modeChangeR absolute lg:right-[230px] md:right-[5px] right-[5px] unique-font">
          our team
        </h2>
      </div>
    </div>
  );
};

export default Employee;
