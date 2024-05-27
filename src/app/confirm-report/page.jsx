"use client";
import React, { useEffect, useState } from "react";
import TermsModal from "../components/TermsModal";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [selected, setSelected] = useState(false);
  const [checkNumber, setCheckNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const personInfo = JSON.parse(sessionStorage.getItem("personalinfo"));
  const addressInfo = JSON.parse(sessionStorage.getItem("address"));
  useEffect(() => {
    !checkNumber == "" ? setSelected(true) : null;
  }, [checkNumber]);
  {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
  return (
    <main className="bg-cover">
      {showModal ? (
        <TermsModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <Sidebar />
      <div className="border-b-2 border-b-nabBg pt-12">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-3xl tablet:text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          確定申告
        </p>
      </div>
      <div className="block desktop:flex border-b-4 border-b-black mb-12 pb-6 w-4/5 m-auto gap-8">
        <div className="w-full desktop:w-1/2">
          <div className="text-xl laptop:text-2xl my-12 font-semibold block tablet:flex justify-between items-center">
            <span>返礼品 • 合計寄付金額</span>
            <span className="text-nabBg px-2">10000円</span>
            <Link
              href="/donation-amount"
              className="border bg-white text-nabBg rounded-full p-1 px-3 tablet:p-3 tablet:px-6 items-center inline-flex mt-4 tablet:mt-0"
            >
              <span className="text-nowrap">変更する</span>
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </Link>
          </div>
          <div className="text-lg laptop:text-xl my-2">
            <span className="font-light"> • </span>
            <span>ダミーテキストダミーテキストダミーテキスト</span>
            <span className="text-nabBg font-semibold ml-4">
              {sessionStorage.getItem("sumDonation") || ""}円
            </span>
          </div>
        </div>
        <div className="w-full desktop:w-1/2">
          <div className="text-xl laptop:text-2xl my-12 font-semibold block tablet:flex justify-between items-center">
            <span>寄附金の使い道</span>
            <Link
              href="/donation-usecase"
              className="border bg-white text-nabBg rounded-full p-1 px-3 tablet:p-3 tablet:px-6 items-center w-fit flex tablet:inline-flex mt-4 tablet:mt-0"
            >
              <span className="text-nowrap">変更する</span>
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </Link>
          </div>
          <div className="text-lg laptop:text-xl my-2">
            <span>ダミーテキストダミーテキストダミーテキスト</span>
          </div>
        </div>
      </div>
      <div className="justify-between flex w-4/5 m-auto">
        <div className="w-full desktop:w-1/2 pr-4">
          <div className="text-xl laptop:text-2xl font-semibold flex justify-between items-center">
            <span>
              個人情報 <span className="hidden tablet:inline-flex">• </span>
              <br className="inline-flex tablet:hidden" />
              住所情報
            </span>
            <Link
              href="/personal-info"
              className="border bg-white text-nabBg rounded-full p-1 px-3 tablet:p-3 tablet:px-6 items-center  inline-flex ml-6"
            >
              <span className="text-nowrap">変更する</span>
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </Link>
          </div>
          <div className="text-lg laptop:text-xl my-6">
            <p className="my-6">
              <span>お名前 : </span>
              <span>
              {personInfo?.firstName || ''} ${personInfo?.lastName || ''}(
                <span>
                  {personInfo?.firstNameKana || ''} ${personInfo?.lastNameKana || ''}
                </span>
                )
              </span>
            </p>
            <p className="my-6">
              <span>住所 : </span>
              <span>{addressInfo?.prefecture || ""}</span>
              <span>{addressInfo?.municipalitie || ""}</span>
            </p>
            <p className="my-6">
              <span>電話 : </span>
              <span>{personInfo?.firstPhone || ""}</span>-
              <span>{personInfo?.secondPhone || ""}</span>-
              <span>{personInfo?.thirdPhone || ""}</span>
            </p>
            <p className="my-6">
              <span>ダミーテキスト : </span>
              <span>希望しない</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center gap-6 tablet:gap-16 flex justify-center w-full py-10 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/donation-usecase"
            className="p-4 tablet:p-6 items-center laptop:p-12 py-1 tablet:py-2 laptop:py-4 border bg-nabBg text-white text-nowrap text-xl tablet:text-2xl laptop:text-4xl rounded-full font-semibold flex"
          >
            <Icon
              icon="formkit:arrowleft"
              width="48"
              height="48"
              className="mr-4 tablet:mr-8"
            />
            停止する
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="p-4 tablet:p-6 items-center laptop:p-12 py-1 tablet:py-2 laptop:py-4 border bg-white text-nabBg text-nowrap text-xl tablet:text-2xl laptop:text-4xl rounded-full font-semibold flex"
          >
            次に
            <Icon
              icon="formkit:arrowright"
              width="48"
              height="48"
              className="ml-4 tablet:ml-8"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
