import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsArrowUpCircleFill } from "react-icons/bs";
const RotatingDiv = () => {
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setRotate(window.scrollY);
      } else if (currentScrollY < prevScrollY) {
        const reverseScroll = -window.scrollY;
        setRotate(reverseScroll);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, prevScrollY]);

  return (
    <motion.div
      className="fixed flex justify-center items-center bottom-20 right-10 w-14 h-14 bg-secondary cursor-pointer rounded-full"
      initial={{ rotate: "0deg" }}
      style={{ zIndex: 999, rotate: `${rotate}deg` }}
    >
      <BsArrowUpCircleFill className="scale-150 text-primary" />
    </motion.div>
  );
};

export default RotatingDiv;
