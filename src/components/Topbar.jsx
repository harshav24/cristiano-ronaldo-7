import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const Topbar = () => {
  return (
    <div className="hidden md:flex">
      <motion.div
        variants={fadeIn(0.2)}
        className="flex justify-between items-center w-full mb-10 px-12 lg:px-32 py-2 tracking-wider"
        style={{ zIndex: 70 }}
      >
        <a href="#about" className="title">
          About
        </a>
        <a href="#teams" className="title">
          Teams
        </a>
        <a href="#/" className="title text-[3rem]">
          CR7
        </a>
        <a href="#awards" className="title">
          Awards
        </a>
        <a href="#images" className="title">
          Images
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Topbar, "");

// export default Topbar;
