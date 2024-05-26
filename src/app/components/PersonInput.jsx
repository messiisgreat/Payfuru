import React, { useEffect, useState } from "react";
import validator from "validator";
import { Icon } from "@iconify/react";

const PersonInput = ({
  inputType,
  placeholder,
  isVerified,
  setIsVerified,
  divided,
  variable,
  setVariable,
}) => {
  const [invalid, setInvalid] = useState(false);

  let columnSpan = "col-span-1";
  if (divided === 1) {
    columnSpan = "col-span-4";
  } else if (divided === 2) {
    columnSpan = "col-span-2";
  }

  useEffect(() => {
    variable == "" ? setIsVerified(false) : setIsVerified(true);
    if (inputType === "email") {
      if (validator.isEmail(variable)) {
        setInvalid(false);
        setIsVerified(true);
      } else {
        setInvalid(true);
        setIsVerified(false);
      }
    }
    if (variable === "") {
      setInvalid(false);
    }
  }, [variable]);
  
  return (
    <div className={columnSpan}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={`rounded-full border-4  p-6 px-10 text-2xl focus:outline-none w-full ${
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
    </div>
  );
};

export default PersonInput;
