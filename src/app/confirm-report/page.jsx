"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TermsModal from "../components/TermsModal";
import PayNab from "../components/PayNab";
import Link from "next/link";

const Page = () => {
  const [selected, setSelected] = useState(false);
  const [checkNumber, setCheckNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const personInfo = JSON.parse(sessionStorage.getItem("personalinfo"))
  const addressInfo = JSON.parse(sessionStorage.getItem("address"))
  useEffect(() => {
    !checkNumber == ""? setSelected(true): null
  }, [checkNumber])
  return (
    <main className="pt-8 h-screen bg-cover">
      <div className={`${showModal?"block":"hidden"}`}><TermsModal showModal={showModal} setShowModal={setShowModal}/></div>
      <PayNab/>
      <div className="my-8 border-t-2 border-t-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md -translate-y-[50%] m-auto text-center w-fit">
        確定申告
        </p>
      </div>
      <div className="justify-between flex border-b-4 border-b-black mb-12 pb-6 w-4/5 m-auto">
       <div>
        <div className="text-3xl my-8 font-bold">
          <span>返礼品 • 合計寄付金額</span>
          <span className="text-nabBg px-6">10000円</span>
          <Link href="/donation-amount" className="border bg-white text-nabBg rounded-full p-4 px-8 items-center">
            <span className="">変更する</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </Link>
        </div>
        <div className="text-2xl my-6">
        <span className="font-light"> • </span><span>ダミーテキストダミーテキストダミーテキスト</span><span className="ml-10">1点</span><span className="text-nabBg font-bold ml-4">10000円</span>
        </div>
        <div className="text-2xl my-6">
          <span>({sessionStorage.getItem("sumDonation")}<span>⨯</span>個)</span>
        </div>
       </div>
       <div>
       <div className="text-3xl my-8 font-bold">
          <span>寄附金の使い道</span>
          <Link href="/donation-usecase" className="border bg-white text-nabBg rounded-full p-4 px-8 items-center ml-6">
            <span className="">変更する</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </Link>
        </div>
        <div className="text-2xl my-6">
        <span>ダミーテキストダミーテキストダミーテキスト</span>
        </div>
       </div>
      </div>
       <div className="justify-between flex pb-6 w-4/5 m-auto">
       <div>
       <div className="text-3xl my-8 font-bold">
          <span>個人情報 • 住所情報</span>
          <Link href="/personal-info" className="border bg-white text-nabBg rounded-full p-4 px-8 items-center ml-6">
            <span className="">変更する</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </Link>
        </div>
        <div className="text-2xl my-6">
        <p className="my-6"><span>お名前 : </span><span>{personInfo.firstName + personInfo.lastName}(<span>{personInfo.firstNameKana + personInfo.lastNameKana}</span>)</span></p>
        <p className="my-6"><span>住所 : </span><span>{addressInfo.prefecture}</span><span>{addressInfo.municipalitie}</span></p>
        <p className="my-6"><span>電話 : </span><span>{personInfo.firstPhone}</span>-<span>{personInfo.secondPhone}</span>-<span>{personInfo.thirdPhone}</span></p>
        <p className="my-6"><span>ダミーテキスト : </span><span>希望しない</span></p>
        </div>
       </div>
       </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
      <div>
          <Link
            href="/donation-usecase"
            className="p-12 py-4 border bg-nabBg text-white text-4xl rounded-full font-bold flex"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-10 mr-4" />
            停止する
          </Link>
        </div>
        <div>
            <button
            onClick={() => {setShowModal(true)}}
            className="p-12 py-4 border bg-white text-nabBg text-4xl rounded-full font-bold flex"
          >
            次に
            <FontAwesomeIcon icon={faArrowRight} className="h-10 ml-4" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
