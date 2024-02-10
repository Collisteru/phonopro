// pages/quizzing.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const { IPA } = require("../constants.js");
import getRandomIPA from "@components/RandomIPA";

// import SelectionButton from "../components/SelectionButton";
// import SoundButton from "../components/SoundButton";
// import AudioChoice from "../components/AudioChoice";
import CharacterBox from "../components/CharacterBox";

const Quiz = () => {
  const [randomIPA, setRandomIPA] = useState("");

  // useEffect is necessary to block Hydration error
  useEffect(() => {
    const getRandomIPA = () => {
      // Get the keys (symbol codes) of the IPA object
      const symbolCodes = Object.keys(IPA);

      // Generate a random index within the range of symbol codes
      const randomIndex = Math.floor(Math.random() * symbolCodes.length);

      // Use the random index to pick a random symbol code
      const randomSymbolCode = symbolCodes[randomIndex];

      // Retrieve the corresponding symbol information using the random symbol code
      const randomSymbolInfo = IPA[randomSymbolCode];

      // Return the random symbol information
      return randomSymbolInfo;
    };
    setRandomIPA(getRandomIPA());
  }, []);

  const character = randomIPA;
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "25vh",
        }}
      >
        <CharacterBox character={character} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <SoundButton />
          <SoundButton /> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <SoundButton />
          <SoundButton /> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <SelectionButton />
          <SelectionButton />
          <SelectionButton />
          <SelectionButton /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
