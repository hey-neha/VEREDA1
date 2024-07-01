import React from "react";
import facebook from "../../assets/facebook.png";
import twitter  from "../../assets/twitter.png";
import linkedin from "../../assets/linkedingImg.png";
import instagram from "../../assets/instImg.png";
// import boll from "../../assets/bhaskar.png";

const ProjectIdea = () => {
  return (
    <div
      className="h-[864px] flex  items-center justify-around "
      style={{
        backgroundImage: `linear-gradient(170deg, #2A7EAC 70%, transparent 30%) `,
        color: `white`,

        // Gradient angle and colors
      }}
    >
      <div className="w-[560px] h-[450px] gap-[48px] flex flex-col justify-between" style={{marginLeft:"30px"}}>
        <div>
          <h2 className="text-[36px] font-semibold">
            Have a project idea! <br />Drop me a line .
          </h2>
          <p className="text-[20px] font-normal opacity-[70%]" style={{}}>
            Aenean vestibulum felis nec egestas fringilla. Duis non felis
            consequat, varius sapien convallis, tincidunt nisl.
          </p>
        </div>
        <div className="flex gap-[6px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <div /* style={{marginBottom:"45px"}} */>
            <p className="text-[14px] font-normal">Email Us</p>
            <p className="text-[24px] font-semibold">info@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2" style={{marginBottom:"90px"}}>-
          Connect with us: <br></br>
          <div className="flex gap-2">
            <img className="" src={facebook} alt="facebook" />
            <img className="" src={twitter} alt="facebook" sizes="10px" />
            <img className="" src={linkedin} alt="facebook" />
            <img className="" src={instagram} alt="facebook" />
          
           
          </div>
        </div>
      </div>
      <div className="w-[648px] h-[612px] gap-[24px] p-[48px]  text-black bg-[#FFFFFF] rounded-[1rem] drop-shadow-2xl  border">
        <h1 className="text-3xl font-bold mb-8">
          Request A Quote - Let's work together
        </h1>
        <p className="text-lg mb-4 text-[#42526B]">
          Got a project? Drop me a line if you want to work together on
          something exciting. Or do you need our help? Feel free to contact us.
        </p>
        <form>
          <div className="flex  mb-4 gap-5">
            <div className="flex flex-col w-[268px] mb-4">
              <label htmlFor="name" className="mb-2 text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col mb-4  w-[268px] ">
              <label htmlFor="email" className="mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subjects"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              rows="4"
            ></textarea>
          </div>
          <button className="w-[249px] h-[60px]  flex justify-center items-center rounded-[8px] text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100">
            Request A Quote
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
        </form>
      </div>
    </div>
  );
};

export default ProjectIdea;
