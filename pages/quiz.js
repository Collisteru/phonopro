// pages/quizzing.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const { IPA } = require("../constants.js");
import getRandomIPA from "@components/RandomIPA";

import SelectionMenu from "../components/SelectionMenu";
import SoundButton from "../components/SoundButton";
import CharacterBox from "../components/CharacterBox";

const Quiz = () => {
  const [randomIPAs, setRandomIPAs] = useState(
    Array.from({ length: 4 }, () => getRandomIPA())
  );
  const [selectedOption, setSelectedOption] = useState(null); // Add selectedOption state variable

  // // useEffect is necessary to block Hydration error
  // useEffect(() => {
  //   const getRandomIPA = () => {
  //     // Get the keys (symbol codes) of the IPA object
  //     const symbolCodes = Object.keys(IPA);

  //     // Generate a random index within the range of symbol codes
  //     const randomIndex = Math.floor(Math.random() * symbolCodes.length);

  //     // Use the random index to pick a random symbol code
  //     const randomSymbolCode = symbolCodes[randomIndex];

  //     // Retrieve the corresponding symbol information using the random symbol code
  //     const randomSymbolInfo = IPA[randomSymbolCode];

  //     // Return the random symbol information
  //     return randomSymbolInfo;
  //   };
  //   setRandomIPAs(randomIPAs);
  // }, [randomIPAs]);

  const handleSubmit = (submission) => {
    // Handle the submission here
    console.log("Submission: ", submission);
  };

  // conditionally render the character
  const character = randomIPAs ? randomIPAs[0] : null;

  const [sound1, sound2, sound3, sound4] = randomIPAs;

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Update selectedOption when the option is changed
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8vh",
          overflow: "auto",
          paddingBottom: "10vh",
        }}
      >
        <div>
          Press each of the numbered buttons to play the corresponding audio.
        </div>
        <br></br>
        <CharacterBox character={character} />
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton text={1} audioPath={sound1.audiopath} />
          <SoundButton text={2} audioPath={sound2.audiopath} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton text={3} audioPath={sound3.audiopath} />
          <SoundButton text={4} audioPath={sound4.audiopath} />
        </div>
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            Select which audio file corresponds to the given IPA symbol:
          </div>
        </div>
        <SelectionMenu onChange={handleOptionChange} options={[1, 2, 3, 4]} />{" "}
        <Button onClick={() => handleSubmit(selectedOption)}> Submit </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
