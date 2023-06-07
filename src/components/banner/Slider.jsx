import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../../assets/images/slider/slider1.jpeg";
import sliderImg2 from "../../assets/images/slider/slider2.jpeg";
import sliderImg3 from "../../assets/images/slider/slider3.jpeg";
import sliderImg4 from "../../assets/images/slider/slider4.jpeg";

const Slider = () => {
  return (
    <Carousel className="text-center">
      <div className="h-[500px] xl:h-[600px] relative">
        <img className="h-full" src={sliderImg1} />
        <p className="inset-0 absolute bg-black/60"></p>
        <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
          <h2 className=" text-4xl font-bold">
            LEADING TO THE DANCE OF HEART...
          </h2>
          <p>
            Dance as if nobody is watching. Enjoy each step along the way that
            takes you into the unknown space. Let go and allow your life play
            out its dance on the edge of time like dew drops on the tip of a
            leaf…melt into the moment that is available!
          </p>
          <div className="flex gap-4">
            <button className="button-primary">Our Services</button>
            <button className="button-outline">Get a quote</button>
          </div>
        </div>
      </div>
      <div className="h-[500px] xl:h-[600px] relative">
        <img className="h-full" src={sliderImg2} />
        <p className="inset-0 absolute bg-black/60"></p>
        <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
          <h2 className=" text-4xl font-bold">
            LEADING TO THE DANCE OF HEART...
          </h2>
          <p>
            Dance as if nobody is watching. Enjoy each step along the way that
            takes you into the unknown space. Let go and allow your life play
            out its dance on the edge of time like dew drops on the tip of a
            leaf…melt into the moment that is available!
          </p>
          <div className="flex gap-4">
            <button className="button-primary">Our Services</button>
            <button className="button-outline">Get a quote</button>
          </div>
        </div>
      </div>
      <div className="h-[500px] xl:h-[600px] relative">
        <img className="h-full" src={sliderImg3} />
        <p className="inset-0 absolute bg-black/60"></p>
        <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
          <h2 className=" text-4xl font-bold">
            LEADING TO THE DANCE OF HEART...
          </h2>
          <p>
            Dance as if nobody is watching. Enjoy each step along the way that
            takes you into the unknown space. Let go and allow your life play
            out its dance on the edge of time like dew drops on the tip of a
            leaf…melt into the moment that is available!
          </p>
          <div className="flex gap-4">
            <button className="button-primary">Our Services</button>
            <button className="button-outline">Get a quote</button>
          </div>
        </div>
      </div>
      <div className="h-[500px] xl:h-[600px] relative">
        <img className="h-full" src={sliderImg4} />
        <p className="inset-0 absolute bg-black/60"></p>
        <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
          <h2 className=" text-4xl font-bold">
            LEADING TO THE DANCE OF HEART...
          </h2>
          <p>
            Dance as if nobody is watching. Enjoy each step along the way that
            takes you into the unknown space. Let go and allow your life play
            out its dance on the edge of time like dew drops on the tip of a
            leaf…melt into the moment that is available!
          </p>
          <div className="flex gap-4">
            <button className="button-primary">Our Services</button>
            <button className="button-outline">Get a quote</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
