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

const Quiz = (correct_count, quiz_index) => {
  const [randomIPAs, setRandomIPAs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // Add selectedOption state variable
  const [correctIndex, setCorrectIndex] = useState(null); // Declare correctIndex state variable

  // useEffect is necessary to block Hydration error
  //
  useEffect(() => {
    const getRandomIPA = () => {
      // Get the keys (symbol codes) of the IPA object
      const symbolCodes = Object.keys(IPA);

      // Generate a list of random indices within the range of symbol codes
      const randomIndices = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * symbolCodes.length)
      );

      // Assign selectedIndex to a random numebr between 0 and 3 inclusive
      const selectedIndex = Math.floor(Math.random() * 4);

      // Retrieve the corresponding symbol information using the random symbol code
      const randomSymbolCode = [];
      const randomSymbolInfo = [];
      for (let i = 0; i < 4; i++) {
        randomSymbolCode.push(symbolCodes[randomIndices[i]]);
        randomSymbolInfo.push(IPA[randomSymbolCode[i]]);
      }

      // Return the random symbol information
      return { RandomIPAs: randomSymbolInfo, correctIndex: selectedIndex }; // Return an object with RandomIPAs and correctIndex
    };

    const { RandomIPAs, correctIndex } = getRandomIPA();

    setRandomIPAs(RandomIPAs);
    setCorrectIndex(correctIndex); // Update correctIndex state variable
  }, []);

  const handleSubmit = () => {
    // Handle the submission here
    console.log("Submission: ", selectedOption);
  };

  // Conditional rendering: render the component only when randomIPAs has been populated
  if (randomIPAs.length === 0) {
    // If randomIPAs is empty, return null or a loading indicator
    return null; // Or return a loading indicator JSX here
  }

  const character = randomIPAs[correctIndex];

  const [sound1, sound2, sound3, sound4] = randomIPAs;

  const handleOptionChange = (option) => {
    setSelectedOption(option); // update selectedOption when the option is changed
  };

  console.log("Correct_count: ", correct_count);
  console.log("Quiz_index: ", quiz_index);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8vh",
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
