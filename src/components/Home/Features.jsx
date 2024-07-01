import React from "react";
import boyImage from "../../assets/boyImage.png";
import stack from "../../assets/Stack.png";
import processor from "../../assets/processorlog.png";
import beutiSupply from "../../assets/beutySupply.png";
import brightvision from "../../assets/bright visin.png";
import mytvs from "../../assets/my tvs.png";
import wconcil from "../../assets/wconcil.png";
const Features = () => {
  return (
    <>
      <hr />
      <div className="h-1432px gap-[96px] flex flex-col justify-around items-center">
        <div className="max-w-[1272px]  gap-[16px] flex flex-col items-center justify-around text-center my-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
            Key Steps In Our Mobile App <br className="hidden lg:block" />
            Development Process
          </h2>
          <p className="text-[16px] lg:text-[20px] max-w-[850px] text-[#42526B] font-medium">
            Phasellus interdum sagittis magna. Donec varius ultricies diam sed
            lacinia. Mauris <br className="hidden lg:block" /> porttitor quis
            risus eget mattis. Ut auctor.
          </p>
        </div>
        <div className="w-[1272px] max-h-[668px] gap-[16px] flex  items-center justify-around text-center my-8">
          <div className="w-[568px] h-[668px] bg-[#FFF9EE]  rounded flex flex-col items-center justify-around text-center">
            <div className="w-[472px] h-[108px]  flex  items-center justify-around text-center ">
              <img className="mb-10" src={stack} alt="stack" />
              <div className="flex flex-col ">
                <p className="text-[20px] text-[#061C3D] font-bold ml-[-300px] ">
                  Discover
                </p>
                <p className="text-[16px] font-semibold">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </div>
            <hr className="w-[472px] border-[1px]" />

            <div className="w-[472px] h-[108px]  flex  items-center justify-around text-center ">
              <img className="mb-10 ml-[-20px] " src={processor} alt="stack" />
              <div className="flex flex-col ">
                <p className="text-[20px] text-[#061C3D] font-bold ml-[-300px] ">
                  Design
                </p>
                <p className="text-[16px] font-semibold">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </div>
            <hr className="w-[472px] border-[1px]" />
            <div className="w-[472px] h-[108px]  flex  items-center justify-around text-center  ">
              <img className="mb-10 ml-[-20px] " src={processor} alt="stack" />
              <div className="flex flex-col ">
                <p className="text-[20px] text-[#061C3D] font-bold ml-[-300px] ">
                  Developed
                </p>
                <p className="text-[16px] font-semibold">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </div>
            <hr className="w-[472px] border-[1px]" />

            <div className="w-[472px] h-[108px]  flex  items-center justify-around text-center  ">
              <img className="mb-10 ml-[-20px] " src={processor} alt="stack" />
              <div className="flex flex-col ">
                <p className="text-[20px] text-[#061C3D] font-bold ml-[-300px] ">
                  Test{" "}
                </p>
                <p className="text-[16px] font-semibold">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[568px] h-[668px] ">
            <img className="w-[568px] h-[668px] " src={boyImage} alt="" />
          </div>
        </div>
        <div
          className="max-w-[1272px] mx-auto flex flex-col items-center justify-center py-8"
          style={{ marginBottom: "50px" }}
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <h2
              className="text-4xl mb-4 font-bold leading-tight text-center"
              style={{
                background: "linear-gradient(to right, #53ADE4, #277BA8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We have Satisfied & Trusted Customers.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:justify-around">
            <div
              className="w-[139px] h-[54.53px]"
              style={{ marginBottom: "20px" }}
            >
              <img
                src={brightvision}
                alt="Brightvision logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[187.56px] h-[49.76px]">
              <img
                src={wconcil}
                alt="Wconcil logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[94px] h-[47px]">
              <img
                src={mytvs}
                alt="Mytvs logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[160px] h-[42px]">
              <img
                src={beutiSupply}
                alt="BeutiSupply logo"
                className="h-full w-full object-contain"
              />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
