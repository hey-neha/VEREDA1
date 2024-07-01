import React from "react";
import projectimg1 from "../../assets/ProjecrtImg1.png";
import projectimg2 from "../../assets/ProjectImg2.png";
import projectimg3 from "../../assets/Project3.png";
const Projects = () => {
  return (
    <div class="w-[1440px] h-[966px] pt-[100px] pr-[84px] pb-[100px] pl-[84px] gap-[72px] bg-[#FFFFFF] flex flex-col items-center justify-around text-center">
      <div className="max-w-[1272px]  gap-[16px] flex flex-col items-center justify-around text-center my-8" style={{display:"flex",justifyContent:"center" , marginRight:"200px"}}>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
          Selected projects
        </h2>
        <p className="text-[14px] lg:text-[25px] max-w-[850px] text-[#42526B] font-medium"style={{/* padding:"30px" , */ /* marginBottom:"50px" */}} >
          Phasellus interdum sagittis magna. Donec varius ultricies diam sed
          lacinia. Mauris {/* <br className="hidden lg:block" /> */} porttitor quis
          risus eget mattis. Ut auctor.
        </p>
      </div>
      <div class="w-full h-[565px] gap-[42px] flex items-center justify-around" style={{marginBottom:"1000px", marginRight:"80px"}}>
        <div class="w-[412px] h-[464px] gap-0 flex flex-col items-start justify-between" >
          <img
            className="w-[412px] h-[464px] rounded-[1px]"
            src={projectimg1}
            alt="ProjectImg"
          />
          <div className="h-[69px] w-full">
            <p class="text-left text-[20px] font-normal" style={{marginTop:"30px"}}>
              E-tutor - education & online LMS
            </p>
            <button class="w-[146px] h-[32px] px-0 py-[6px] gap-[8px] flex justify-start items-center rounded-lg text-[16px] text-[#53ADE4] font-semibold text-left">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-[412px] h-[464px] gap-0 flex flex-col items-start justify-between">
          <img
            className="w-[412px] h-[464px] rounded-[1px]"
            src={projectimg2}
            alt="ProjectImg"
          />
          <div className="h-[69px] w-full">
            <p class="text-left text-[20px] font-normal" style={{marginTop:"30px"}}>
              Pagoupon - Properties Agency Website
            </p>
            <button class="w-[146px] h-[32px] px-0 py-[6px] gap-[8px] flex justify-start items-center rounded-lg text-[16px] text-[#53ADE4] font-semibold text-left">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-[412px] h-[464px] gap-0 flex flex-col items-start justify-between">
          <img
            className="w-[412px] h-[464px] rounded-[1px]"
            src={projectimg3}
            alt="ProjectImg"
          />
          <div className="h-[69px] w-full">
            <p class="text-left text-[20px] font-normal" style={{marginTop:"30px"}}>
              Find workspace - Mobile app design
            </p>
            <button class="w-[146px] h-[32px] px-0 py-[6px] gap-[8px] flex justify-start items-center rounded-lg text-[16px] text-[#53ADE4] font-semibold text-left">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
