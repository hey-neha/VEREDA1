import React from "react";
import logo from '../../assets/vereda2.png'
import face from '../../assets/facebooimge.png'
import inst  from '../../assets/instImg.png'
import twitter  from '../../assets/TwitterImg.png'
import linkedin  from '../../assets/linkedingImg.png'
const Footer = () => {
  return (
    <div className=" h-[596px] p-[124px] [80px] [32px] [80px] gap-124px bg-gray-900 flex flex-col justify-between items-cente text-[#838E9E]">

      <div className="w-[1280px] h-[260px] gap-0  flex justify-between   ">
        <div >
            <img className="bg-white" src={logo} alt="" />
            <br></br>
            <p className="text-[20px] gap-2 font-semibold">Address</p>
            <br></br>
            <p>A block, 5th floor , B HUB ( Maurya <br></br> Complex ) Patna. 80001</p>
        </div>
        <div>
             <h2 className="text-white">PAGES</h2>
             <br></br>
            <ul>
                <li className = 'mt-[8px]'src>Home</li>
                <li className = 'mt-[8px]'src>About</li>
                <li className = 'mt-[8px]'src>Service</li>
                <li className = 'mt-[8px]'src>Portfolio</li>
                <li className = 'mt-[8px]'src>Contact Us</li>
                <li className = 'mt-[8px]'src>Blogs</li>
            </ul>
        </div>
        <div>
        <h2 className="text-white">SUPPORT</h2>
        <br></br>
            <ul>
                <li >Help center </li>
                <li className = 'mt-[8px]'>Contact Support</li>
                
            </ul>
        </div>
        <div className="gap-[24px]" style={{marginRight:"200px"}}>
            <p className="text-white" >SOCIAL LINKS</p>
            <br></br>
            <img className = 'mt-[8px]'src={face} alt="facebook" />
            <img className = 'mt-[8px]' src={linkedin} alt="facebook" />
            <img className = 'mt-[8px]' src={twitter} alt="facebook" />
            <img className = 'mt-[8px]' src={inst} alt="facebook" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr /><hr /><hr />
      
     {/*  <hr className="text-[#AAAAAA]"></hr> */}
      <br></br>
      <br></br>
      <div className="w-[1320px] h-[56px] gap-[32px]  flex flex-col justify-around items-center ">
        
        <p className="text-[#AAAAAA]  items-center " style={{marginRight:"350px"}}>© 2024 - All rights reserved to vereda digital learning</p>
      </div>
    </div>
  );
};

export default Footer;
