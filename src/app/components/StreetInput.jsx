import React, { useState } from "react";
import { Icon } from "@iconify/react";

const StreetInput = ({
  placeholder,
  variable,
  setVariable,
  isVerified,
  setIsVerified,
}) => {
  const [invalid, setInvalid] = useState(false);

  return (
    <>
      <input
        placeholder={placeholder}
        className={`rounded-full border-4 p-6 px-10 text-2xl focus:outline-none w-full ${
          invalid ? "border-red" : "border-inputBorder"
        }`}
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

export default StreetInput;
