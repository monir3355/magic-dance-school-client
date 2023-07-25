import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import sliderImg1 from "../../assets/images/events/events-parties-01.jpg";
import sliderImg2 from "../../assets/images/events/events-parties-02.jpg";
import sliderImg3 from "../../assets/images/events/events-parties-03.jpg";
import sliderImg4 from "../../assets/images/events/events-parties-04.jpg";
import { Link } from "react-router-dom";

import anime from "animejs";

const BannerSlider = () => {
  const textRef = useRef(null);
  useEffect(() => {
    anime({
      targets: textRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] xl:h-[600px] w-full relative">
            <img className="h-full w-full" src={sliderImg1} />
            <p className="inset-0 absolute bg-black/60"></p>
            <div
              ref={textRef}
              className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4"
            >
              <h2 className=" text-4xl font-bold">
                LEADING TO THE DANCE OF HEART...
              </h2>
              <p>
                Dance as if nobody is watching. Enjoy each step along the way
                that takes you into the unknown space. Let go and allow your
                life play out its dance on the edge of time like dew drops on
                the tip of a leaf…melt into the moment that is available!
              </p>
              <div className="flex gap-4">
                <Link to="/classes">
                  <button className="buttonBorder">
                    <span>Our Classes</span> <i></i>
                  </button>
                </Link>
                <Link to="/instructors">
                  <button className="buttonBorder">
                    <span>Our Instructors</span> <i></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] xl:h-[600px] w-full relative">
            <img className="h-full" src={sliderImg2} />
            <p className="inset-0 absolute bg-black/60"></p>
            <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
              <h2 className=" text-4xl font-bold">
                LEADING TO THE DANCE OF HEART...
              </h2>
              <p>
                Dance as if nobody is watching. Enjoy each step along the way
                that takes you into the unknown space. Let go and allow your
                life play out its dance on the edge of time like dew drops on
                the tip of a leaf…melt into the moment that is available!
              </p>
              <div className="flex gap-4">
                <Link to="/classes">
                  <button className="buttonBorder">
                    <span>Our Classes</span> <i></i>
                  </button>
                </Link>
                <Link to="/instructors">
                  <button className="buttonBorder">
                    <span>Our Instructors</span> <i></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] xl:h-[600px] w-full relative">
            <img className="h-full" src={sliderImg3} />
            <p className="inset-0 absolute bg-black/60"></p>
            <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
              <h2 className=" text-4xl font-bold">
                LEADING TO THE DANCE OF HEART...
              </h2>
              <p>
                Dance as if nobody is watching. Enjoy each step along the way
                that takes you into the unknown space. Let go and allow your
                life play out its dance on the edge of time like dew drops on
                the tip of a leaf…melt into the moment that is available!
              </p>
              <div className="flex gap-4">
                <Link to="/classes">
                  <button className="buttonBorder">
                    <span>Our Classes</span> <i></i>
                  </button>
                </Link>
                <Link to="/instructors">
                  <button className="buttonBorder">
                    <span>Our Instructors</span> <i></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] xl:h-[600px] w-full relative">
            <img className="h-full" src={sliderImg4} />
            <p className="inset-0 absolute bg-black/60"></p>
            <div className="px-4 flex flex-col items-center justify-center inset-0 absolute text-white md:w-4/6 mx-auto space-y-4">
              <h2 className=" text-4xl font-bold">
                LEADING TO THE DANCE OF HEART...
              </h2>
              <p>
                Dance as if nobody is watching. Enjoy each step along the way
                that takes you into the unknown space. Let go and allow your
                life play out its dance on the edge of time like dew drops on
                the tip of a leaf…melt into the moment that is available!
              </p>
              <div className="flex gap-4">
                <Link to="/classes">
                  <button className="buttonBorder">
                    <span>Our Classes</span> <i></i>
                  </button>
                </Link>
                <Link to="/instructors">
                  <button className="buttonBorder">
                    <span>Our Instructors</span> <i></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default BannerSlider;
