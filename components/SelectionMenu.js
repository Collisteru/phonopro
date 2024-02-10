import React from "react";

const SelectionMenu = ({ options, onChange }) => {
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onChange(selectedOption); // pass the selected option to the parent component
  };
  return (
    <select
      style={{
        backgroundColor: "lightgray",
        padding: "5px",
        borderRadius: "0px",
        borderWidth: "3px",
        borderColor: "black",
      }}
      onChange={handleChange}
    >
      <option disabled selected value>
        {" "}
        -- select an option --{" "}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectionMenu;
