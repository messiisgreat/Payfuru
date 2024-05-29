"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Page = () => {
  return (
    <main className="bg-[url('../../public/img/donationBg.jpg')] pt-20 min-h-screen bg-cover">
      <div className="mt-0 tablet:mt-10">
        <p className="text-nabBg text-2xl tablet:text-4xl font-bold text-center">
          現地での故郷納税
        </p>
        <p className="text-4xl tablet:text-6xl font-bold text-center mt-14 mb-16">
          <span className="text-red text-5xl tablet:text-7xl p-2">1</span>
          パーセント
          <span className="text-red text-5xl tablet:text-7xl p-2">!</span>
        </p>
      </div>
      <div className="my-8">
        <Link href="/">
          <img
            src="./img/MicrosoftTeams-image-9.jpg"
            title="「1パーセント」とは？"
            alt="「1パーセント」とは？"
            className="m-auto w-1/2 tablet:w-1/3 laptop:w-1/4 border-4 border-white"
          />
        </Link>
      </div>
      <div className="text-center gap-16 block tablet:flex justify-center w-full bottom-20 pb-10">
        <div className="mb-10 tablet:mb-0">
          <Link
            href="/card-payment"
            className="text-nowrap p-6 py-3 border hover:opacity-70 transition-all duration-300 bg-nabBg text-white text-base phone:text-xl tablet:text-3xl rounded-full font-bold flex items-center justify-center mx-14 tablet:mx-0"
          >
            お支払いを始める
            <Icon
              icon="formkit:arrowright"
              width="48"
              height="48"
              className="ml-3 phone:ml-8 hidden phone:block"
            />
          </Link>
        </div>
        <div>
          <Link
            href="/simulate"
            className="text-nowrap p-6 py-3 border hover:opacity-70 transition-all duration-300 bg-white text-nabBg text-base phone:text-xl tablet:text-3xl rounded-full font-bold flex items-center justify-center mx-14 tablet:mx-0"
          >
            寄付額のシミュレータ
            <Icon
              icon="formkit:arrowright"
              width="48"
              height="48"
              className="ml-3 phone:ml-8 hidden phone:block"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
