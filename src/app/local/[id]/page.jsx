"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { localList } from "../../lib/constants";
import SimulateUnit from "../../components/SimulateUnit";
import Link from "next/link";

const Page = ({ params }) => {
  const [localName, setLocalName] = useState("");
  const [allCount, setAllCount] = useState(0);
  const [allPrice, setAllPrice] = useState(0);
  const [donation, setDonation] = useState(0);
  const [simulateArray, setSimulateArray] = useState([
    {
      id: 0,
      price: 0,
      count: 1,
    },
  ]);
  const handleUnitPlus = () => {
    setSimulateArray([
      ...simulateArray,
      {
        id: simulateArray[simulateArray.length - 1].id + 1,
        price: 0,
        count: 1,
      },
    ]);
  };
    const donateCal = () => {
      const { count, price, donation } = simulateArray.reduce(
        ({ count, price }, { price: unitPrice, count: unitCount }) => ({
          count: count + unitCount,
          price: price + unitPrice * unitCount,
        }),
        { count: 0, price: 0 }
      );
  
      setAllCount(count);
      setAllPrice(price);
      setDonation(price * 4);
    };

  useEffect(() => {
    const local = localList
      .flatMap((prefecture) => prefecture.locals)
      .find((local) => local.id === params.id);
    if (local) {
      setLocalName(local.name);
    }
  }, [params.id]);

  return (
    <div>
      <main className="bg-[url('../../public/img/background-1.jpg')] min-h-screen">
        <h1 className="text-5xl text-center py-24 text-white">
          寄附額シミュレーター
        </h1>
        <section className=" max-w-[1280px] py-20 m-auto">
          <div className="bg-white border-4 rounded border-black focus:border-blue-400 block p-2">
            <div className="bg-white flex p-20 pb-28">
              <div className="m-auto">
                <p className="max-w-[50%] m-auto mt-6 mb-2 text-center text-xl">
                  計算対象自治体
                </p>
                <p className="max-w-[50%] m-auto mb-12 text-center text-3xl font-bold text-grayLetter">
                  {localName}
                </p>
                <p className="m-auto my-6 text-center text-base">
                  商品またはサービスの税込価格を入力してください
                </p>
                <div className="m-auto justify-center items-center block">
                  {simulateArray.map((item, key) => {
                    return (
                      <div key={item.id}>
                        <SimulateUnit
                          unitKey={item.id}
                          item={item}
                          setSimulateArray={setSimulateArray}
                          simulateArray={simulateArray}
                          donateCal={donateCal}
                        />
                      </div>
                    );
                  })}
                  <div className="flex">
                    <Icon
                      icon="simple-line-icons:plus"
                      width="32"
                      height="32"
                      className="m-auto"
                      onClick={handleUnitPlus}
                    />
                  </div>
                  <div className="m-auto justify-center flex items-baseline mt-4">
                    商品金額合計:
                    <span className="text-2xl p-2 pt-0">{allPrice || 0}</span>円
                    <span>({allCount}個)</span>
                  </div>
                </div>
              </div>
              {allPrice !== 0 && !isNaN(allPrice) && (
                <>
                  <div className="self-center block px-5">
                    <Icon icon="formkit:arrowright" width="72" height="48" />
                  </div>
                  <div className="m-auto w-[400px]">
                    <div className="w-full text-center border-8 border-grayBorder border-solid rounded pt-10 pb-10 mb-5">
                      <p className="text-xl mb-6">寄附額</p>
                      <span className="text-5xl ml-5 font-bold"></span>
                      <span className="m-3 mb-10">
                        <span
                          className={`text-5xl px-2 font-bold ${
                            donation > 1000
                              ? "text-grayLetter"
                              : "text-red line-through"
                          }`}
                        >
                          {Math.ceil(donation / 100) * 100}
                        </span>
                        円
                      </span>
                      {donation > 1000 ? null : (
                        <p className="text-red mt-10 -mb-10 text-sm">
                          最低寄附額に達していないため、お申し込みいただけません
                        </p>
                      )}
                    </div>
                    <div className="px-2 text-xs text-center text-grayLetter">
                      最低寄附額： 1,000円、切り上げ単位：100単位、返礼率：25％
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <p className="text-sm">
                ※シミュレーターのご利用から実際にお申込み頂くまでに時間が経過していた場合、実際の寄附額が上記と異なる場合があります。（例：計算した翌日以降にお申込みいただいた場合など）
              </p>
            </div>
          </div>
          <Link
            className="float-right rounded-full bg-backButtonBg text-white p-2 px-4 mt-2 hover:underline cursor-pointer hover:text-hoverButton"
            href="/simulate"
          >
            自治体選択画面に戻る
          </Link>
        </section>
        <section className=" max-w-[1280px] py-20 m-auto">
          <p className="text-white text-center">
            © 2022 BIGGATE, Inc. All Rights Reserved.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
