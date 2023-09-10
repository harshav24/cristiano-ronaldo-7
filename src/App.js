import { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Landing from "./components/Landing";
import HamMenu from "./components/HamMenu";
import Scroller from "./components/Scroller";
import { LogoSlider } from "./components/LogoSlider";
import ParallaxContainer from "./components/ParallaxContainer";
import Awards from "./components/Awards";
import Teams from "./components/Teams";
import Images from "./components/Images";

import Rotate from "./components/Rotate";
import Thanks from "./components/Thanks";

function App() {
  const [visbile, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`bg-primary overflow-hidden`}>
      <Topbar />
      <Scroller />
      <HamMenu />
      <Landing />
      <LogoSlider />
      <ParallaxContainer />
      <Awards />
      <Teams />
      <Images />
      {visbile && (
        <div onClick={handleTop}>
          <Rotate />
        </div>
      )}
      <Thanks />
    </div>
  );
}

export default App;
