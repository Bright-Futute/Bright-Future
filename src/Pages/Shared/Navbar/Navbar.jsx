import React from "react";
import { FaBars } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";
import Logo from "./bright.png";
const Navbar = () => {
  const menuList = (
    <>
      {/* <li>
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          delay={1000}
          isDynamic={true}
          to="/#top"
          className="nav-list uppercase "
        >
          Home
        </Link>
      </li> */}
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
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
          duration={1000}
          delay={1000}
          isDynamic={true}
          to="/blog"
          className="nav-list uppercase "
        >
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 w-full z-50 bg-[#ffffffdb] backdrop-blur-sm shadow-sm">
      <div
        className="navbar px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
 mx-auto "
      >
        <div className="navbar-start flex justify-between lg:justify-start ">
          <div className="dropdown mr-2 ">
            <label tabIndex={0} className="lg:hidden cursor-pointer">
              <FaBars></FaBars>
            </label>
            <div>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 bg-[#3B80B8] font-bold text-white rounded"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#clients"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#ourOffer"
                  >
                    Our offer
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#about"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    duration={1000}
                    delay={1000}
                    to="/#contact"
                  >
                    Contact
                  </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
          <div className="">
            <Link to="/#top">
              <img className="w-[130px] h-auto" src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3 font-semibold font-mono">{menuList}</ul>
        </div>
        <div className="navbar-end hidden lg:block text-end">
          <Link
            smooth={true}
            duration={1000}
            delay={1000}
            to="/#contact"
            className="
            py-4 px-5
            text-xl
            rounded-md
            hover:duration-700
            hover:bg-[#3B80B8]
            bg-[#fe9105] 
            text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
