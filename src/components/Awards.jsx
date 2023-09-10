import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import { AwardsData } from "../constants";

const Awards = () => {
  return (
    <section className="h-full lg:h-screen w-full bg-primary pt-6">
      <motion.div
        className="mx-auto w-[40%] text-center mb-8"
        variants={zoomIn([0, 1.2, 1], 0.2, 0.3)}
      >
        <h1 className="title text-2xl">Trophies and Honours</h1>
      </motion.div>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 mb-14">
        {AwardsData.map((data, index) => (
          <motion.div
            variants={fadeIn("right", "linear", `${index / 4}`, 0.4)}
            className="flex flex-col items-center h-72 w-72 sm:h-80 sm:w-80 mx-auto"
          >
            <img src={data.img} alt="" className="h-48" />
            <h1 className="mt-2 text-md font-semibold">
              2 International Trophies
            </h1>
            <p className="text-sm">First International Trophy at 2016</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Awards, "awards");
