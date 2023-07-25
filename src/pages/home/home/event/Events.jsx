import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./events.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import eventImg1 from "../../../../assets/images/tickets/tickets-col-01.jpg";
import eventImg2 from "../../../../assets/images/tickets/tickets-col-02.jpg";
import eventImg3 from "../../../../assets/images/tickets/tickets-col-03.jpg";
import eventImg4 from "../../../../assets/images/tickets/tickets-col-04.jpg";
import eventImg5 from "../../../../assets/images/tickets/tickets-col-05.jpg";
import eventImg6 from "../../../../assets/images/tickets/tickets-col-06.jpg";
import eventImg7 from "../../../../assets/images/tickets/tickets-wide-01.jpg";
import eventImg8 from "../../../../assets/images/tickets/tickets-wide-02.jpg";
import eventImg9 from "../../../../assets/images/tickets/tickets-wide-03.jpg";
import eventImg10 from "../../../../assets/images/tickets/tickets-wide-04.jpg";
import eventImg11 from "../../../../assets/images/tickets/tickets-wide-05.jpg";

const Events = () => {
  return (
    <div className="mt-12">
      <div className="text-center space-y-3">
        <h2 className="font-semibold text-4xl">Upcoming Events</h2>
      </div>
      <div className="mainSwiper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="h-full">
            <div className="relative">
              <img className="h-full" src={eventImg1} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                25 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg2} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                26 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg3} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                28 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg4} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                20 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg5} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                22 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg6} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                19 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg7} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                16 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg8} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                12 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg9} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                11 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg10} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                25 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="h-full" src={eventImg11} />
              <div className="absolute bg-red-500 text-white py-4 px-4 -top-2 right-6 font-bold text-xl text-center">
                05 <br />
                Aug
              </div>
              <div className="flex flex-col gap-4 justify-center items-center absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 duration-500">
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Buy tickets</span>
                  <i></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
