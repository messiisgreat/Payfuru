import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UpdateSlider from "./components/UpdateSlider";
import Link from "next/link";
import TextSlider from "./components/TextSlider";

export default function Home() {
  return (
    <main className="bg-[url('../../public/background-1.jpg')]">
      <Navbar/>
      <img className="h-[100vh] w-[100%] object-cover object-center" src="./hero-image_v7-scaled.jpg"></img>
      <div className="py-40 justify-center w-full flex">
        <p className="w-[650px] text-white font-bold text-center text-3xl leading-loose">1パーセントは<br></br>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
      </div>
      <div className="w-full p-4">
        <h1 className=" text-white font-bold text-center text-3xl leading-loose">｢1パーセント｣の使い方</h1>
      </div>
        <section className="">
          <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
            <img src="./frontpage_text_02.png" className="m-auto"/>
            <img src="./frontpage_img_01.png" className="m-auto mt-3"/>
            <p className="text-[#E84220] font-bold max-w-[50%] my-6 m-auto">ふるさと納税はネットだけだと思っていませんか？<br></br>1パーセントなら、いつものお買い物のようにふるさと納税をご利用できます。<br></br>リアルで特別な体験を、その場でお楽しみいただけます！</p>
          </div>
        </section>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <section className="">
          <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
            <img src="./frontpage_img_03.png" className="m-auto mt-3"/>
            <img src="./frontpage_text_04.png" className="m-auto"/>
            <p className="text-[#E84220] font-bold max-w-[50%] m-auto my-6">ふるさと納税に必要な情報登録はお支払い後でOK！もちろん、ワンストップ特例申請も可能です。登録を完了したら、寄附証明書が後日ご自宅に届きます。</p>
          </div>
        </section>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <img src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png" className="m-auto my-8"/>
        <section>
        <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
          <img src="./frontpage_img_02.png" className="m-auto mt-3"/>
          <img src="./frontpage_text_03.png" className="m-auto"/>
          <p className="text-[#E84220] font-bold max-w-[50%] m-auto my-6">事前のチャージやアプリのダウンロードは必要ありません！<br></br>1パーセントならいつも通りレジに商品を持っていき、お会計するだけ。お支払いの際に 「1パーセントで」とお伝えください。</p>
          </div>
        </section>
        <section className=" max-w-[1280px] m-auto my-12 ">
          <p className="content-center text-white text-left text-[30px] font-bold mb-3">お知らせ</p>
          <div className="border-2 border-black max-w-[1280px] m-auto flex pb-8 bg-white">
          <UpdateSlider/>
          </div>
        </section>
        <section className=" max-w-[1280px] m-auto my-12">
        <p className="content-center text-white text-left text-[30px] font-bold mb-3">イベント</p>
        <div className="border-2 border-black max-w-[1280px] m-auto flex">
          <p className="bg-[#FF6333] content-center text-white w-[10%] text-center">イベント情報</p>
          <TextSlider/>
        </div>
        </section>
        <section>
        <div className=" max-w-[1280px] m-auto p-4 my-6">
        <p className=" text-white font-semibold text-center text-xl">店頭価格から寄附額の計算ができます！</p>
        </div>
          <div className="bg-white border-2 border-black flex p-2 max-w-[1280px] m-auto items-center justify-center mb-10">
          <img src="./frontpage_img_calc-150x150.png" className="w-fit mt-3"/>
          <Link className="text-[#E84220] font-bold  my-6 text-3xl ml-5" href="/simulate" > 寄附額シミュレーターはこちら</Link>
          </div>
        </section>
        <section>
        <div className="max-w-[1280px] m-auto p-4 my-6">
        <p className=" text-white font-semibold text-center text-[30px]">1パーセント公式Instagram</p>
        </div>
        <div className="bg-white border-2 border-black block p-12 max-w-[1280px] m-auto items-center justify-center mb-10">
          <div className="mb-8"><a href="" className="text-viewContinue font-bold opacity-80">@payful.official</a></div>
          <div className="grid grid-cols-4 gap-4">
            <a href="" className="overflow-hidden"><img src="https://payful.jp/wp-content/uploads/2024/03/441174274_403965352401647_6737394256193624005_n-320x320.jpg" className="hover:scale-105 transition-all duration-300 hover:brightness-50"/></a>
            <a href="" className="overflow-hidden"><img src="https://payful.jp/wp-content/uploads/2024/03/441174274_403965352401647_6737394256193624005_n-320x320.jpg" className="hover:scale-105 transition-all duration-300 hover:brightness-50"/></a>
            <a href="" className="overflow-hidden"><img src="https://payful.jp/wp-content/uploads/2024/03/441174274_403965352401647_6737394256193624005_n-320x320.jpg" className="hover:scale-105 transition-all duration-300 hover:brightness-50"/></a>
            <a href="" className="overflow-hidden"><img src="https://payful.jp/wp-content/uploads/2024/03/441174274_403965352401647_6737394256193624005_n-320x320.jpg" className="hover:scale-105 transition-all duration-300 hover:brightness-50"/></a>
          </div>
          <a href="" className="bg-[#ff6333] text-white p-2 py-1 mt-8 m-auto block w-fit rounded"><FontAwesomeIcon
            icon={faInstagram}
            className="w-6 text-white"
          /> Instagramで見る</a>
        </div>
        </section>
        <Footer/>
    </main>
  );
}
