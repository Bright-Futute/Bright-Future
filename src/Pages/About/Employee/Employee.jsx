import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import EmployeeCard from "./EmployeeCard";
const Employee = () => {
  const [employees, SetEmployees] = useState();
  useEffect(() => {
    fetch("employees.json")
      .then((res) => res.json())
      .then((data) => SetEmployees(data));
  }, []);
  console.log(employees);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {employees?.map((employee) => (
          <SwiperSlide>
            <EmployeeCard employee={employee}></EmployeeCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Employee;
