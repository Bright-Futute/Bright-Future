import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { NavHashLink as Link } from "react-router-hash-link";
import Logo from "./brightWht.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menuList = (
    <>
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
          to="/#top"
          className="nav-list uppercase "
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
          to="/about"
          className="nav-list uppercase"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
          to="/#service"
          className="nav-list uppercase"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          to="/#technology"
          className="nav-list uppercase "
        >
          Technologies
        </Link>
      </li>
      {/* <li>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
          to="/#offer"
          className="nav-list uppercase "
        >
          Our offer
        </Link>
      </li> */}
      <li>
        <Link
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          to="/#review"
          className="nav-list uppercase "
        >
          Review
        </Link>
      </li>
      <li>
        <Link
          smooth={true}
          duration={500}
          to="/#contact"
          className="nav-list uppercase "
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          to="/blog"
          className="nav-list uppercase "
        >
          Blog
        </Link>
      </li>
    </>
  );
  const changeBg = () => {
    if (window.scrollY >= 280) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <div
      className={
        navbar
          ? "sticky top-0 w-full z-50 gradient-color"
          : "absolute top-0 w-full z-50"
      }
    >
      <div className="navbar px-4 max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto font-[Kanit] py-4">
        <div className="navbar-start flex justify-between lg:justify-start">
          <div className="dropdown mr-2 ">
            <label tabIndex={0} className="lg:hidden cursor-pointer">
              <FaBars className="fill-white"></FaBars>
            </label>
            <div>
              <ul
                tabIndex={0}
                className="dropdown-content -ml-5 mt-8 p-2 w-52 bg-[#f7f7f7cd] backdrop-blur-sm dropdown-list"
              >
                {menuList}
                <hr />
              </ul>
            </div>
          </div>
          <div className="">
            <Link to="/#top">
              <LazyLoad>
                <img className="w-[150px] h-auto" src={Logo} alt="" />
              </LazyLoad>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3 font-semibold font-mono">{menuList}</ul>
        </div>
        <div className="navbar-end hidden lg:block text-end">
          <Link
            smooth={true}
            duration={500}
            to="/#contact"
            className="px-5 py-3 rounded-full bg-[#F7F7F7] text-gray-900 hover:shadow-slate-900 shadow-inner"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
