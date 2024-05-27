"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { donationList } from "../lib/constants";
import Link from "next/link";
import DonationCounter from "../components/DonationCounter.jsx"
import { Icon } from "@iconify/react";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [donationEst, setDonationEst] = useState(
    donationList.map((i) => ({
      donId: i.id,
      donAmount: i.amount,
      donCount: 0,
    }))
  );
  const [sumDonation, setSumDonation] = useState(0);
  useEffect(() => {
    let sum = 0;
    donationEst.forEach((i) => {
      sum = sum + i.donAmount * i.donCount;
    });
    setSumDonation(sum);
  }, [donationEst]);
  var donationSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "bg-transparent block",
    autoplay: false,
  };
  const amountSubmit = () => {
    sessionStorage.setItem("sumDonation", sumDonation);
  };
  const donationItems = donationList.map((donation) => (
    <div className="p-8 gap-5 text-center">
      <a className="overflow-hidden">
        <img
          src={`./${donation.imgLink}`}
          alt={donation.serviceName}
          className="block h-[260px] w-full px-10"
        />
      </a>
      <div className="block mt-12 px-4">
        <a className="text-2xl font-bold py-16">{donation.serviceName}</a>
        <p className="my-12 text-xl items-baseline text-red font-bold ">
          {donation.amount}
          <span>円</span>
        </p>
        <DonationCounter
          donKey={donation.id}
          donationEst={donationEst}
          setDonationEst={setDonationEst}
        />
      </div>
    </div>
  ));
  return (
    <main className="bg-[url('../../public/donationBg.jpg')] pt-8 h-screen bg-cover">
      <Sidebar />
      <div className="mt-16 border-t-2 border-t-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md -translate-y-[50%] m-auto text-center w-fit">
          ふるさと納税を始める - 返礼品を選択
        </p>
      </div>
      <div className="">
        <Slider {...donationSettings}>{donationItems}</Slider>
      </div>
      <div className="px-14 py-8">
        <p className="font-bold text-2xl text-right">
          合計寄付金額:<span className="text-xl text-red">{sumDonation}</span>
        </p>
      </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/donate"
            className="p-12 py-4 border bg-nabBg text-white text-4xl rounded-full font-bold flex items-center"
          >
            <Icon
              icon="formkit:arrowleft"
              width="48"
              height="48"
              className="mr-8"
            />
            戻る
          </Link>
        </div>
        <div>
          {sumDonation === 0 ? (
            <div className="p-12 py-4 border bg-white opacity-50 cursor-default text-nabBg text-4xl rounded-full font-bold flex items-center">
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8"
              />
            </div>
          ) : (
            <Link
              onClick={amountSubmit}
              href="/personal-info"
              className="p-12 py-4 border bg-white text-nabBg text-4xl rounded-full font-bold flex items-center"
            >
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8"
              />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
