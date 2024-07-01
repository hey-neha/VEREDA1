import React from "react";
import android from "../../assets/AndroidLogo.png";
import apple from "../../assets/appleicon.png";
import fullstack from "../../assets/FullstackIcon.png";
import processor from "../../assets/processorlog.png";
import digitalM from "../../assets/digitalMicon.png";
import Ondemand from "../../assets/Ondemandicon.png";

const Courses = () => {
  return (
    <div className="px-4 lg:px-[100px] h-[1155px] xl:px-[84px] flex flex-col justify-around items-center">
      <div
        className="max-w-[1272px] gap-[16px] flex flex-col items-center justify-around text-center my-8"
        /*  style={{ marginBottom: "300px" }} */
      >
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
          More reasons why companies around the world{" "}
          <br className="hidden lg:block" />
          choose Vereda Digital Technology
        </h2>
        <p className="text-[16px] lg:text-[20px] max-w-[850px] text-[#42526B] font-medium">
          Phasellus interdum sagittis magna. Donec varius ultricies diam sed
          lacinia. Mauris <br className="hidden lg:block" /> porttitor quis
          risus eget mattis. Ut auctor.
        </p>
      </div>
      <div
        className="max-w-[1272px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]"
        style={{ marginBottom: "200px" }}
      >
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img
              className="w-[36px] h-[36px]"
              src={android}
              alt="Android logo"
            />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              Android App Development
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img className="w-[72px] h-[72px]" src={apple} alt="appleicon" />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              iOS App Development
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img
              className="w-[36px] h-[36px]"
              src={fullstack}
              alt="Full Stack Development"
            />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              Full Stack Development
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img
              className="w-[72px] h-[72px]"
              src={processor}
              alt="processor logo"
            />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              Website Maintenance Services
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img
              className="w-[72px] h-[72px]"
              src={digitalM}
              alt="Digital Marketing"
            />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              Digital Marketing and Strategies
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ boxShadow: "0px 12px 56px 0px #061C3D1F" }}
          className="box gap-[12px] w-full h-[337px] rounded-[16px] p-[32px] flex flex-col justify-around items-center"
        >
          <div className="w-[76px] h-[76px] flex justify-center items-center bg-[#F0F5FF]">
            <img className="w-[36px] h-[36px]" src={Ondemand} alt="On-demand" />
          </div>
          <div className="gap-[12px] w-full text-[16px] font-medium flex flex-col items-center">
            <p className="text-[20px] font-bold text-center text-[#061C3D]">
              On-Demand Developers
            </p>
            <p className="text-center w-full font-normal">
              Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.
              Morbi lacus magna.
            </p>
          </div>
          <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] text-[#53ADE4] font-semibold">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
