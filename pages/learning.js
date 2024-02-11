// pages/quizzing.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import SelectionMenu from "@components/SelectionMenu";
import AlphabetChoice from "@components/AlphabetChoice";
import AlphabetLetter from "@components/AlphabetLetter";
import getRandomIPA from "@components/RandomIPA";
import Button from "@components/Button";
import Transcriber from "@components/Transcriber";
import { useState } from "react";

const LearningPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [randomLetterKey, setRandomLetterKey] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleMoreClick = () => {
    if (selectedOption === "Random") {
      setRandomLetterKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: selectedOption ? "8vh" : "25vh",
          overflow: "auto",
          paddingBottom: "10vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Learning Mode</h1>
          <p>Practice by: </p>
          <SelectionMenu
            onChange={handleOptionChange}
            options={["Random", "Character", "Writing"]}
          />
          {selectedOption == "Random" && (
            <div>
              <AlphabetLetter letter={getRandomIPA()} />

              <Button onClick={handleMoreClick}>More!</Button>
            </div>
          )}
          {selectedOption == "Character" && <AlphabetChoice />}
          {selectedOption == "Writing" && <Transcriber />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPage;
