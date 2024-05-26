import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const TermsModal = ({ showModal, setShowModal }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className="w-screen h-full overflow-hidden bg-black opacity-60 z-10 fixed"
      ></div>
      <div className="phone:h-1/2 w-4/5 phone:w-3/5 bg-white opacity-100 z-20 left-[10%] phone:left-[20%] fixed top-[25%] rounded-3xl py-8 px-[4%]">
        <p className="text-2xl desktop:text-3xl text-center font-bold">
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
        <p className="my-8 phone:my-12 items-center flex">
          <input
            type="checkbox"
            name="termsofuse"
            id="termsofuse"
            className="w-12 h-12 rounded-xl cursor-pointer"
            onChange={(e) => {
              setConfirmed(e.target.checked);
            }}
          />
          <label
            htmlFor="termsofuse"
            className="text-xl tablet:text-2xl desktop:text-3xl ml-6 cursor-pointer"
          >
            <Link
              className="text-bluetext underline font-bold hover:text-bluestrongtext"
              href="/privacy-policy"
            >
              利用規約、プライバシーポリシー
            </Link>
            に同意します。
          </label>
        </p>
        <div className="block phone:flex justify-around">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="justify-center phone:justify-normal w-full phone:w-fit my-3 phone:my-0 p-4 py-1 laptop:p-8 laptop:py-2 border bg-white text-nabBg text-2xl desktop:text-3xl rounded-full font-bold flex items-center"
          >
            <Icon
              icon="formkit:arrowleft"
              width="48"
              height="48"
              className="ml-8 hidden tablet:block"
            />
            戻る
          </button>
          {confirmed ? (
            <Link
              href="/payment-method"
              className="justify-center phone:justify-normal w-full phone:w-fit my-3 phone:my-0 p-4 py-1 laptop:p-8 laptop:py-2 border bg-nabBg text-white text-2xl desktop:text-3xl rounded-full font-bold flex items-center"
            >
              決済を進める
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8 hidden tablet:block"
              />
            </Link>
          ) : (
            <div className="justify-center phone:justify-normal w-full phone:w-fit my-3 phone:my-0 p-4 py-1 laptop:p-8 laptop:py-2  border bg-nabBg text-white opacity-65 text-2xl desktop:text-3xl rounded-full font-bold flex items-center">
              決済を進める
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-8 hidden tablet:block"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TermsModal;
