import React from "react";
import logo from "../../assets/vereda2.png"; // make sure to replace with your actual image path
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#EEEEEE] pl-[10px] pr-[84px] text-[#01121A] h-[80px] flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center w-[143px] h-[60px] ml-[30px]">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="w-540px h-[24px] justify-between">
          <ul className="flex space-x-4 font-bold text-[#01121A] gap-[24px]">
            <li>
              <Link to='/about' className=" hover:text-[#2079AF]">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-[#2079AF]">
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="hover:text-[#2079AF]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-[#2079AF]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-[#2079AF]">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
