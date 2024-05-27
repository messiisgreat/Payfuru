"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import PaymentSelect from "../components/PaymentSelect";
import PaymentCredit from "../components/PaymentCredit";

const Page = () => {
  const [payment, setPayment] = useState(false);

  return (
    <main className="block min-h-screen">
      <div className="py-8 m-auto text-center">
        <p>
          ふるさとNOW決済 -{" "}
          <span>
            東京都
          </span>
        </p>
      </div>
      <div className="text-center m-auto my-10 block">
        <Icon
          icon="bi:person-circle"
          width="48"
          height="48"
          className="m-auto"
        />
      </div>
      {payment === false ? (
        <PaymentSelect setPayment={setPayment} />
      ) : (
        <PaymentCredit setPayment={setPayment} />
      )}
    </main>
  );
};

export default Page;
