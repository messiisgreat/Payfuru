import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-black block">
      <div className="pt-20 pb-20 justify-around flex items-center">
        <div className="bg-red-500 text-white p-2 font-bold w-24 rounded-sm text-sm">
          1パーセント
        </div>
        <ul className="gap-8 hidden tablet:flex">
          <li>
            <a className="p-2 text-white font-bold">トップ</a>
          </li>
          <li>
            <a className="p-2 text-white font-bold">利用規約</a>
          </li>
          <li>
            <a className="p-2 text-white font-bold">プライバシーポリシー</a>
          </li>
          <li>
            <a className="p-2 text-white font-bold">お問い合わせ</a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="block w-8 tablet:hidden text-white" />
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
