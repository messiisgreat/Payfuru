"use client";
import { useEffect, useState } from "react";
import { localList } from "../lib/constants";
import Link from "next/link";

const Simulate = () => {
  const localSelector = localList.map((local) => (
    <option className="" id={local.id}>
      {local.name}
    </option>
  ));
  const [selectedValue, setSelectedValue] = useState("");
  const [locals, setLocals] = useState([]);
  const [subLocals, setSublocals] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    const activePrefecture = localList.find((i) => i.name === selectedValue);
    setLocals(activePrefecture?.locals || []);
  }, [selectedValue]);

  useEffect(() => {
    if (locals.length === 0) {
      setSublocals(
        <p className="text-center text-red-700">利用可能な自治体はありません</p>
      );
    } else {
      setSublocals(
        locals.map((sublocal) => (
          <Link
            className="p-4 bg-grayBorder hover:bg-gray-400 m-5 rounded"
            href={`/local/${sublocal.id}`}
          >
            {sublocal.name}
          </Link>
        ))
      );
    }
  }, [locals]);

  return (
    <main className="bg-[url('../../public/background-1.jpg')]">
      <h1 className="text-[42px]  text-center py-16 text-white">
        寄附額シミュレーター
      </h1>
      <section className=" py-20">
        <div className="bg-white border-2 focus:border-blue-400  block p-20 max-w-[1280px] m-auto">
          <p className="max-w-[50%] m-auto my-6 text-center text-[16px]">
            都道府県を選択してから寄附先の自治体をクリックしてください
          </p>
          <select
            className="m-auto block w-full border p-3"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option className=""></option>
            {localSelector}
          </select>
          <div className="m-auto items-center py-20">{subLocals}</div>
        </div>
      </section>
    </main>
  );
};

export default Simulate;
