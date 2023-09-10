import { motion } from "framer-motion";
import { staggerContainer } from "./motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`overflow-z-x-hidden`}
      >
        <span className="hash-span" id={idName}></span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
