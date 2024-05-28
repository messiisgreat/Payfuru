"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {updateGroup} from "../lib/constants";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  className: "bg-white w-full block",
  autoplay: true,
};
const newUpdates = updateGroup.map((update) => (
  <div className="p-8 !flex gap-5">
    <a href="" className="overflow-hidden"><img
        src={update.imgUrl ? `./slides/${update.imgUrl}` : `./slides/placeholder.png`}
        alt={update.content}
        className="block h-[260px] w-[260px] hover:scale-125 transition-all duration-500"
    /></a>
    <div className="block max-w-[50%] ">
    <p className="bg-updataTagBg text-white p-2 py-1 rounded-sm w-fit mb-5">{update.tag}</p>
    <a className="text-xl font-bold" href="">{update.content}</a>
    <p className="font-thin my-5">{ update.date }</p>
    <p className="my-5 font-normal">{ update.title }</p>
    <a className="text-viewContinue font-bold" href="">続きを見る</a>
    </div>
  </div>
));

const UpdateSlider = () => {
  return <Slider {...settings}>{newUpdates}</Slider>;
};

export default UpdateSlider;
