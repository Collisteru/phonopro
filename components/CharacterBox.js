import React from "react";

import style from "../styles/CharacterBox.module.css";

const CharacterBox = ({ character }) => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <span className={style.symbol}>{character.symbol}</span>
      </div>
    </div>
  );
};

export default CharacterBox;
