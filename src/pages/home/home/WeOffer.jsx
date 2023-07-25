import React from "react";
import offerImg1 from "../../../assets/images/offer/events-offer-01.jpg";
import offerImg2 from "../../../assets/images/offer/events-offer-02.jpg";
import offerImg3 from "../../../assets/images/offer/events-offer-03.jpg";

const WeOffer = () => {
  return (
    <div className="pb-20 mt-16">
      <div className="text-center space-y-3 mb-8">
        <h2 className="font-semibold text-4xl">What We Offers</h2>
        <p className="md:w-10/12 lg:w-2/3 mx-auto">
          Comprehensive curriculum, expert instructors, interactive learning,
          modern facilities, cutting-edge technology, hands-on projects,
          personalized attention, supportive
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="flex justify-center items-center bg-no-repeat bg-cover bg-center text-white relative"
          style={{ backgroundImage: `url(${offerImg1})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          <div className="text-center space-y-4 relative border-2 border-white py-16 px-12 mx-6 my-10">
            <h4 className="text-2xl font-bold">Corporate Events</h4>
            <p>
              A friendly happy hour, a company holiday party, or an evening of
              entertainment for VIP.
            </p>
            <button className="buttonBorder absolute -bottom-20">
              <span>Know More</span>
              <i></i>
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-no-repeat bg-cover bg-center text-white relative"
          style={{ backgroundImage: `url(${offerImg2})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          <div className="text-center space-y-4 relative border-2 border-white py-16 px-12 mx-6 my-10">
            <h4 className="text-2xl font-bold">Corporate Events</h4>
            <p>
              A friendly happy hour, a company holiday party, or an evening of
              entertainment for VIP.
            </p>
            <button className="buttonBorder absolute -bottom-20">
              <span>Know More</span>
              <i></i>
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-no-repeat bg-cover bg-center text-white relative"
          style={{ backgroundImage: `url(${offerImg3})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          <div className="text-center space-y-4 relative border-2 border-white py-16 px-12 mx-6 my-10">
            <h4 className="text-2xl font-bold">Corporate Events</h4>
            <p>
              A friendly happy hour, a company holiday party, or an evening of
              entertainment for VIP.
            </p>
            <button className="buttonBorder absolute -bottom-20">
              <span>Know More</span>
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
