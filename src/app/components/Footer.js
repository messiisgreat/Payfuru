import React from "react";

const Footer = () => {
  return (
    <div className="bg-black block">
      <div className="pt-20 pb-20 justify-around block tablet:flex items-center ">
        <div className="bg-red-500 text-white p-2 font-bold w-fit rounded-sm text-base m-auto tablet:m-0">
          1パーセント
        </div>
        <ul className="gap-8 block tablet:flex text-center">
          <li className="my-1">
            <a className="p-2 text-white font-bold">トップ</a>
          </li>
          <li className="my-1">
            <a className="p-2 text-white font-bold">利用規約</a>
          </li>
          <li className="my-1">
            <a className="p-2 text-white font-bold">プライバシーポリシー</a>
          </li>
          <li className="my-1">
            <a className="p-2 text-white font-bold">お問い合わせ</a>
          </li>
        </ul>
      </div>
      <div className="pb-10">
        <p className="text-center text-white">
          © 2022 – 2024 Payful Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
