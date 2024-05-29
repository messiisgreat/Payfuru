import React from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";


const Page = () => {
    return (
        <main className="bg-[url('../../public/img/welcome.jpg')] min-h-screen bg-cover">
            <Sidebar/>
            <div className="bg-white translate-y-80 w-fit mx-14 phone:m-auto rounded-lg text-center py-8 phone:py-6 p-4 phone:p-6">
            <p className="text-2xl tablet:text-4xl text-center p-4 phone:p-8 tablet:p-20 font-semibold text-grayLetter mb-10 phone:mb-0">寄付いただきありがとうございます。</p>
            <Link className="text-xl tablet:text-2xl py-3 p-3 rounded-full text-white m-auto bg-nabBg font-semibold hover:opacity-80" href="/personal-info">個人情報入力ページへ</Link>
            </div>
        </main>
    )
}

export default Page;