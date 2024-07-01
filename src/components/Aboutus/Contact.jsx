import React, { useState } from "react";

const Contact = () => {
  /* return (
    <div ">
      
    </div> */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-[#FFFFFF] h-[1005px] flex flex-col">
      <div className=" h-[330px] pb-[96px] pt-[96] flex flex-col items-center justify-center mt-[64px]">
        <h2
          className=" font-bold leading-tight text-center m-2"
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
          Get in touch
        </p>
        <p className="m-2 text-[#475467]">
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <div className="bg-[#FFFFFF] h-[665px] flex items-center justify-center mt-[-150px]">
        <form className="w-[1280px] h-[579px] flex justify-center" onSubmit={handleSubmit}>
          <div className="w-[856px]">
            <div className="flex  mb-4 gap-5 w-full">
              <div className="flex flex-col w-1/2  mb-4">
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
              <div className="flex flex-col mb-4  w-1/2  ">
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
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="flex">
                <select
                  className="border border-gray-300 p-2 rounded-l"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="US">US +1</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full border border-gray-300 p-2 rounded-r"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 p-2 rounded"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  className="form-checkbox"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                />
                <span className="ml-2">
                  You agree to our friendly privacy policy.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 rounded bg-[#2A7EAC] hover:bg-blue-600"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
