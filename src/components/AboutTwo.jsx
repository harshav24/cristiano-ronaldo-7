import React from "react";
import ronaldo from "../assets/images/ronaldo-abput-two.png";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

export const AboutTwo = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse items-center w-screen h-[100vh] bg-white">
      <motion.div
        variants={zoomIn([0, 1.2, 1], 0.4, 0.49)}
        className="pt-10 text-3xl w-[90%] mx-auto lg:w-[60%] lg:px-10"
      >
        <h1 className="title text-center md:text-[3.7rem] md:leading-[77px] lg:text-left">
          Walking Work of Art
        </h1>
        <p className="hidden lg:block text-xl text-left mt-6 small-text">
          Ronaldo would go on to be a sparkling success at Sporting, playing
          just a single season for the first team before making his move to one
          of the biggest clubs in the world, Manchester United.
        </p>
      </motion.div>
      <motion.div
        variants={zoomIn([0, 1.2, 1], 0.2, 0.55)}
        className="lg:w-1/2"
      >
        <img
          src={ronaldo}
          alt=""
          className="h-60 md:mt-6 md:h-80 mx-auto lg:h-[26rem]"
        />
      </motion.div>
      <motion.div
        variants={zoomIn([0, 1.2, 1], 0.4, 0.49)}
        className="w-[90%] md:w-[75%] mx-auto lg:hidden"
      >
        <p className="text-center text-sm mt-6 md:mt-6 md:text-xl small-text">
          Ronaldo would go on to be a sparkling success at Sporting, playing
          just a single season for the first team before making his move to one
          of the biggest clubs in the world, Manchester United.
        </p>
      </motion.div>
    </div>
  );
};
