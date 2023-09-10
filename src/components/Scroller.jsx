import React from "react";
import SectionWrapper from "../utils/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Scroller = () => {
  return (
    <div className="fixed bottom-0 w-full" style={{ zIndex: 90 }}>
      <motion.div
        variants={fadeIn("up", "spring", 1, 0.6, [130, 0])}
        className="relative w-full py-4 bg-secondary title font-extrabold text-[15px] text-primary whitespace-nowrap overflow-hidden"
      >
        <div className="inline-block slide-animation">
          <span className="mx-8">862 Goals</span>
          <span className="mx-8">1210 Appearance</span>
          <span className="mx-8">20+ Trophies</span>
          <span className="mx-8">50+ Individual Trophies</span>
          <span className="mx-8">850 Career Goals</span>
          <span className="mx-8">5 UEFA Medals</span>
          <span className="mx-8">2 National Trophies</span>
        </div>
        <div className="inline-block slide-animation">
          <span className="mx-8">862 Goals</span>
          <span className="mx-8">1210 Appearance</span>
          <span className="mx-8">20+ Trophies</span>
          <span className="mx-8">50+ Individual Trophies</span>
          <span className="mx-8">850 Career Goals</span>
          <span className="mx-8">5 UEFA Medals</span>
          <span className="mx-8">2 National Trophies</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Scroller, "");
