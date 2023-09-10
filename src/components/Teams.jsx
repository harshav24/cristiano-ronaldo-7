import React, { useState } from "react";
import SectionWrapper from "../utils/SectionWrapper";
import StadiumOne from "../assets/images/stadium-one.png";
import StadiumTwo from "../assets/images/stadium-two.png";
import { TeamsData } from "../constants";

const TeamCard = () => {
  const [animation, setAnimation] = useState("");

  const handleAnimate = (e) => {
    console.log(e, "hi");
    setAnimation(e);
  };

  return TeamsData.map((data, index) => (
    <div
      onMouseEnter={() => handleAnimate(index)}
      onMouseLeave={() => setAnimation("")}
      style={{ backgroundColor: data.colorCode }}
      className={`relative z-20  w-80 h-80 rounded-lg overflow-hidden whitespace-nowrap shadow-lg`}
    >
      <div
        className={`inline-block ${
          index === animation ? "slide-out-animation" : ""
        }  w-full`}
      >
        <div className="w-52 mt-2 text-2xl font-extrabold translate-x-14 text-center">
          {data?.team}
        </div>
        <img src={data?.img} alt="" className="mt-20  w-52 translate-x-14" />
      </div>
      <div
        className={`inline-block ${
          index === animation ? "slide-out-animation" : ""
        }  w-full`}
      >
        <div className="w-52 mt-2 text-2xl font-extrabold translate-x-14 text-center">
          {data?.team}
        </div>
        <img src={data?.img} alt="" className="mt-20  w-52 translate-x-14" />
      </div>
    </div>
  ));
};

const Teams = () => {
  return (
    <div className="relative flex justify-center h-[345vh] sm:h-[190vh] lg:h-[135vh] w-screen bg-primary overflow-hidden">
      <div className="block absolute w-[150vw] md:w-[200vw] bg-secondary rounded-[150%] md:rounded-[250%] left-1/2 -translate-x-1/2 pb-[138%]"></div>
      <div className="absolute w-full text-center mt-4">
        <h1 className="text-[3.5rem] title">TEAMS</h1>
      </div>
      <div className="absolute w-full bg-secondary flex justify-center mx-auto top-32 sm:mt-24 lg:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-auto  h-[345vh] sm:h-[160vh] lg:h-[105vh] mb-32 bg-secondary">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Teams, "teams");
