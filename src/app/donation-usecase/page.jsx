"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../components/RadioButton";
import PayNab from "../components/PayNab";
import Link from "next/link";

const Page = () => {
  const [selected, setSelected] = useState(false)
  const [checkNumber, setCheckNumber] = useState("")
  const useCaseSubmit = () => {
    sessionStorage.setItem("checkNumber", checkNumber)
  }

  useEffect(() => {
    !checkNumber == ""? setSelected(true): null
  }, [checkNumber])
  return (
    <main className="pt-8 h-screen bg-cover">
      <PayNab />
      <div className="mt-8 border-t-2 border-t-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-5xl p-3 rounded-md -translate-y-[50%] m-auto text-center w-fit">
        寄附金の使い道を選択
        </p>
      </div>
      <div className="justify-center">
        <div className="block gap-10 w-4/5 items-center m-auto left-4 relative">
          <div className="my-3">
            <p className="text-7xl text-left">本年度確定申告をする予定はありますか？</p>
          </div>
          <form action="" className="pl-5">
          <RadioButton id="optoin1" name="donationpurpose" text="未来ある子どもたちのために" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin2" name="donationpurpose" text="誰もが暮らしやすい地域のために" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin3" name="donationpurpose" text="オプション1" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin4" name="donationpurpose" text="オプション2" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin5" name="donationpurpose" text="オプション3" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin6" name="donationpurpose" text="オプション4" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          <RadioButton id="optoin7" name="donationpurpose" text="オプション5" checkedValue={checkNumber} setCheckedValue={setCheckNumber}/>
          </form>
        </div>
      </div>
      <div className="text-center gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
      <div>
          <Link
            href="/final-report"
            className="p-12 py-4 border bg-nabBg text-white text-4xl rounded-full font-bold flex"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-10 mr-4" />
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
            <FontAwesomeIcon icon={faArrowRight} className="h-10 ml-4" />
          </Link>
          ) : (
            <div className="p-12 py-4 border bg-white opacity-50 cursor-default text-nabBg text-4xl rounded-full font-bold flex">
              次に
              <FontAwesomeIcon icon={faArrowRight} className="h-10 ml-4" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
