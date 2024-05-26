"use client";
import React, { useEffect, useState } from "react";
import RadioButton from "../components/RadioButton";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [selected, setSelected] = useState(false);
  const [checkNumber, setCheckNumber] = useState("");
  const useCaseSubmit = () => {
    sessionStorage.setItem("checkNumber", checkNumber);
  };

  useEffect(() => {
    !checkNumber == "" ? setSelected(true) : null;
  }, [checkNumber]);
  return (
    <main className="bg-cover">
      <Sidebar />
      <div className="border-b-2 border-b-nabBg pt-20">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          寄附金の使い道を選択
        </p>
      </div>
      <div className="justify-center">
        <div className="block gap-10 w-4/5 items-center m-auto left-4 relative">
          <div className="my-14">
            <p className="text-5xl text-left">
              本年度確定申告をする予定はありますか？
            </p>
          </div>
          <form action="" className="pl-5">
            <RadioButton
              id="optoin1"
              name="donationpurpose"
              text="未来ある子どもたちのために"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin2"
              name="donationpurpose"
              text="誰もが暮らしやすい地域のために"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin3"
              name="donationpurpose"
              text="オプション1"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin4"
              name="donationpurpose"
              text="オプション2"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin5"
              name="donationpurpose"
              text="オプション3"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin6"
              name="donationpurpose"
              text="オプション4"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
            <RadioButton
              id="optoin7"
              name="donationpurpose"
              text="オプション5"
              checkedValue={checkNumber}
              setCheckedValue={setCheckNumber}
            />
          </form>
        </div>
      </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/final-report"
            className="p-12 py-4 border bg-nabBg text-white text-4xl rounded-full font-bold flex"
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
          {selected ? (
            <Link
              onClick={useCaseSubmit}
              href="/confirm-report"
              className="p-12 py-4 border bg-white text-nabBg text-4xl rounded-full font-bold flex"
            >
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8"
              />
            </Link>
          ) : (
            <div className="p-12 py-4 border bg-white opacity-50 cursor-default text-nabBg text-4xl rounded-full font-bold flex">
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
