import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const StreetInput = ({placeholder, variable,setVariable, isVerified, setIsVerified}) => {
    const [invalid, setInvalid] = useState(false)

    return (
        <>
        <input placeholder={placeholder} className={`rounded-full border-4 p-6 px-10 text-2xl focus:outline-none w-full ${invalid? "border-red":"border-inputBorder"}`} value={variable} onChange={(e) => {setVariable(e.target.value)}}/>
        {isVerified ? <FontAwesomeIcon icon={faCheckCircle} className="text-[#4ce24c] absolute -translate-x-[53px] translate-y-[28px]" size="2xl"/> : null}
        </>
    )
}

export default StreetInput;
