import React from "react";
import MapImg from "../../assets/MapImage.png";
const MapImagePage = () => {
  return (
    <>
      <div className="w-full h-[1180px] bg-[#F5F6F7] flex flex-col justify-evenly items-center mb-3">
        <div className=" h-[] flex flex-col items-center justify-center mt-[64px ] m-[64px]">
          <h2
            className="font-bold leading-tight text-center m-2"
            style={{
              background: "linear-gradient(to right, #53ADE4, #277BA8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "16px",
            }}
          >
            Contact us
          </h2>
          <p className="max-w-[850px] text-[#101828] text-[36px] text-center  font-bold ">
            We are dedicated to serve you and create the
            <br className="m-2"></br> upward trajectory for your company. Let
            your <br></br> hardwork be visible
          </p>
          <p className="m-2 text-[#475467]">
            We have offices and teams all around the world.
          </p>
        </div>
        <div className="h-448px">
          <img className="mb-4" src={MapImg} alt="MapImg" />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
          <div className="w-full md:w-[384px] flex flex-col items-center gap-5">
            <h2 className="text-2xl font-bold text-gray-900">Support</h2>
            <p className="text-lg font-semibold text-gray-700">
              Our friendly team is here to help
            </p>
            <p className="text-lg text-[#2A7EAC] font-bold">
              support@untitledui.com
            </p>
          </div>
          <div className="w-full md:w-[384px] flex flex-col items-center gap-5">
            <h2 className="text-2xl font-bold text-gray-900">Support</h2>
            <p className="text-lg font-semibold text-gray-700">
              Our friendly team is here to help
            </p>
            <p className="text-lg text-[#2A7EAC] font-bold">
              support@untitledui.com
            </p>
          </div>
          <div className="w-full md:w-[384px] flex flex-col items-center gap-5">
            <h2 className="text-2xl font-bold text-gray-900">Support</h2>
            <p className="text-lg font-semibold text-gray-700">
              Our friendly team is here to help
            </p>
            <p className="text-lg  text-[#2A7EAC] font-bold">
              support@untitledui.com
            </p>
          </div>
        </div>
      </div>
      <div className="h-[514px] bg-[#2A7EAC] px-0 md:px-96 flex gap-16">
        <div className="w-full flex items-center justify-evenly">
          <div class="flex space-x-16">
            <div class="flex-1 space-y-4">
              <p class="text-white text-lg">Our Location</p>
              <h2 class="text-white text-3xl font-bold">Visit our offices</h2>
              <p class="text-white text-lg">Find us at these locations.</p>
            </div>
            <div class="flex-1 space-y-4">
              <p class="text-white text-lg">Our Location</p>
              <h2 class="text-white text-3xl font-bold">Visit our offices</h2>
              <p class="text-white text-lg">Find us at these locations.</p>
            </div>
            <div class="flex-1 space-y-4">
              <p class="text-white text-lg">Our Location</p>
              <h2 class="text-white text-3xl font-bold">Visit our offices</h2>
              <p class="text-white text-lg">Find us at these locations.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapImagePage;
