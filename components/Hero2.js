import React from 'react';
import Image from "next/image";
// import heroImage from "../public/hero.jpg"
import {BsFillPlayFill} from "react-icons/bs"
import {FiAlertCircle} from "react-icons/fi"

const Hero = () => {
  return (
    <div className={`h-screen bg-[url('/hero.jpg')] bg-no-repeat bg-cover grid items-center`}>
      <div className="pt-20">
        <div className={`custom-container`}>
          <h2 className="text-white font-bold text-[50px]">LOVE WITH PAIN 2</h2>
          <p className={`font-semibold text-white`}>There's a hero in all of us.</p>
          <div className={`mt-4 flex gap-5`}>
            <button
              className={`bg-white px-10 py-2 rounded-[5px] font-semibold flex justify-center items-center gap-2`}>
              <BsFillPlayFill size={`20px`}/>Play
            </button>
            <button
              className={`bg-[#848484] px-7 py-2 rounded-[5px] font-semibold flex justify-center items-center gap-2 text-white`}>
              <FiAlertCircle color={`#fff`} size={`20px`}/>
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;