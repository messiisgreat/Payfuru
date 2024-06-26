"use client";
import React, { useEffect, useState } from "react";
import AddressInput from "../components/AddressInput";
import StreetImport from "../components/StreetInput";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Sidebar from "../components/Sidebar";

const Page = () => {
  const [zipCode, setZipCode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [municipalitie1, setMunicipalitie1] = useState("");
  const [municipalitie2, setMunicipalitie2] = useState("");
  const [municipalitie, setMunicipalitie] = useState("");
  const [zipCodeVerified, setZipCodeVerified] = useState(false);
  const [localNames, setLocalNames] = useState([]);
  const [prefectureVerified, setPrefectureVerified] = useState(false);
  const [municipalitieVerified, setMunicipalitieVerified] = useState(false);
  const [street, setStreet] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetVerified, setStreetVerified] = useState(false);
  const [buildingNameVerified, setBuildingNameVerified] = useState(false);

  useEffect(() => {
    !street == "" ? setStreetVerified(true) : setStreetVerified(false);
  }, [street]);
  
  useEffect(() => {
    !buildingName == ""
      ? setBuildingNameVerified(true)
      : setBuildingNameVerified(false);
  }, [buildingName]);

  useEffect(() => {
    setPrefecture(localNames.address1);
    setMunicipalitie1(localNames.address2);
    setMunicipalitie2(localNames.address3);
  }, [localNames]);

  useEffect(() => {
    let tmp = municipalitie1 + municipalitie2;
    setMunicipalitie(tmp || "");
  }, [municipalitie1, municipalitie2]);

  useEffect(() => {
    !prefecture === "" ? setPrefectureVerified(true) : null;
    !municipalitieVerified === "" ? setMunicipalitieVerified(true) : null;
  }, [prefecture, municipalitie]);

  let allChecked = [zipCodeVerified, streetVerified, buildingNameVerified];

  const addressSubmit = () => {
    const address = {
      zipCode: zipCode,
      prefecture: prefecture,
      municipalitie: municipalitie,
      street: street,
      buildingName: buildingName,
    };
    sessionStorage.setItem("address", JSON.stringify(address));
  };

  return (
    <main className="h-screen bg-cover">
      <Sidebar />
      <div className="pt-16 border-b-2 border-b-nabBg">
        <p className="bg-gradient-to-b from-updataTagBg to-viewContinue text-white text-3xl desktop:text-5xl p-3 rounded-md translate-y-[50%] m-auto text-center w-fit">
          個人情報入力
        </p>
      </div>
      <div className="justify-center">
        <div className="block gap-10 mx-6 tablet:mx-16 items-center m-auto left-4 relative py-8">
          <div className="flex my-5">
            <div className="w-full tablet:w-1/2 flex items-center">
              <span className="text-2xl desktop:text-4xl items-start w-fit text-nowrap">
                郵便番号 <span className="text-red">*</span>
              </span>
              <div className="w-full ml-4 desktop:ml-10">
                <AddressInput
                  inputType="text"
                  data="zipcode"
                  placeholder="123 4567"
                  localNames={localNames}
                  setLocalNames={setLocalNames}
                  variable={zipCode}
                  setVariable={setZipCode}
                  isVerified={zipCodeVerified}
                  setIsVerified={setZipCodeVerified}
                />
              </div>
            </div>
          </div>
          <div className="block tablet:flex my-16 tablet:my-32">
            <div className="w-full tablet:w-1/2 flex items-center">
              <span className="text-2xl desktop:text-4xl items-start w-fit text-nowrap">
                都道府県 <span className="text-red">*</span>
              </span>
              <div className="w-full ml-4 desktop:ml-10">
                <AddressInput
                  inputType="text"
                  variable={prefecture}
                  isVerified={prefectureVerified}
                  setIsVerified={setPrefectureVerified}
                  readOnly={true}
                />
              </div>
            </div>
            <div className="w-full tablet:w-1/2 flex items-center tablet:pl-5 mt-16 tablet:mt-0">
              <span className="text-2xl desktop:text-4xl items-start w-fit text-nowrap ">
                市区町村 <span className="text-red">*</span>
              </span>
              <div className="w-full ml-4 desktop:ml-10">
                <AddressInput
                  inputType="text"
                  variable={municipalitie}
                  isVerified={municipalitieVerified}
                  setIsVerified={setMunicipalitieVerified}
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div className="block tablet:flex my-16 tablet:my-32">
            <div className="w-full tablet:w-1/2 flex items-center">
              <span className="text-2xl desktop:text-4xl items-start w-fit text-nowrap pr-12">
                番地 <span className="text-red"> *</span>
              </span>
              <div className="w-full ml-4 desktop:ml-10">
                <StreetImport
                  placeholder="番地を入力"
                  variable={street}
                  isVerified={streetVerified}
                  setIsVerified={setStreetVerified}
                  setVariable={setStreet}
                />
              </div>
            </div>
            <div className="w-full tablet:w-1/2 flex items-center tablet:pl-5 mt-16 tablet:mt-0">
              <span className="text-2xl desktop:text-4xl items-start w-fit text-nowrap pr-10">
                建物名 <span className="text-red">*</span>
              </span>
              <div className="w-full tablet:ml-4 desktop:ml-10">
                <StreetImport
                  placeholder="建物名を入力"
                  variable={buildingName}
                  isVerified={buildingNameVerified}
                  setIsVerified={setBuildingNameVerified}
                  setVariable={setBuildingName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center gap-6 phone:gap-16 flex justify-center w-full py-16 border-t-nabBg border-t-2">
        <div>
          <Link
            href="/personal-info"
            className="p-6 tablet:p-12 py-2 tablet:py-4 border bg-nabBg text-white text-2xl desktop:text-4xl rounded-full font-bold flex items-center"
          >
            <Icon
              icon="formkit:arrowleft"
              width="48"
              height="48"
              className="mr-4 tablet:mr-8"
            />
            戻る
          </Link>
        </div>
        <div>
          {allChecked.every((value) => value === true) ? (
            <Link
              onClick={addressSubmit}
              href="/final-report"
              className="p-6 tablet:p-12 py-2 tablet:py-4 border bg-white text-nabBg text-2xl desktop:text-4xl rounded-full font-bold flex items-center"
            >
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </Link>
          ) : (
            <div className="p-6 tablet:p-12 py-2 tablet:py-4 border bg-white opacity-50 cursor-default text-nabBg text-2xl desktop:text-4xl rounded-full font-bold flex items-center">
              次に
              <Icon
                icon="formkit:arrowright"
                width="48"
                height="48"
                className="ml-4 tablet:ml-8"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
