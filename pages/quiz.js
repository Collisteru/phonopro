// pages/quizzing.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const { IPA } = require("../constants.js");
import getRandomIPA from "@components/RandomIPA";

// import SelectionButton from "../components/SelectionButton";
import SoundButton from "../components/SoundButton";
// import AudioChoice from "../components/AudioChoice";
import CharacterBox from "../components/CharacterBox";

const Quiz = () => {
  const [randomIPAs, setRandomIPAs] = useState([]);

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
    const RandomIPAs = Array.from({ length: 4 }, () => getRandomIPA());
    console.log("RandomIPAs", RandomIPAs);
    console.log("RandomIPAs[0]", RandomIPAs[0]);
    setRandomIPAs(RandomIPAs);
  }, []);

  // Conditional rendering: render the component only when randomIPAs has been populated
  if (randomIPAs.length === 0) {
    // If randomIPAs is empty, return null or a loading indicator
    return null; // Or return a loading indicator JSX here
  }

  const character = randomIPAs[0];
  const sound1 = randomIPAs[0];
  const sound2 = randomIPAs[1];
  const sound3 = randomIPAs[2];
  const sound4 = randomIPAs[3];

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
          <SoundButton text={1} audioPath={sound1.audiopath} />
          <SoundButton text={2} audioPath={sound2.audiopath} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton text={3} audioPath={sound3.audiopath} />
          <SoundButton text={4} audioPath={sound4.audiopath} />
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
