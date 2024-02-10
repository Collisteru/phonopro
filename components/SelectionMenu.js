import React from "react";

const SelectionMenu = ({ options, onChange, display }) => {
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
      defaultValue="" // Set defaultValue to an empty string to have no option initially selected
    >
      <option value="" disabled>
        -- select an {display ? display : "option"} --
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {display && option.hasOwnProperty(display) ? option[display] : option}
        </option>
      ))}
    </select>
  );
};

export default SelectionMenu;
