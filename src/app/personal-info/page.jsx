"use client";
import React, { useEffect, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  
  const personalInfoSubmit = () => {
    const personalInfo = {
      firstName: firstName,
      lastName: lastName,
      firstNameKana: firstNameKana,
      lastNameKana: lastNameKana,
      email: email,
    };
    sessionStorage.setItem("personalinfo", JSON.stringify(personalInfo));
  };
  let allChecked = [
    firstNameVerified,
    lastNmaeVerified,
    firstNameKanaVerified,
    lastNameKanaVerified,
    emailVerified,
  ];

  return (
    <main className="h-screen bg-cover">
      <Sidebar />
      <div className="pt-16 mb-8 border-b-2 border-b-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-3xl desktop:text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          個人情報入力
        </p>
      </div>
      <div className="justify-center">
        <div className="block tablet:grid grid-cols-5 gap-3 desktop:gap-10 mx-6 tablet:mx-16 items-center m-auto left-0 tablet:left-4 relative py-3 tablet:py-8">
          <span className="pl-6 text-2xl desktop:text-4xl items-start">
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
        <div className="block tablet:grid grid-cols-5 gap-3 desktop:gap-10 mx-6 tablet:mx-16 items-center m-auto left-0 tablet:left-4 relative py-3 tablet:py-8">
          <span className="pl-6 text-2xl desktop:text-4xl items-start">
            お名前 (カナ)<span className="text-red">*</span>
          </span>
          <div className="col-span-2">
            <p className="pl-8 text-lg desktop:text-3xl">カタガナで入力してください</p>
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
            <p className="pl-8 text-lg desktop:text-3xl">カタガナで入力してください</p>
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
        <div className="block tablet:grid grid-cols-5 gap-3 desktop:gap-10 mx-6 tablet:mx-16 items-center m-auto left-0 tablet:left-4 relative py-3 tablet:py-8 pr-3">
          <span className="pl-6 text-2xl desktop:text-4xl items-start">
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
      <div className="text-center gap-6 phone:gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          {allChecked.every((value) => value === true) ? (
            <Link
              href="/donation-address"
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
