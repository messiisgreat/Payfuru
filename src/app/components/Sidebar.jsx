"use client";

import React, { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Sidebar = ({onSidebar,setOnSidebar}) => {
    return (
        <aside className={`fixed top-0 transform transition-all p-8 duration-300 bg-black min-h-screen block w-[380px] ${onSidebar ?  'right-0' : 'right-[-380px]'}`}>
            <FontAwesomeIcon
            onClick={() => {setOnSidebar(false)}}
            icon={faMultiply}
            className="w-6 text-white p-2"
          />
            <Link className="text-white p-2 border-b border-transferBorder hover:text-hoverButton block font-bold" href="/simulate">寄附額シミュレーター</Link>
            <Link className="text-white p-2 border-b border-transferBorder hover:text-hoverButton block font-bold" href="/">導入をご検討中の方はこちら</Link>
        </aside>
    )
}

export default Sidebar;
