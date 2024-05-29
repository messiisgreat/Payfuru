"use client";
import React, { useEffect, useState } from "react";
import PersonInput from "../components/PersonInput";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [noteShow, setNoteShow] = useState(false);
  let allChecked = [birthday, gender];
  useEffect(() => {
    console.log("birthday", birthday);
    console.log("gender", gender);
  }, [gender, birthday]);

  return (
    <main className="h-screen bg-cover">
      <Sidebar />
      <div className="pt-16 mb-8 border-b-2 border-b-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-3xl desktop:text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          ワンストップ特例申請情報
        </p>
      </div>
      <div className="justify-center max-w-[90%] tablet:max-w-[75%] laptop:max-w-[50%] m-auto my-32">
        <div className="flex gap-10 phone:gap-20 tablet:gap-40 my-16">
          <span className="text-2xl flex items-center gap-1">
            性別
            <Icon
              icon="mage:exclamation-circle"
              width="24"
              height="24"
              className="text-bluetext hover:opacity-70"
              onMouseOver={() => {
                setNoteShow(true);
              }}
              onMouseLeave={() => {
                setNoteShow(false);
              }}
            />
            <span
              className={`absolute translate-x-20 -translate-y-6 p-3 shadow ${
                noteShow ? "block" : "hidden"
              }`}
            >
              ダミーテキスト
            </span>
          </span>
          <div className="flex gap-24 text-xl">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="gender"
                id="man"
                value="man"
                className="w-4 h-4"
                checked={gender === "man"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="gender" className="flex items-center">
                男性
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="gender"
                id="woman"
                value="woman"
                className="w-4 h-4"
                checked={gender === "woman"}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="gender">女性</label>
            </div>
          </div>
        </div>
        <div className="flex gap-10 phone:gap-20 tablet:gap-40 my-16">
          <span className="text-2xl flex items-center gap-1">生年月日</span>
          <div className="">
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="border-2 border-viewContinue px-6 p-4 rounded-full"
              value={birthday}
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center gap-6 phone:gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          {allChecked.every((value) => !value == "") ? (
            <Link
              href="/donation-usecase"
              className="p-6 tablet:p-12 py-2 tablet:py-4 border bg-white text-nabBg text-2xl desktop:text-4xl rounded-full font-bold flex items-center"
            >
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </Link>
          ) : (
            <div className="p-6 tablet:p-12 py-2 tablet:py-4 border bg-white opacity-50 cursor-default text-nabBg text-2xl desktop:text-4xl rounded-full font-bold flex items-center">
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
