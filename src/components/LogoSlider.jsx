import React from "react";
import { Sponsers } from "../constants";

export const LogoSlider = () => {
  return (
    <div className=" w-full py-8 bg-primary whitespace-nowrap overflow-hidden">
      <div className="inline-block logo-slide-animation min-w-full overflow-hidden flex-shrink-0">
        {Sponsers?.map((data, index) => (
          <img
            className="inline-block mx-8 h-24 sm:h-32 md:h-40"
            src={data.logoImg}
            alt={data.imgText}
            key={index}
          />
        ))}
      </div>
      <div className="inline-block logo-slide-animation min-w-full overflow-hidden flex-shrink-0 ">
        {Sponsers?.map((data, index) => (
          <img
            className="inline-block mx-8 h-24 sm:h-32 md:h-40"
            src={data.logoImg}
            alt={data.imgText}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
