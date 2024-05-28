"use client";
import React, { useState } from "react";
import PersonInput from "../components/PersonInput";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameVerified, setFirstNameVerified] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNmaeVerified, setLastNameVerified] = useState(false);
  const [firstNameKana, setFirstNameKana] = useState("");
  const [firstNameKanaVerified, setFirstNameKanaVerified] = useState(false);
  const [lastNameKana, setLastNameKana] = useState("");
  const [lastNameKanaVerified, setLastNameKanaVerified] = useState(false);
  const [firstPhone, setFirstPhone] = useState("");
  const [firstPhoneVerified, setFirstPhoneVerified] = useState(false);
  const [secondPhone, setSecondPhone] = useState("");
  const [secondPhoneVerified, setSecondPhoneVerified] = useState(false);
  const [thirdPhone, setThirdPhone] = useState("");
  const [thirdPhoneVerified, setThirdPhoneVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const personalInfoSubmit = () => {
    const personalInfo = {
      firstName: firstName,
      lastName: lastName,
      firstNameKana: firstNameKana,
      lastNameKana: lastNameKana,
      firstPhone: firstPhone,
      secondPhone: secondPhone,
      thirdPhone: thirdPhone,
      email: email,
    };
    sessionStorage.setItem("personalinfo", JSON.stringify(personalInfo));
  };
  let allChecked = [
    firstNameVerified,
    lastNmaeVerified,
    firstNameKanaVerified,
    lastNameKanaVerified,
    firstPhoneVerified,
    secondPhoneVerified,
    thirdPhoneVerified,
    emailVerified,
  ];

  return (
    <main className="pt-8 h-screen bg-cover">
      <Sidebar />
      <div className="mt-16 border-t-2 border-t-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md -translate-y-[50%] m-auto text-center w-fit">
          個人情報入力
        </p>
      </div>
      <div className="justify-center px-16">
        <div className="grid grid-cols-5 gap-10 w-2/3 items-center m-auto left-4 relative py-8">
          <span className="pl-6 text-4xl items-start">
            お名前 (漢字)<span className="text-red">*</span>
          </span>
          <PersonInput
            inputType="text"
            placeholder="山田"
            divided={2}
            variable={firstName}
            setVariable={setFirstName}
            isVerified={firstNameVerified}
            setIsVerified={setFirstNameVerified}
          />
          <PersonInput
            inputType="text"
            placeholder="太郎"
            divided={2}
            variable={lastName}
            setVariable={setLastName}
            isVerified={lastNmaeVerified}
            setIsVerified={setLastNameVerified}
          />
        </div>
        <div className="grid grid-cols-5 gap-10 w-2/3 items-center m-auto left-4 relative py-8">
          <span className="pl-6 text-4xl items-start">
            お名前 (カナ)<span className="text-red">*</span>
          </span>
          <div className="col-span-2">
            <p className="pl-8 text-3xl">カタガナで入力してください</p>
            <PersonInput
              inputType="text"
              placeholder="ヤマタ"
              divided={2}
              variable={firstNameKana}
              setVariable={setFirstNameKana}
              isVerified={firstNameKanaVerified}
              setIsVerified={setFirstNameKanaVerified}
            />
          </div>
          <div className="col-span-2">
            <p className="pl-8 text-3xl">カタガナで入力してください</p>
            <PersonInput
              inputType="text"
              placeholder="タロウ"
              divided={2}
              variable={lastNameKana}
              setVariable={setLastNameKana}
              isVerified={lastNameKanaVerified}
              setIsVerified={setLastNameKanaVerified}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-10 w-2/3 items-center m-auto left-4 relative py-8 pr-3">
          <span className="pl-6 text-4xl items-start">
            電話番号<span className="text-red">*</span>
          </span>
          <div className="grid col-span-4 grid-cols-3 gap-10">
            <PersonInput
              inputType="number"
              divided={3}
              placeholder="000"
              variable={firstPhone}
              setVariable={setFirstPhone}
              isVerified={firstPhoneVerified}
              setIsVerified={setFirstPhoneVerified}
            />
            <PersonInput
              inputType="number"
              divided={3}
              placeholder="1234"
              variable={secondPhone}
              setVariable={setSecondPhone}
              isVerified={secondPhoneVerified}
              setIsVerified={setSecondPhoneVerified}
            />
            <PersonInput
              inputType="number"
              divided={3}
              placeholder="5678"
              variable={thirdPhone}
              setVariable={setThirdPhone}
              isVerified={thirdPhoneVerified}
              setIsVerified={setThirdPhoneVerified}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-10 w-2/3 items-center m-auto left-4 relative py-8 pr-3">
          <span className="pl-6 text-4xl items-start">
            メール<span className="text-red">*</span>
          </span>
          <PersonInput
            inputType="email"
            divided={1}
            variable={email}
            setVariable={setEmail}
            isVerified={emailVerified}
            setIsVerified={setEmailVerified}
          />
        </div>
      </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/donation-amount"
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
          {allChecked.every((value) => value === true) ? (
            <Link
              onClick={personalInfoSubmit}
              href="/donation-address"
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
