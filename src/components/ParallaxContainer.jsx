import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import { AboutTwo } from "./AboutTwo";
import SectionWrapper from "../utils/SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import { AboutThree } from "./AboutThree";

const ParallaxContainer = () => {
  const aboutRef = useRef();
  const aboutTwoRef = useRef();

  // For aboutOne to abputTwo
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["end end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.9], ["0%", "-100%"]);
  const top = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["860px", "0px", "0px", "-1000px"]
  );
  const topTwo = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["920px", "0px", "0px"]
  );

  return (
    <>
      <div className="relative">
        <motion.div
          className="absolute z-30 bg-primary"
          style={{ translateY }}
          ref={aboutRef}
        >
          <About />
        </motion.div>
        <motion.div ref={aboutTwoRef} className="fixed z-20" style={{ top }}>
          <AboutTwo />
        </motion.div>
        <motion.div style={{ top: topTwo }} className="z-10 h-[85vh] w-screen">
          <div className="h-[85vh] w-96 bg-transparent mt-2"></div>
        </motion.div>
        <div className="h-[100vh] bg-primary  w-full mt-1">
          <AboutThree />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(ParallaxContainer, "");
