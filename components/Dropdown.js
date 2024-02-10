import React, { useState } from "react";
import Button from "./Button";

// const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const DropdownMenu = ({ setSelection, optionList }) => {
  // state to control the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // function to handle item selection
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setSelection(item); // update the selection state with item
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {/* Dropdown toggle button */}
      <Button className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </Button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          {optionList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
