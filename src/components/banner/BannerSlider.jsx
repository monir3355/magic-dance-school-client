import React from "react";
import slideImg1 from "../../assets/images/mainSlider/mainslide-01.jpg";
import slideImg2 from "../../assets/images/mainSlider/mainslide-03.jpg";
import slideImg3 from "../../assets/images/mainSlider/mainslide-04.jpg";

const BannerSlider = () => {
  return (
    <div>
      <div>
        <div>
          <div className="relative">
            <img src={slideImg1} alt="" />
            <div className="absolute inset-0 text-[300px] font-bold flex justify-center items-center opacity-75">
              DANCE
            </div>
            <div>
              <h4>The Perfect Nightlife</h4>
              <h1>
                FEEL THE NIGHT HERE
                <br />
                With Friends
              </h1>
              <div>
                <button className="buttonBorder mr-6">
                  <span>Our Classes</span> <i></i>
                </button>
                <button className="buttonBorder">
                  <span>Our Instructors</span> <i></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
