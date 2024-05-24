'use client';
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const PaymentSelect = ({setPayment}) => {
    return (
            <>
            <div className="text-center mb-14"><p className="text-3xl font-bold">お支払い方法をお選びください。</p></div>
            <div className="w-1/3 m-auto">
                <button onClick={() => {setPayment(true)}} className="border border-black border-opacity-20 rounded-xl justify-between flex pl-2 pr-1 py-2 items-center my-5 w-1/2 font-semibold"><span>クレジットカード</span><Icon icon="fe:arrow-right" width="1.2rem" height="1.2rem" /></button>
                <Link href="/paypay"  className="border border-black border-opacity-20 rounded-xl justify-between flex pl-2 pr-1 py-2 items-center my-5 w-1/2 font-semibold"><span>Paypay</span><Icon icon="fe:arrow-right" width="1.2rem" height="1.2rem" /></Link>
            <div className="text-center w-1/3 left-1/3 absolute bottom-5"><p>text dummy text dummy text dummy text dummy text dummy text</p></div>
            </div>
            </>
    )
}

export default PaymentSelect;