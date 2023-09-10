import React, { useRef } from "react";
import SectionWrapper from "../utils/SectionWrapper";
import { motion } from "framer-motion";
import { blurOut } from "../utils/motion";
import { BsLinkedin } from "react-icons/bs";

const Thanks = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-white">
      <motion.div
        className="absolute z-10 h-[60vh] w-[70%] bg-white bg-opacity-50 backdrop-blur-lg"
        variants={blurOut(0, 1.5, 0.8)}
      ></motion.div>
      <div className="absolute flex justify-center items-center h-[70vh] w-[70%]">
        <p className="title text-[2rem] text-center md:text-[3rem]">
          Thanks For Watching
        </p>
      </div>
      <div className="absolute flex justify-between items-center bottom-[54px] w-screen h-12 bg-primary">
        <div className="ml-4">
          <a
            href="https://www.linkedin.com/in/harshavardhan-v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="scale-125 text-white" />
          </a>
        </div>
        <div className="mr-10">
          <p className="text-white font-semibold">Designed By Harsha |</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Thanks, "");
