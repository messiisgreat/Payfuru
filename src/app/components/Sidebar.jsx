"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Sidebar = () => {
    const [onSidebar, setOnSidebar] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (typeof window !== 'undefined') {
          setIsOnTop(window.pageYOffset === 0 ? true : false);
        }
      };
      if (typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

  return (
    <>
      <div
        className={`p-6 justify-between fixed z-40 w-full items-center transition-all duration-300 flex ${
          isOnTop ? "bg-transparent" : "bg-updataTagBg"
        }`}
      >
        <div
          className={` p-2 ml-6 font-bold w-24 rounded-sm text-sm ${
            isOnTop
              ? "bg-nabBg text-white"
              : "border-white border bg-bgtransfer text-nabBg"
          }`}
        >
          1パーセント
        </div>
        <div className="">
          <ul className="gap-8 hidden tablet:flex transition-all duration-300 mr-6">
            <li>
              <Link
                className={`border rounded bg-bgtransfer transition-all duration-300 font-bold hover:opacity-70 ${
                  isOnTop
                    ? "text-viewContinue border-viewContinue p-4"
                    : "text-white border-white p-2"
                }`}
                href="/simulate"
              >
                寄附額シミュレーター
              </Link>
            </li>
            <li>
              <Link
                className={`text-white transition-all duration-300 font-bold hover:opacity-70 ${
                  isOnTop ? "bg-nabBg py-3 px-6 rounded-lg" : ""
                }`}
                href=""
              >
                導入をご検討中の方はこちら
              </Link>
            </li>
          </ul>
          <Icon
            icon="fe:bar"
            width="24"
            height="24"
            className={`block w-8 tablet:!hidden  ${
              isOnTop ? "text-viewContinue" : "text-white"
            }`}
            onClick={() => {
              setOnSidebar(true);
            }}
          />
        </div>
      </div>
      <aside
        className={`fixed top-0 transform transition-all z-50 p-8 duration-300 bg-black min-h-screen block w-[380px] ${
          onSidebar ? "right-0" : "right-[-380px]"
        }`}
      >
        <Icon
          icon="mdi:multiply-bold"
          width="48"
          height="48"
          onClick={() => {
            setOnSidebar(false);
          }}
          className="p-2 text-white"
        />
        <Link
          className="text-white p-2 border-b border-transferBorder hover:text-hoverButton block font-bold"
          href="/simulate"
        >
          寄附額シミュレーター
        </Link>
        <Link
          className="text-white p-2 border-b border-transferBorder hover:text-hoverButton block font-bold"
          href="/"
        >
          導入をご検討中の方はこちら
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
