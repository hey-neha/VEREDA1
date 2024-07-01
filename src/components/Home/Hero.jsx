import React from "react";
import "../Home css/Home.css";

import gImage from "../../assets/GirlImage.png";
const Hero = () => {
  return (
    <>
      <div className="text-white h-[708px]  bg-[#161C2D] div-1">
        <div className="content-area w-[1228px] h-[514.7px]  ml-[206px]  flex justify-between items-center div-2">
          <div
            className="w-[600px] h-[481px] flex-col justify-between  "
            style={{ marginTop: "120px" }}
          >
            <p
              className="text-gradient-to-r from-[#53ade4]; to-[#277ba8] p1"
              style={{
                background: "linear-gradient(to right, #53ADE4, #277BA8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              DEVELOP & GROW
            </p>
            <p className=" text-[40px] w-[600px ] h-[180px] font-bold">
              Crafting bespoke Apps tailored to fuel your business's growth
              trajectory
            </p>
            <p className="w-[554.53px] h-[130.72px] text-[20px] mt-[25px] font-[20px] font-normal leading-[30px] text-left opacity-70">
              We specialize in creating custom apps meticulously <br></br>{" "}
              designed to propel your business forward. Our<br></br> solutions
              are finely tuned to meet your growth <br></br> objectives and
              drive success.
            </p>

            <button className="w-[209px] h-[50px] mt-[50px] flex justify-center items-center rounded-[1rem] text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100">
              Get Started a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="w-[440px] h-[514.7px] " style={{marginRight:"300px"}}>
            <img
              src={gImage}
              alt="GirlImage"
              style={{ height: "400px", width: "350px" , marginTop:"30px"}}
            />
          </div>
        </div>
      </div>
      <div className="h-[184px]  font-bold text-[#061C3D] flex justify-around items-center pl-[50px] pr-[50px]">
        <div className=" flex flex-col justify-center items-center text-center">
          <div className=" text-[40px]">1000+</div>
          <p>Apps & Web Apps Launched</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center">
          <div className="text-[40px]">500+</div>
          <p>Clients Served</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[40px]">$10M+</div>
          <p>Revenue Generated</p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center">
          <div className="text-[40px]">10+</div>
          <p>Awards Won</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
