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
  
  useEffect(() => {
    if (data === "zipcode") {
      if (variable.length === 3) {
        setVariable(variable + "-");
      }
      const zipinput = variable.replace(/[^0-9]/g, "");
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
        className={`rounded-full border-4 p-6 px-10 text-2xl focus:outline-none w-full ${
          invalid ? "border-red" : "border-inputBorder"
        }`}
        readOnly={readOnly}
        value={variable}
        onChange={(e) => {
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
