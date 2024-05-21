import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const SimulateUnit = ({ unitKey, item, simulateArray, setSimulateArray, donateCal }) => {
  const [productPrice, setProductPrice] = useState(item.price);
  const [productAmount, setProductAmount] = useState(item.count);

  const simulateRemove = () => {
    let tmp = simulateArray;
    const newIndex = tmp.findIndex((element) => element.id === unitKey);
    tmp.splice(newIndex, 1);
    setSimulateArray([...tmp]);
  };

  useEffect(() => {
    let tmp = simulateArray;
    tmp.forEach((element) => {
      if (element.id === unitKey) {
        element.price = productPrice;
        element.count = productAmount;
      }
    });
    donateCal();
    setSimulateArray(tmp);
  }, [productPrice, productAmount]);

  return (
    <div className="flex m-auto my-4 items-center justify-center gap-3">
      {simulateArray.length === 1 ? null : (
        <FontAwesomeIcon icon={faCircleMinus} onClick={simulateRemove} />
      )}
      <div className="flex">
        <input
          type="number"
          className="border-grayLetter border px-3 py-2.5"
          value={productPrice == 0 ? '' : productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <div className="items-center flex">
          <p className="mx-2">円</p>
        </div>
      </div>
      <div className="flex">
        <select
          type="number"
          className="border-grayLetter border px-3 py-3"
          value={productAmount}
          onChange={(e) => setProductAmount(Number(e.target.value))}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <div className="items-center flex">
          <p className="mx-2">個</p>
        </div>
      </div>
    </div>
  );
};

export default SimulateUnit;
