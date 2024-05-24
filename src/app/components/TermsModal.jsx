import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TermsModal = ({ showModal, setShowModal }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-black opacity-60 z-10 absolute -translate-y-8"></div>
      <div className="h-1/2 w-3/5 bg-white opacity-100 z-20 left-[20%] absolute top-[25%] rounded-3xl py-16 px-52">
        <p className="text-3xl text-center font-bold">
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
        <p className="my-28 items-center flex">
          <input
            type="checkbox"
            name="termsofuse"
            id="termsofuse"
            className="w-12 h-12 rounded-xl cursor-pointer"
            onChange={(e) => {
              setConfirmed(e.target.checked);
            }}
          />
          <label htmlFor="termsofuse" className="text-4xl ml-6 cursor-pointer">
            <Link
              className="text-bluetext underline font-bold hover:text-bluestrongtext"
              href="/privacy-policy"
            >
              利用規約、プライバシーポリシー
            </Link>
            に同意します。
          </label>
        </p>
        <div className="flex justify-around">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="p-12 py-4 border bg-white text-nabBg text-4xl rounded-full font-bold flex"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-10 mr-4" />
            戻る
          </button>
          {confirmed ? (
            <Link
              href="/payment-method"
              className="p-12 py-4 border bg-nabBg text-white text-4xl rounded-full font-bold flex"
            >
              <FontAwesomeIcon icon={faArrowRight} className="h-10 mr-4" />
              決済を進める
            </Link>
          ) : (
            <div className="p-12 py-4 border bg-nabBg text-white opacity-65 text-4xl rounded-full font-bold flex">
              <FontAwesomeIcon icon={faArrowRight} className="h-10 mr-4" />
              決済を進める
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TermsModal;
