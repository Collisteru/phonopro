import React from "react";
import { useState, useEffect } from "react";

import style from "../styles/CharacterBox.module.css";

const CharacterBox = ({ character }) => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <l className={style.symbol}>{character.symbol}</l>
      </div>
    </div>
  );
};

export default CharacterBox;
