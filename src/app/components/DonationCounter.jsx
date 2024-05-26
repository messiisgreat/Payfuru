import React from "react";
import { Icon } from "@iconify/react";

const DonationCounter = ({ donKey, donationEst, setDonationEst }) => {

  const increaseCount = () => {
    const updatedDonationEst = donationEst.map((item) => {
      if (item.donId === donKey) {
        return { ...item, donCount: item.donCount + 1 };
      }
      return item;
    });
    setDonationEst(updatedDonationEst);
  };

  const decreaseCount = () => {
    const updatedDonationEst = donationEst.map((item) => {
      if (item.donId === donKey && item.donCount > 0) {
        return { ...item, donCount: item.donCount - 1 };
      }
      return item;
    });
    setDonationEst(updatedDonationEst);
  };

  return (
    <div className="flex justify-center">
      <div className="border-2 border-viewContinue p-3" onClick={decreaseCount}>
        <Icon
          icon="akar-icons:minus"
          width="24"
          height="24"
          className="text-viewContinue"
        />
      </div>
      <div className="border-t-2 border-b-2 border-viewContinue text-viewContinue p-3">
        {donationEst[donKey].donCount}
      </div>
      <div className="border-2 border-viewContinue p-3" onClick={increaseCount}>
        <Icon
          icon="akar-icons:plus"
          width="24"
          height="24"
          className="text-viewContinue"
        />
      </div>
    </div>
  );
};

export default DonationCounter;
