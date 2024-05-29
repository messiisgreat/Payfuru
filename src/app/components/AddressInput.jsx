import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

const AddressInput = ({
  inputType,
  data,
  placeholder,
  variable,
  setVariable,
  isVerified,
  setIsVerified,
  setLocalNames,
  readOnly,
}) => {
  const [invalid, setInvalid] = useState(false);
  
  const formatAndSetZipcode = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 7) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 7);
    }

    let formattedNumber = "";
    if (inputNumbersOnly.length > 0) {
      formattedNumber = inputNumbersOnly.substr(0, 3);
    }
    if (inputNumbersOnly.length > 3) {
      formattedNumber += " " + inputNumbersOnly.substr(3, 4);
    }

    setVariable(formattedNumber);
  };
  useEffect(() => {
    if (data === "zipcode") {
      const zipinput = variable.replace(/ /g, '')
      if (variable.length === 8) {
        setIsVerified(true);
        setInvalid(false);
      }
      axios
        .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=` + zipinput)
        .then((res) => {
          const posts = res.data.results[0];
          setLocalNames(posts);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [variable]);

  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        className={`rounded-full border-4 p-3 desktop:p-6 px-10 text-2xl focus:outline-none w-full ${
          invalid ? "border-red" : "border-inputBorder"
        }`}
        readOnly={readOnly}
        value={variable}
        onChange={data === "zipcode"?formatAndSetZipcode:(e) => {
          setVariable(e.target.value);
        }}
      />
      {isVerified ? (
        <Icon
          icon="ei:check"
          width="50"
          height="50"
          className="text-[#4ce24c] absolute -translate-x-[60px] translate-y-[20px] inline-flex"
        />
      ) : null}
    </>
  );
};

export default AddressInput;
