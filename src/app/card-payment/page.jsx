"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import validator from "validator";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Page = () => {
  const [payerMail, setPayerMail] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [hasrenderd, setHasrenderd] = useState(false);
  const [ccNumber, setCcNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [payerPhoneNumber, setPayerPhoneNumber] = useState("")
  useEffect(() => {
    setHasrenderd(false);
  }, []);
  const handleInputChange = (e) => {
    setPayerMail(e.target.value);
    if (!hasrenderd) {
      setHasrenderd(true);
    }
  };
  const formatAndSetCcNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }

    setCcNumber(spacedNumber);
  };
  const formatAndSetPayerPhoneNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 10) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 10);
    }

    let formattedNumber = "";
    if (inputNumbersOnly.length > 0) {
      formattedNumber = inputNumbersOnly.substr(0, 3);
    }
    if (inputNumbersOnly.length > 3) {
      formattedNumber += " " + inputNumbersOnly.substr(3, 3);
    }
    if (inputNumbersOnly.length > 6) {
      formattedNumber += " " + inputNumbersOnly.substr(6, 4);
    }

    setPayerPhoneNumber(formattedNumber);
  };
  return (
    <main>
      <Sidebar />
      <div className="h-[250px] overflow-hidden">
        <img src="./furusato.jpg" alt="" className="w-full" />
      </div>
      <div className="justify-center px-4 phone:px-16 bg-white w-full m-auto block tablet:flex gap-10 py-12">
        <div className="w-full tablet:w-1/2">
          <p className="text-grayLetter font-bold text-2xl my-3">決済情報</p>
          <form action="">
            <div className="mb-3">
              <label className="text-grayLetter mb-2">メールアドレス</label>
              <div
                className={`flex bg-inputBg shadow p-2 w-full items-center ${
                  hasrenderd && !validator.isEmail(payerMail)
                    ? "outline-viewContinue outline rounded"
                    : null
                }`}
              >
                <Icon
                  icon="material-symbols-light:mail"
                  width="24"
                  height="24"
                  className="absolute ml-1 text-grayLetter"
                />
                <input
                  type="text"
                  className="ml-8 bg-inputBg outline-none w-full"
                  value={payerMail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-grayLetter mb-2">カード番号</label>
              <div className="flex bg-inputBg shadow p-1 w-full items-center pr-2">
                <input
                  type="text"
                  className="ml-2 bg-inputBg outline-none w-full"
                  placeholder="1234 1234 1234 1234"
                  value={ccNumber}
                  onChange={formatAndSetCcNumber}
                />
                <Icon
                  icon="logos:visa"
                  width="32"
                  height="32"
                  className="right-2 ml-1 text-grayLetter"
                />
                <Icon
                  icon="noto:credit-card"
                  width="32"
                  height="32"
                  className="ml-1"
                />
                <Icon
                  icon="logos:jcb"
                  width="32"
                  height="32"
                  className="ml-1"
                />
                <Icon
                  icon="formkit:stripe"
                  width="32"
                  height="32"
                  className="ml-1"
                />
              </div>
            </div>
            <div className="mb-3 w-full">
              <div className="flex gap-5 w-full">
                <div className="w-1/2">
                  <label className="text-grayLetter mb-2">有効期間</label>
                  <div className="flex bg-inputBg shadow p-1 w-full items-center pr-2">
                    <input
                      type="date"
                      className="ml-2 bg-inputBg outline-none w-full"
                      value={expireDate}
                      onChange={(e) => {
                        setExpireDate(e.target.value);
                      }}
                    />
                    {/* <Icon icon="bxs:calendar" width="26" height="26" className="right-2 ml-1 text-grayLetter"/> */}
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="text-grayLetter mb-2">CVC</label>
                  <div className="flex bg-inputBg shadow p-1 w-full items-center pr-2">
                    <input
                      type="text"
                      className="ml-2 bg-inputBg outline-none w-full"
                      placeholder="CVC"
                    />
                    <Icon
                      icon="cryptocurrency:cvc"
                      width="26"
                      height="26"
                      className="right-2 ml-1 text-grayLetter"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-grayLetter mb-2">名義人氏名</label>
              <div className="flex bg-inputBg shadow p-2 w-full items-center ">
                <Icon
                  icon="solar:cardholder-bold"
                  width="24"
                  height="24"
                  className="absolute ml-1 text-grayLetter"
                />
                <input
                  type="text"
                  className="ml-8 bg-inputBg outline-none w-full"
                  value={cardHolder}
                  onChange={(e) => {
                    setCardHolder(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <button className="w-full bg-nabBg text-white rounded-md py-3 text-2xl font-bold my-3 hidden tablet:block">
            お支払い 30000円
          </button>
          <p className="text-grayLetter text-opacity-70 underline decoration-dotted hidden tablet:flex items-center gap-2 justify-center">
            <Icon icon="fa6-solid:lock" width="16" height="16" />
            <span className="underline decoration-dotted">Payment secured</span>
          </p>
        </div>
        <div className="w-full tablet:w-1/2 mt-6 tablet:mt-0">
          <div className="bg-inputBg p-6 rounded-lg shadow">
            <label className="text-grayLetter font-bold text-2xl">
              電話番号
            </label>
            <div className="flex bg-inputBg shadow p-1 w-full items-center pr-2 mt-3">
              <input
                type="text"
                className="ml-2 bg-inputBg outline-none w-full text-2xl"
                placeholder="123 456 7890"
                value={payerPhoneNumber}
                onChange={formatAndSetPayerPhoneNumber}
              />
              <Icon
                icon="gg:phone"
                width="32"
                height="32"
                className="right-2 ml-1 text-grayLetter"
              />
            </div>
            <div className="my-8">
              <div className="flex justify-between text-xl px-3 my-1">
                <span className="text-grayLetter">価格</span>
                <span>50000円</span>
              </div>
              <div className="flex justify-between text-xl px-3 my-1">
                <span className="text-grayLetter">お支払い</span>
                <span>30000円</span>
              </div>
              <hr className="bg-grayLetter my-4 h-0.5" />
              <div className="flex justify-between text-xl px-3 my-1">
                <span className="text-grayLetter">寄付額</span>
                <span>20000円</span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-nabBg text-white rounded-md py-3 text-2xl font-bold my-3 block tablet:hidden mt-6">
            お支払い 30000円
          </button>
          <p className="text-grayLetter text-opacity-70 underline decoration-dotted flex tablet:hidden items-center gap-2 justify-center">
            <Icon icon="fa6-solid:lock" width="16" height="16" />
            <span className="underline decoration-dotted">Payment secured</span>
          </p>
      </div>
    </main>
  );
};

export default Page;
