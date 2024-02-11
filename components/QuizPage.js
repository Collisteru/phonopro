// pages/quizzing.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const { IPA } = require("../constants.js");

import SelectionMenu from "../components/SelectionMenu";
import SoundButton from "../components/SoundButton";
import CharacterBox from "../components/CharacterBox";
import Counter from "../components/Counter";

const QuizPage = (params) => {
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

  // Conditional rendering: render the component only when randomIPAs has been populated
  if (randomIPAs.length === 0) {
    // If randomIPAs is empty, return null or a loading indicator
    return null; // Or return a loading indicator JSX here
  }

  const character = randomIPAs[correctIndex];

  const [sound1, sound2, sound3, sound4] = randomIPAs;

  console.log("Sounds: ");
  console.log(sound1);
  console.log(sound2);
  console.log(sound3);
  console.log(sound4);

  const handleOptionChange = (option) => {
    setSelectedOption(option); // update selectedOption when the option is changed
  };

  console.log("Correct_count: ", params.correctCount);
  console.log("Quiz_index: ", params.quizIndex);
  console.log("handleAnswer: ", params.handleAnswer);
  console.log("resetQuiz: ", params.resetQuiz);

  return (
    <div style={{ backgroundColor: "white" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px", // Add margin-top for spacing
          }}
        >
          <Counter
            label={"Round"}
            numerator={params.quizIndex}
            denominator={10}
          />
          <CharacterBox character={character} />
          <Counter
            label={"Correct Answers"}
            numerator={params.correctCount}
            denominator={10}
          ></Counter>
        </div>
        <br></br>
        <div>Select which audio file corresponds to the given IPA symbol:</div>
        <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton text={1} audioPath={sound1.audiopath} />
          <SoundButton text={2} audioPath={sound2.audiopath} />
          <SoundButton text={3} audioPath={sound3.audiopath} />
          <SoundButton text={4} audioPath={sound4.audiopath} />
        </div>
        <br></br>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <SelectionMenu onChange={handleOptionChange} options={[1, 2, 3, 4]} />

          <Button
            className="ml-8"
            onClick={() => params.handleAnswer(selectedOption, correctIndex)}
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
