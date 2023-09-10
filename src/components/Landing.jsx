import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../utils/SectionWrapper";
import Cristiano from "../assets/images/home.png";
import { zoomIn } from "../utils/motion";

const Landing = () => {
  return (
    <div className="h-screen">
      <motion.div
        variants={zoomIn(1, 0, 0.1)}
        className="md:hidden w-full text-center"
      >
        <h1 className="text-[2.7rem] font-extrabold font-geoblack heading  text-secondaryText">
          CR7
        </h1>
      </motion.div>
      <section
        className="relative flex flex-col items-center w-[100%] h-[33rem] 
      mb:h-[31rem] 
      sm:h-[40rem] 
      lg:h-[46rem]
      xl:h-[44rem] 
      xxl:h-[36rem]"
      >
        <motion.div
          variants={zoomIn([0, 1.1, 1], 0, 0.5)}
          className="absolute w-[40%] z-0 text-center leading-[55px] 
          mb:w-[100%]"
        >
          <h1
            className="text-[3.7rem] title text-white tracking-wide
          lg:text-[10rem] 
          sm:text-[7rem]"
          >
            THE BOY
          </h1>
        </motion.div>
        <motion.div
          variants={zoomIn([0, 1.05, 1], 0.4, 0.4)}
          className="absolute"
        >
          <img
            src={Cristiano}
            alt=""
            className="h-80 mt-16 z-20 object-cover 
            mb:mt-8 mb:h-96 
            sm:h-[27rem] 
            lg:h-[30rem]"
          />
        </motion.div>
        <motion.div
          variants={zoomIn([0, 1.1, 1], 0.6, 0.6)}
          className="absolute z-20 bottom-16 
          mb:bottom-12 
          sm:bottom-7 
          lg:bottom-5 
          xxl:bottom-2"
        >
          <h1
            className="text-[3.7rem] title text-white text-center  leading-[55px] 
          sm:text-[7rem] sm:leading-[100px] 
          lg:text-[10rem]  lg:leading-[130px]"
          >
            FROM MADERIA
          </h1>
        </motion.div>
      </section>
    </div>
  );
};

export default SectionWrapper(Landing, "/");

// Talent without working hard is nothing. flowing text
// Walking work of art
