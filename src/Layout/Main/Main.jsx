import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet />
      <div className="bg-[#f7f7f7]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
