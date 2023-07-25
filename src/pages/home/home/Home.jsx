import React from "react";
import Slider from "../../../components/banner/Slider";
import PopularClasses from "../popularClass/PopularClasses";
import PopularInstructors from "./popularInstructor/PopularInstructors";
import WhoWe from "./whoWe/WhoWe";
import useTitle from "../../../hooks/useTitle";
import Events from "./event/Events";
import BannerSlider from "../../../components/banner/BannerSlider";
import WeOffer from "./WeOffer";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto px-4 md:px-0">
        <Events />
        <PopularClasses />
        <PopularInstructors />
        <WeOffer />
        <WhoWe />
      </div>
    </div>
  );
};

export default Home;
