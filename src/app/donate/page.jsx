import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Page = () => {
  return (
    <main className="bg-[url('../../public/donationBg.jpg')] pt-20 min-h-screen bg-cover">
      <div className="mt-20">
        <p className="text-nabBg text-5xl font-bold text-center">
          現地での故郷納税
        </p>
        <p className="text-7xl font-bold text-center mt-20 mb-16">
          <span className="text-red text-8xl p-2">1</span>パーセント
          <span className="text-red text-8xl p-2">!</span>
        </p>
      </div>
      <div className="my-8">
        <Link href="/">
          <img
            src="./MicrosoftTeams-image-9.jpg"
            title="「1パーセント」とは？"
            alt="「1パーセント」とは？"
            className="m-auto w-1/4 border-4 border-white "
          />
        </Link>
      </div>
      <div className="text-center gap-16 flex absolute justify-center w-full bottom-20">
        <div>
          <p className="text-2xl mb-3 border-b-2 border-nabBg w-fit text-center m-auto text-grayLetter">
            寄付上限額をわかる方<span className="text-base">はこちら</span>
          </p>
          <Link
            href="/donation-amount"
            className="p-6 py-3 border hover:opacity-70 transition-all duration-300 bg-nabBg hover:gap-4 text-white text-4xl rounded-full font-bold flex"
          >
            1パーセントの寄付を始める
            <Icon
              icon="formkit:arrowright"
              width="48"
              height="48"
              className="ml-8"
            />
          </Link>
        </div>
        <div>
          <p className="text-2xl mb-3 border-b-2 border-nabBg w-fit text-center m-auto text-grayLetter">
            寄付上限額をわからない方<span className="text-base">はこちら</span>
          </p>
          <Link
            href="/simulate"
            className="p-6 py-3 border hover:opacity-70 transition-all duration-300 hover:gap-4 bg-white text-nabBg text-4xl rounded-full font-bold flex"
          >
            寄付額のシミュレータ
            <Icon
              icon="formkit:arrowright"
              width="48"
              height="48"
              className="ml-8"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
