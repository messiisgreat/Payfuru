import React from "react";

const RadioButton = ({ name, id, text, setCheckedValue, checkedValue }) => {
  return (
    <div
      className="my-12"
      onClick={() => {
        setCheckedValue(id);
      }}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        className="h-6 w-6"
        checked={id == checkedValue}
      />
      <label for="option1" className="text-3xl ml-3">
        {text}
      </label>
    </div>
  );
};

export default RadioButton;
