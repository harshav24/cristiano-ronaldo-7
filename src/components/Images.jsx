import React, { useRef, useState } from "react";
import SectionWrapper from "../utils/SectionWrapper";
import { ImageData } from "../constants";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

const ImageCard = ({ index, image, data, colorCode }) => {
  const [imagePopup, setImagePopup] = useState("");
  return (
    <motion.div
      variants={zoomIn([0, 1.15, 1], index * 0.2, 0.4)}
      onMouseEnter={() => setImagePopup(index)}
      onMouseLeave={() => setImagePopup("")}
      style={{ backgroundColor: colorCode }}
      className={`flex justify-center items-center h-[85vh] w-72 ml-4  rounded-lg overflow-hidden ${
        index === imagePopup ? "shadow-lg" : ""
      }`}
      key={index}
    >
      <img
        src={image}
        alt=""
        className={`${
          index === imagePopup ? "scale-125" : "scale-115"
        } transition-all ease-linear duration-100`}
      />
    </motion.div>
  );
};

const Images = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    // containerRef.current.classList.add("bg-primary");
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex items-center w-screen h-screen pl-10">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {ImageData?.map((data, index) => (
          <div className="w-80">
            <ImageCard
              image={data?.image}
              date={data?.data}
              colorCode={data?.colorCode}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Images, "images");
