import React, { useRef } from "react";
import SectionWrapper from "../utils/SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import Waves from "../assets/images/wave.svg";
import { zoomIn } from "../utils/motion";
import ronaldoImg from "../assets/images/cr7-red-about.png";

const About = () => {
  return (
    <motion.div className="w-screen h-[100vh] top-0">
      <img src={Waves} alt="" className="w-full" />
      <div className="lg:flex lg:items-start lg:pt-20 h-[100vh] md:h-[90vh] w-full bg-secondary -mt-2">
        <div className="lg:w-full lg:flex justify-center items-center">
          <motion.div
            variants={zoomIn([0, 1.2, 1], 0.4, 0.49)}
            className="pt-10 text-3xl w-[90%] mx-auto lg:w-[70%] lg:px-10"
          >
            <h1 className="title text-center md:text-[3rem] md:leading-[77px] lg:text-left">
              Talent Without Working Hard is nothing
            </h1>
            <p className="hidden lg:block text-xl text-left mt-6 small-text">
              He was born on February 5, 1985, the youngest of four children -
              two girls and two boys. His mother Maria Dolores dos Santos Aveiro
              was a cook and his father, Jose Dinis Aveiro, a gardener
            </p>
          </motion.div>
          <motion.div
            variants={zoomIn([0, 1.2, 1], 0.2, 0.55)}
            className="lg:w-1/2"
          >
            <img
              src={ronaldoImg}
              alt=""
              className="h-60 md:mt-6 md:h-80 mx-auto"
            />
          </motion.div>
          <motion.div
            variants={zoomIn([0, 1.2, 1], 0.4, 0.49)}
            className="w-[90%] md:w-[75%] mx-auto lg:hidden"
          >
            <p className="text-center text-sm md:mt-6 md:text-xl small-text">
              He was born on February 5, 1985, the youngest of four children -
              two girls and two boys. His mother Maria Dolores dos Santos Aveiro
              was a cook and his father, Jose Dinis Aveiro, a gardener
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
