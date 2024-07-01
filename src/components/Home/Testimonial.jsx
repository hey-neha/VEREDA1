import React from "react";
import testimonial from "../../assets/Testimonial.png";
import pagination from "../../assets/Pagination.png";
import I902 from '../../assets/902.png'
const Testimonial = () => {
  return (
    <>
      <div class="h-[948px] p-[100px_84px] gap-[70px]  bg-[#F5F6F7] flex flex-col items-center justify-around text-center">
        <div className=" h-[233px] max-w-[1272px]  gap-[16px] flex flex-col items-center justify-around text-center my-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
            Fueling Entrepreneurial Dreams with Tailored App
            <br className="hidden lg:block" />
            Startups Where Partnerships Thrive Beyond Client{" "}
            <br className="hidden lg:block" /> Relationships!
            <br className="hidden lg:block" />
          </h2>
          <p className="text-[16px] lg:text-[20px] max-w-[850px] text-[#42526B] font-medium" style={{marginBottom:"0px"}}>
            Phasellus interdum sagittis magna. Donec varius ultricies diam sed
            lacinia. Mauris <br className="hidden lg:block" /> porttitor quis
            risus eget mattis. Ut auctor.
          </p>
        </div>
        <div className=" w-[813px] bg-white rounded-lg shadow-md h-[393px] p-4 gap-[40px] flex flex-col items-center justify-around text-center " >
          <img src={testimonial} alt="testimonial" />
          <img src={pagination} alt="pagination" />
        </div>
      </div>
      <div class="h-[680px] pt-[72px] pr-[80px] pb-[72px] pl-[80px] gap-[134px]  bg-[#161C2D] flex  items-center justify-around text-center">
         <img className="w-[573px] h-[536] " src={I902} alt="I902" />
         <div className="text-[white] w-[650px] text-left" style={{fontSize:"bold"}}>
            <p className="text-[28px] font-semibold">Have a project idea! Let’s work together.</p>
            <p className="text-[17px] font-normal" style={{margin:"20px" , marginRight:"20px"}} >Building Distinctive Apps with Exceptional User Experiences for your application development</p>
            <button className="w-[248pxpx] h-[50px] mt-[50px] pl-[32px] pr-[32px] gap-[12px] font-bold flex justify-center items-center  text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100" style={{borderRadius:"5px"}}>
              Talk To Our Expert
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
      </div>
    </>
  );
};

export default Testimonial;
