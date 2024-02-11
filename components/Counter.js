import React from "react";

import style from "../styles/CharacterBox.module.css";

const Counter = ({ label, numerator, denominator }) => {
  return (
    <div>
      <div>{label}:</div>
      <div style={{ textAlign: "center" }}>
        {numerator} / {denominator}
      </div>
    </div>
  );
};

export default Counter;
