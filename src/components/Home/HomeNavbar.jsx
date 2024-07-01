import React from 'react'
import svglog from "../../assets/vereda2.png";
const HomeNavbar = () => {
  return (
    <>
     <nav className="h-[110px] flex justify-between items-center px-[84px] bg-[#161C2D] text-white ">
          <div className="w-[168px] h-[70px]">
            <img className="w-full h-full" src={svglog} alt="Logo" />
          </div>
          <ul className="flex w-[388px] justify-around font-bold">
            <li className="cursor-pointer">Demos</li>
            <li className="cursor-pointer">Page</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100">
            Get started on a project
          </button>
        </nav>
    </>
  )
}

export default HomeNavbar