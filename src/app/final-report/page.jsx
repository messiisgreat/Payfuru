"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-cover">
      <Sidebar />
      <div className="border-b-2 border-b-nabBg pt-20">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          ワンストップ特例申請情報
        </p>
      </div>
      <div className="justify-center">
        <div className="block gap-10 w-4/5 items-center m-auto left-4 relative py-6">
          <div className="my-14">
            <p className="text-6xl text-center">
              本年度確定申告をする予定はありますか？
            </p>
          </div>
          <div className="flex justify-around">
            <div className="w-1/3">
              <Link
                className="font-bold rounded-full bg-nabBg text-3xl text-white p-16 py-8 border-4 w-full block text-center"
                href="/onestop-info"
              >
                いいえもしくはわからない
              </Link>
              <p className="text-2xl leading-relaxed py-4 px-6 font-bold text-center">
                <Icon
                  icon="mage:exclamation-circle"
                  width="24"
                  height="24"
                  className="inline mr-2"
                />
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
              </p>
            </div>
            <div className="w-1/3">
              <Link
                className="font-bold rounded-full text-nabBg bg-white p-16 py-8 border-4 text-3xl text-center w-full block"
                href="/donation-usecase"
              >
                はい
              </Link>
              <p className="text-2xl leading-relaxed pt-6 font-bold text-center text-red">
                ダミーテキストダミーテキストダミーテキストダミーテキ
              </p>
              <p className="text-xl leading-relaxed px-6 font-bold text-center">
                <Icon
                  icon="mage:exclamation-circle"
                  width="24"
                  height="24"
                  className="inline mr-2"
                />
                ダミーテキストダミーテキストダミーテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/donation-address"
            className="p-4 border-4 text-nabBg bg-white text-4xl rounded-full font-bold flex"
          >
            <Icon icon="formkit:arrowleft" />
            <span className="mx-32">戻る</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
