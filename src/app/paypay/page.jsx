'use client';
import { Icon } from "@iconify/react";
import React from "react";
import QRCode from "qrcode.react";
import { QRCodeCanvas } from "qrcode.react";

const Page = () => {
    return (
            <main className="mx-28">
            <nav className="flex justify-between py-3 items-center">
                <div className="flex items-center gap-6"><Icon icon="logos:singlestore-icon" width="100" height="100" /><span className="text-5xl">ふるさと納税</span></div>
                <span className="text-2xl">お支払いを完了してください。</span>
            </nav>
                <div className="shadow-md p-4 flex">
                    <div className="w-3/5">
                        <div className="shadow-md rounded-xl pt-4">    
                        <p className="p-4 m-6 bg-grayBorder shadow-md text-2xl pl-10 rounded-lg mt-14">支払確認</p>
                        <p className="flex items-start font-semibold pl-10 text-2xl"><span className="pt-5">お支払い額</span><span className="flex items-baseline text-9xl">{sessionStorage.getItem("sumDonation")}<span className="text-5xl">円</span></span></p>
                        <p className="text-2xl font-semibold pl-10 mt-14">オーダー ID</p>
                        <p className="text-2xl font-semibold pl-10 mb-14">026047046097735935</p>
                        </div>
                        <p className=" my-14 text-center text-3xl font-semibold">Paypayアプリで<br/>QRコードをスキャンして支払う</p>
                        <QRCodeCanvas value="Here is Ichipa QR Code" 
                        size={230}
                        fgColor="#1D0101"
                        imageSettings={{
                            src:"/qrimage.jpg", 
                            excavate:true,
                            width: 100,
                            height: 100
                            }}
                        className="m-auto"
                        />
                    </div>
                    <div className="w-2/5 border-8 border-[#438adb] rounded p-10">

                    </div>
                </div>
            </main>
    )
}

export default Page;