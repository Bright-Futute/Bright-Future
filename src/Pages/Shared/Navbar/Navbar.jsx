import React from "react";
import { FaBars, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";
import Logo from "./bright.png";
const Navbar = () => {
  let activeStyle = {
    color: "#f9c301",
  };

  const menuList = (
    <>
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          delay={1000}
          isDynamic={true}
          to="/#top"
          className="nav-list"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          delay={1000}
          isDynamic={true}
          to="/#services"
          className="nav-list"
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
          isDynamic={true}
          to="/#services"
          className="nav-list"
        >
          Clients
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
          to="/#ourOffer"
          className="nav-list"
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
          isDynamic={true}
          to="/#about"
          className="nav-list"
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
          className="nav-list"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 w-full z-50 bg-[#ffffffdb] backdrop-blur-sm drop-shadow-sm">
      <div className="navbar custom-width mx-auto">
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
                <div className="flex justify-center items-center gap-5 py-2">
                  <a
                    className="hover:bg-[#FF3F4A] p-2 rounded-full hover:text-white"
                    href="https://www.linkedin.com/company/bright-future-bd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn></FaLinkedinIn>
                  </a>
                  <a
                    className="hover:bg-[#FF3F4A] p-2 rounded-full hover:text-white"
                    href="https://github.com/Bright-Futute"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    className="hover:bg-[#FF3F4A] p-2 rounded-full hover:text-white"
                    href="https://www.facebook.com/brightfuture.soft"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook></FaFacebook>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <a href="/" className="text-xl text-[#FF3F4A] font-bold">
              <img className="w-[140px] h-auto" src={Logo} alt="" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 font-semibold ">{menuList}</ul>
        </div>
        <div className="navbar-end hidden lg:block">
          <div className="flex justify-end items-center gap-5 ">
            <a
              className="hover:bg-[#f9c3018f] p-2 rounded-full "
              href="https://www.linkedin.com/company/bright-future-bd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a
              className="hover:bg-[#f9c3018f] p-2 rounded-full "
              href="https://github.com/Bright-Futute"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              className="hover:bg-[#f9c3018f] p-2 rounded-full "
              href="https://www.facebook.com/brightfuture.soft"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
