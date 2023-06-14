import React from "react";
import Slider from "../../../components/banner/Slider";
import PopularClasses from "../popularClass/PopularClasses";
import PopularInstructors from "./popularInstructor/PopularInstructors";
import WhoWe from "./whoWe/WhoWe";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider />
      <div className="container mx-auto px-4 md:px-0">
        <PopularClasses />
        <PopularInstructors />
        <WhoWe />
      </div>
    </div>
  );
};

export default Home;
