import React, { useState } from "react";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const HamMenu = () => {
  const [isNav, setIsNav] = useState(null);
  const [closeNav, setCloseNav] = useState(false);

  const handleNav = () => {
    if (isNav === "Home") {
      setIsNav(null);
    } else {
      setIsNav("Home");
    }
  };

  return (
    <div
      className="fixed right-4 top-3 md:hidden cursor-pointer"
      style={{ zIndex: 90 }}
      onClick={handleNav}
    >
      <motion.div
        variants={zoomIn(1, 0, 0.1)}
        className={`z-40
         absolute flex flex-col ${
           isNav === "Home" ? "gap-none" : "gap-[5px]"
         }  justify-center items-center right-4 w-10 h-10 bg-secondary rounded-md z-90`}
      >
        <span className="w-6 h-1 bg-primary"></span>
        <span className="w-6 h-1 bg-primary"></span>
        <span className="w-6 h-1 bg-primary"></span>
      </motion.div>
      {isNav !== null ? (
        <div
          className={`
      fixed flex flex-col items-center gap-10 pt-20 top-0 left-0 w-full h-screen bg-primary
      `}
        >
          <a
            onClick={() => setIsNav(null)}
            href="#about"
            className="title hover:text-white tracking-wider"
          >
            About
          </a>
          <a
            onClick={() => setIsNav(null)}
            href="#teams"
            className="title hover:text-white tracking-wider"
          >
            Teams
          </a>

          <a
            onClick={() => setIsNav(null)}
            href="#awards"
            className="title hover:text-white tracking-wider"
          >
            Awards
          </a>
          <a
            onClick={() => setIsNav(null)}
            href="#images"
            className="title hover:text-white tracking-wider"
          >
            Images
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SectionWrapper(HamMenu, "");
