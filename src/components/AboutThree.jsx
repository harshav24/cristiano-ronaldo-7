import React from "react";
import { motion } from "framer-motion";
import Waves from "../assets/images/wave.svg";
import { zoomIn } from "../utils/motion";
import ronaldoImg from "../assets/images/cr7-real-madrid.png";

export const AboutThree = () => {
  return (
    <motion.div className="w-screen h-[100vh] top-0">
      <div className="lg:flex lg:items-start lg:pt-20 h-[100vh] w-full bg-primary -mt-2">
        <div className="lg:w-full lg:flex justify-center items-center">
          <motion.div
            variants={zoomIn([0, 1.2, 1], 0.4, 0.49)}
            className="pt-10 text-3xl w-[90%] mx-auto lg:w-[60%] lg:px-10"
          >
            <h1 className="title text-center md:text-[3.7rem] md:leading-[77px] lg:text-left">
              Walking Work of Art
            </h1>
            <p className="hidden lg:block text-xl text-left mt-6 small-text">
              Having yearned to move to the Bernabeu for a year, he finally had
              his wish granted as he became the world’s most expensive player,
              carrying a price tag of €94 million. When he was presented to the
              club’s fans, he attracted 80,000 to the stadium.
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
            <p className="text-center text-sm mt-6 md:mt-6 md:text-xl small-text">
              Having yearned to move to the Bernabeu for a year, he finally had
              his wish granted as he became the world’s most expensive player,
              carrying a price tag of €94 million. When he was presented to the
              club’s fans, he attracted 80,000 to the stadium.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
