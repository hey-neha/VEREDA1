import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";

const Hiring = () => {
  return (
    <div className="h-[778px] bg-gray-100 flex flex-col justify-evenly items-center p-4">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <h2
          className="font-bold leading-tight m-2"
          style={{
            background: "linear-gradient(to right, #53ADE4, #277BA8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "16px",
          }}
        >
          We’re hiring!
        </h2>
        <p className="max-w-[850px] text-[#101828] text-3xl font-bold">
          Meet our team
        </p>
        <p className="m-2 text-[#475467]">
          Our philosophy is simple: hire a team of diverse, passionate people
          and <br className="hidden sm:block"/> foster a culture that empowers you to do your best work.
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 max-w-[1280px] mx-auto">
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img1} alt="Olivia Rhye" />
          <p className="text-[18px] font-medium">Olivia Rhye</p>
          <p className="text-[16px] text-[#2A7EAC]">Founder & CEO</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img2} alt="Phoenix Baker" />
          <p className="text-[18px] font-medium">Phoenix Baker</p>
          <p className="text-[16px] text-[#2A7EAC]">Engineering Manager</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img3} alt="Lana Steiner" />
          <p className="text-[18px] font-medium">Lana Steiner</p>
          <p className="text-[16px] text-[#2A7EAC]">Product Manager</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img4} alt="Demi Wilkinson" />
          <p className="text-[18px] font-medium">Demi Wilkinson</p>
          <p className="text-[16px] text-[#2A7EAC]">Frontend Developer</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img5} alt="Candice Wu" />
          <p className="text-[18px] font-medium">Candice Wu</p>
          <p className="text-[16px] text-[#2A7EAC]">Backend Developer</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img6} alt="Natali Craig" />
          <p className="text-[18px] font-medium">Natali Craig</p>
          <p className="text-[16px] text-[#2A7EAC]">Product Designer</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img7} alt="Drew Cano" />
          <p className="text-[18px] font-medium">Drew Cano</p>
          <p className="text-[16px] text-[#2A7EAC]">UX Researcher</p>
        </div>
        <div className="w-[280px] h-[152px] flex flex-col items-center justify-center space-y-2">
          <img className="rounded-[40px] w-[80px] h-[80px]" src={img8} alt="Olivia Rhye" />
          <p className="text-[18px] font-medium">Orlando Diggs</p>
          <p className="text-[16px] text-[#2A7EAC]">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
