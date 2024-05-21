"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {newsGroup} from "../lib/constants";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  className: "bg-white w-[90%]",
  autoplay: true,
};
const newItems = newsGroup.map((news) => (
  <div className="p-4 pl-4">
    <span>{news.content}</span>
    <span className="font-thin text-sm ml-3">{news.date}</span>
  </div>
));

const TextSlider = () => {
  return <Slider {...settings}>{newItems}</Slider>;
};

export default TextSlider;
