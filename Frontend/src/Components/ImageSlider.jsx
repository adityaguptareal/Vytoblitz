import React from "react";
import "../App.css"; // Import the custom styles for animation
import BinaryBeasts from "../assets/Landingpage/Binary Beasts.png";
import CodeWarriors from "../assets/Landingpage/Code Warriors.png"
import Error404 from "../assets/Landingpage/Error 404.png"
import MixiFyDev from "../assets/Landingpage/MixiFy Dev.png"

const ImageSlider = () => {
  return (
    <div className="overflow-hidden relative w-full h-[60px] bg-gradient-to-r from-purple-500 to-blue-500">      <div className="image-slider flex gap-8">
        {/* Replace these images with your set of logos or images */}
        <img src={BinaryBeasts} alt="Logo 1" className="w-32 h-32 object-contain" />
        <img src={CodeWarriors} alt="Logo 2" className="w-32 h-32 object-contain" />
        <img src={Error404} alt="Logo 3" className="w-32 h-32 object-contain" />
        <img src={MixiFyDev} alt="Logo 4" className="w-32 h-32 object-contain" />
        {/* You can duplicate the images here for continuous flow */}
        <img src={BinaryBeasts} alt="Logo 1" className="w-32 h-32 object-contain" />
        <img src={CodeWarriors} alt="Logo 2" className="w-32 h-32 object-contain" />
        <img src={Error404} alt="Logo 3" className="w-32 h-32 object-contain" />
        <img src={MixiFyDev} alt="Logo 4" className="w-32 h-32 object-contain" />
        </div>
    </div>
  );
};

export default ImageSlider;
