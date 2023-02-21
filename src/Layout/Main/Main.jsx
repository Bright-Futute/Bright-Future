import React from "react";
import { Outlet } from "react-router";
import Home from "../../Pages/Home/Home";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
