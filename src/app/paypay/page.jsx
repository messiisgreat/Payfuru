"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Link from "next/link";

const Page = () => {
  const [logoIconSize, setLogoIconSize] = useState("75")
  const [paypayPass, setPaypayPass] = useState("");

  useEffect(() => {
    window.innerWidth > 768 ? setLogoIconSize("75") : setLogoIconSize("50")
  })

  return (
    <main className="mx-6 laptop:mx-28">
      <nav className="block tablet:flex justify-between py-3 items-center">
        <div className="flex items-center gap-6 mb-4 tablet:mb-0">
          <Icon
            icon="logos:singlestore-icon"
            width={logoIconSize}
            height={logoIconSize}
          />
          <span className="text-4xl">ふるさと納税</span>
        </div>
        <span className="text-2xl">お支払いを完了してください。</span>
      </nav>
      <div className="shadow-md p-4 block tablet:flex gap-4">
        <div className="w-full tablet:w-3/5">
          <div className="shadow-md rounded-xl pt-4">
            <p className="p-4 m-6 bg-grayBorder shadow-md text-2xl pl-10 rounded-lg mt-14">
              支払確認
            </p>
            <p className="flex items-start font-semibold pl-10 text-2xl">
              <span className="pt-5">お支払い額</span>
              <span className="flex items-baseline text-9xl">
                10000
                <span className="text-5xl">円</span>
              </span>
            </p>
            <p className="text-2xl font-semibold pl-10 mt-14">オーダー ID</p>
            <p className="text-2xl font-semibold pl-10 mb-14">
              026047046097735935
            </p>
          </div>
          <p className=" my-14 text-center text-3xl font-semibold">
            Paypayアプリで
            <br />
            QRコードをスキャンして支払う
          </p>
          <QRCodeCanvas
            value="Here is Ichipa QR Code"
            size={230}
            fgColor="#1D0101"
            imageSettings={{
              src: "/img/qrimage.jpg",
              excavate: true,
              width: 100,
              height: 100,
            }}
            className="m-auto"
          />
          <p className="flex gap-2">
            Powered by
            <Icon icon="tabler:brand-paypay" width="24" height="24" />
            paypay
          </p>
        </div>
        <div className="w-full tablet:w-2/5 border-8 border-[#438adb] rounded p-4 laptop:p-8 mt-8 tablet:mt-0">
          <p className="flex items-center">
            <Icon icon="tabler:brand-paypay" width="48" height="48" />
            <span className="text-3xl">Paypay</span>
          </p>
          <p className="text-3xl my-8 laptop:my-16 laptop:flex text-center laptop:text-left text-nowrap justify-between font-medium">
            <span className="block laptop:flex my-5 laptop:my-0">新規登録</span>
            <Link href="" className="text-bluetext border-b-2">
              ログイン
            </Link>
          </p>
          <p className="text-grayLetter text-xl laptop:text-2xl my-8 laptop:my-16 border-b-grayLetter">
            ダミーテキストダミーテキストダミーテキストダミーテキスト
          </p>
          <div className="flex">
            <input
              type="password"
              name="paypaypassword"
              id="paypaypassword"
              value={paypayPass}
              onChange={(e) => {
                setPaypayPass(e.target.value);
              }}
              placeholder="パスワード"
              className="text-xl laptop:text-2xl border-b-grayLetter my-3 p-3 outline-none w-full"
            />
          </div>
          <label
            htmlFor="paypaypassword "
            className="text-xl laptop:text-2xl text-center text-bluetext"
          >
            パスワードは正しいですか？
          </label>
          <p className="mt-6">
            <Link href="" className="text-bluetext font-semibold">
              プライバシーポリシー
            </Link>
            に同意しながら進めます。
          </p>
          <button className="bg-grayLetter text-black opacity-75 w-full p-5 rounded-lg text-center text-xl laptop:text-2xl my-8">
            お支払い
          </button>
          <p className="text-center pb-4">
            ダミーテキストダミーテキストダミーテキストダミーテキスト
          </p>
          <p className="text-lg font-bold text-center">
            ダミーテキストダミーテキスト
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
