import React from "react";

const SelectionMenu = () => {
  const options = [1, 2, 3, 4];

  return (
    <select
      style={{
        backgroundColor: "lightgray",
        padding: "5px",
        borderRadius: "0px",
        borderWidth: "3px",
        borderColor: "black",
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectionMenu;
