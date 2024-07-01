import React from "react";
import bhaskar from "../../assets/bhaskar.png";
import dailyhunt from "../../assets/dailyhunt.png";
import hindustan from "../../assets/hindustan.png";
import news18 from "../../assets/new18.png";

function Company() {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1272px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="text-4xl mb-4 font-bold leading-tight text-center"
            style={{
              background: "linear-gradient(to right, #53ADE4, #277BA8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "36px",
              marginTop: "30px",
            }}
          >
            Big companies are here
          </h2>
          <p
            className="max-w-[850px] text-[#42526B] text-lg text-center mb-10"
            style={{ padding: "10px 70px"}}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within a few minutes.
            You have a business to run. Stop worrying about cross-browser bugs,
            designing new pages.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:justify-around">
          <div className="w-[139px] h-[54.53px] mt-[-13px]">
            <img src={bhaskar} alt="" className="h-full" />
          </div>
          <div className="h-[49.76px] w-[187.56px]">
            <img src={hindustan} alt="" className="h-full" />
          </div>
          <div className="h-[47px] w-[94px]">
            <img src={news18} alt="" className="h-full" />
          </div>
          <div className="h-[42px] w-[160px]">
            <img src={dailyhunt} alt="" className="h-full" />
          </div>
        </div>
       
      </div>
      <hr style={{marginTop:"70px"}} />
    </div>
  );
}

export default Company;
