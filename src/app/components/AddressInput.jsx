import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddressInput = ({
    inputType, 
    data,
    placeholder, 
    variable, 
    setVariable, 
    isVerified, 
    setIsVerified, 
    setLocalNames,
    readOnly
}) => {
    const [invalid, setInvalid] = useState(false)
    useEffect(() => {
        if(data === "zipcode"){
            if(variable.length === 3){
                setVariable(variable + "-")
            }
            const zipinput = variable.replace(/[^0-9]/g, '')
            if(variable.length === 8) {
                setIsVerified(true)
                setInvalid(false)
            }
            axios
                .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=`+zipinput)
                .then((res) => {
                        const posts = res.data.results[0];
                        setLocalNames(posts);
                })
                .catch((error) => {
                        console.error("Error fetching data:", error);
                });
        }
    }, [variable])

    return (
        <>
        <input type={inputType} placeholder={placeholder} className={`rounded-full border-4 p-6 px-10 text-2xl focus:outline-none w-full ${invalid? "border-red":"border-inputBorder"}`} readOnly={readOnly} value={variable} onChange={(e) =>  {setVariable(e.target.value)}}/>
        {isVerified ? <FontAwesomeIcon icon={faCheckCircle} className="text-[#4ce24c] absolute -translate-x-[53px] translate-y-[28px]" size="2xl"/> : null}
        </>
        
    )
}

export default AddressInput;
