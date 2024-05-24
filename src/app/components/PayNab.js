"use client";

import React, { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const PayNab = ({onSidebar,setOnSidebar}) => {
  const [isOnTop, setIsOnTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.pageYOffset === 0 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`justify-between w-full items-center transition-all duration-300 flex ${
        isOnTop ? "bg-transparent" : "bg-updataTagBg"
      }`}
    >
      <div className={` p-2 ml-6 font-bold w-24 rounded-sm text-sm ${ isOnTop ? "bg-nabBg text-white" : "border-white border bg-bgtransfer text-nabBg"}`}>
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
        <FontAwesomeIcon
          icon={faBars}
          className={`block w-8 tablet:hidden  ${isOnTop ? "text-viewContinue" : "text-white"}`}
          onClick={()=>{
            setOnSidebar(true)
          }}
        />
      </div>
    </div>
  );
};

export default PayNab;
