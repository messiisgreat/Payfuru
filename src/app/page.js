"use client";
import Footer from "./components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newsGroup, updateGroup, instagramList } from "./lib/constants";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { Icon } from "@iconify/react";

export default function Home() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesWidth, setSlidesWidth] = useState("bg-white w-full");

  useEffect(() => {
    const handleResizeSlidesToShow = () => {
      setSlidesToShow(window.innerWidth > 768 ? 2 : 1);
    };

    if (typeof window !== 'undefined') {
      setSlidesToShow(window.innerWidth > 768 ? 2 : 1);
      window.addEventListener("resize", handleResizeSlidesToShow);

      return () => {
        window.removeEventListener("resize", handleResizeSlidesToShow);
      };
    }
  }, []);

  useEffect(() => {
    const handleResizeSlidesWidth = () => {
      setSlidesWidth(window.innerWidth > 1024 ? "bg-white w-[90%]" : "bg-white w-full");
    };

    if (typeof window !== 'undefined') {
      setSlidesWidth(window.innerWidth > 1024 ? "bg-white w-[90%]" : "bg-white w-full");
      window.addEventListener("resize", handleResizeSlidesWidth);

      return () => {
        window.removeEventListener("resize", handleResizeSlidesWidth);
      };
    }
  }, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    className: "bg-white w-full block",
    autoplay: false,
  };

  var textSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: slidesWidth,
    autoplay: false,
  };

  const newUpdates = updateGroup.map((update) => (
    <div className="p-8 block phone:!flex gap-5">
      <a href="" className="overflow-hidden">
        <img
          src={
            update.imgUrl
              ? `./slides/${update.imgUrl}`
              : `./slides/placeholder.png`
          }
          alt={update.content}
          className="block h-[260px] w-[260px] hover:scale-125 transition-all duration-500 m-auto phone:m-0"
        />
      </a>
      <div className="block max-w-[85%] phone:max-w-[50%] m-auto mt-5 phone:m-0 ">
        <p className="bg-updataTagBg text-white p-2 py-1 rounded-sm w-fit mb-5">
          {update.tag}
        </p>
        <a className="text-xl font-bold" href="">
          {update.content}
        </a>
        <p className="font-thin my-5">{update.date}</p>
        <p className="my-5 font-normal">{update.title}</p>
        <a className="text-viewContinue font-bold" href="">
          続きを見る
        </a>
      </div>
    </div>
  ));

  const newItems = newsGroup.map((news) => (
    <div className="p-4 pl-4">
      <span>{news.content}</span>
      <span className="font-thin text-sm ml-3">{news.date}</span>
    </div>
  ));
  return (
    <main className="bg-[url('../../public/background-1.jpg')]">
      <Sidebar />
      <img
        className="h-[100vh] w-[100%] object-cover object-center"
        src="./hero-image_v7-scaled.jpg"
      ></img>
      <div className="py-40 justify-center w-full flex px-4 tablet:px-0">
        <p className="w-[650px] text-white font-bold text-center text-3xl leading-loose">
          1パーセントは<br></br>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
      </div>
      <div className="items-center flex py-4 pb-12  ">
        <Link
          href="/donate"
          className="m-auto text-3xl font-bold text-white rounded-md border-4 border-grayBorder w-fit p-4"
        >
          今寄付する
        </Link>
      </div>
      <div className="w-full p-4">
        <h1 className=" text-white font-bold text-center text-3xl leading-loose">
          ｢1パーセント｣の使い方
        </h1>
      </div>
      <section className="">
        <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
          <img src="./frontpage_text_02.png" className="m-auto" />
          <img src="./frontpage_img_01.png" className="m-auto mt-3" />
          <p className="text-[#E84220] font-bold max-w-[80%] tablet:max-w-[50%] my-6 m-auto">
            ふるさと納税はネットだけだと思っていませんか？<br></br>
            1パーセントなら、いつものお買い物のようにふるさと納税をご利用できます。
            <br></br>リアルで特別な体験を、その場でお楽しみいただけます！
          </p>
        </div>
      </section>
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <section className="">
        <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
          <img src="./frontpage_img_03.png" className="m-auto mt-3" />
          <img src="./frontpage_text_04.png" className="m-auto" />
          <p className="text-[#E84220] font-bold max-w-[80%] tablet:max-w-[50%] m-auto my-6">
            ふるさと納税に必要な情報登録はお支払い後でOK！もちろん、ワンストップ特例申請も可能です。登録を完了したら、寄附証明書が後日ご自宅に届きます。
          </p>
        </div>
      </section>
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <img
        src="./frontpage_allow_img-pylp8jctvir5ytt4tw4hwiw9p0zcu1pgd8f8i25tc8.png"
        className="m-auto my-8"
      />
      <section>
        <div className="bg-white border-2 border-black block p-2 max-w-[1280px] m-auto">
          <img src="./frontpage_img_02.png" className="m-auto mt-3" />
          <img src="./frontpage_text_03.png" className="m-auto" />
          <p className="text-[#E84220] font-bold max-w-[80%] tablet:max-w-[50%] m-auto my-6">
            事前のチャージやアプリのダウンロードは必要ありません！<br></br>
            1パーセントならいつも通りレジに商品を持っていき、お会計するだけ。お支払いの際に
            「1パーセントで」とお伝えください。
          </p>
        </div>
      </section>
      <section className=" max-w-[1280px] m-auto my-12 ">
        <p className="content-center text-white text-left text-[30px] font-bold mb-3 px-4 tablet:px-0">
          お知らせ
        </p>
        <div className="border-2 border-black max-w-[1280px] m-auto flex pb-8 bg-white">
          <Slider {...settings}>{newUpdates}</Slider>
        </div>
      </section>
      <section className=" max-w-[1280px] m-auto my-12">
        <p className="content-center text-white text-left text-[30px] font-bold mb-3 px-4 tablet:px-0">
          イベント
        </p>
        <div className="border-2 border-black max-w-[1280px] m-auto flex">
          <p className="bg-[#FF6333] content-center text-white w-[10%] hidden laptop:block text-center">
            イベント情報
          </p>
          <Slider {...textSettings}>{newItems}</Slider>
        </div>
      </section>
      <section>
        <div className=" max-w-[1280px] m-auto p-4 my-6">
          <p className=" text-white font-semibold text-center text-xl">
            店頭価格から寄附額の計算ができます！
          </p>
        </div>
        <div className="bg-white border-2 border-black flex p-2 max-w-[1280px] m-auto items-center justify-center mb-10">
          <img src="./frontpage_img_calc-150x150.png" className="w-fit mt-3" />
          <Link
            className="text-[#E84220] font-bold  my-6 text-3xl ml-5"
            href="/simulate"
          >
            {" "}
            寄附額シミュレーターはこちら
          </Link>
        </div>
      </section>
      <section>
        <div className="max-w-[1280px] m-auto p-4 my-6">
          <p className=" text-white font-semibold text-center text-[30px]">
            1パーセント公式Instagram
          </p>
        </div>
        <div className="bg-white border-2 border-black block p-4 tablet:p-12 max-w-[1280px] m-auto items-center justify-center mb-10">
          <div className="mb-8">
            <a href="" className="text-viewContinue font-bold opacity-80">
              @payful.official
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 tablet:grid-cols-4 tablet:gap-4">
            {instagramList.map((i) => {
              return (
                <a href="" className="overflow-hidden m-3">
                  <img
                    src={i.link}
                    className="hover:scale-105 transition-all duration-300 hover:brightness-50"
                  />
                </a>
              );
            })}
          </div>
          <a
            href=""
            className="bg-[#ff6333] text-white p-3 py-1 mt-8 m-auto block w-fit rounded"
          >
            <Icon
              icon="skill-icons:instagram"
              width="24"
              height="24"
              className="inline-flex"
            />{" "}
            Instagramで見る
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
