"use client";
import React from "react";
import { Icon } from "@iconify/react";

const PaymentCredit = ({ setPayment }) => {
  return (
    <>
      <div className="text-center mb-14">
        <p className="text-3xl font-semibold">
          お支払い情報を入力してください。
        </p>
      </div>
      <div className="text-center flex gap-5 justify-center">
        <Icon icon="logos:visaelectron" width="57" height="57" />
        <Icon icon="logos:mastercard" width="57" height="57" />
        <Icon icon="twemoji:credit-card" width="57" height="57" />
        <Icon icon="fa-brands:cc-apple-pay" width="57" height="57" />
      </div>
      <div className="w-2/3 laptop:w-1/3 m-auto">
        <form action="">
          <label className="text-xl font-semibold">カード番号</label>
          <input
            type="text"
            name="card-number"
            id="card-number"
            className="w-full border-b-2 border-b-black p-3 border-opacity-70 text-xl rounded outline-none mb-8"
          />
          <label
            className="text-xl font-semibold inline-block"
            htmlFor="paymentway"
          >
            お支払い方法
          </label>
          <select
            className="text-xl font-semibold border border-black p-3 rounded-lg w-1/2 mt-6 outline-none border-opacity-70 block"
            id="paymentway"
            name="paymentway"
          >
            <option className="text-xl font-semibold" value="option1">
              オプション1
            </option>
            <option className="text-xl font-semibold" value="option2">
              オプション2
            </option>
            <option className="text-xl font-semibold" value="option3">
              オプション3
            </option>
          </select>
          <button className="w-full text-center text-xl font-bold text-white bg-hoverButton p-4 rounded-lg mt-10">
            お支払い
          </button>
        </form>
        <button
          onClick={() => {
            setPayment(false);
          }}
          className=""
        >
          <p className="border-b w-fit flex gap-2 items-center p-1 mt-4">
            <Icon icon="fe:arrow-left" width="1.2rem" height="1.2rem" />
            戻る
          </p>
        </button>
        <div className="text-center relative bottom-5 mt-10">
          <p>text dummy text dummy text dummy text dummy text dummy text</p>
        </div>
      </div>
    </>
  );
};

export default PaymentCredit;
