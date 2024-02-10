// pages/quizzing.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import SelectionMenu from "@components/SelectionMenu";
import AlphabetChoice from "@components/AlphabetChoice";
import AlphabetLetter from "@components/AlphabetLetter";
import getRandomIPA from "@components/RandomIPA";
import { useState, useEffect } from "react";

const LearningPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]); // Log the updated selectedOption whenever it changes

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
            options={["Random", "Character"]}
          />
          {selectedOption == "Random" && (
            <AlphabetLetter letter={getRandomIPA()} />
          )}
          {selectedOption == "Character" && <AlphabetChoice />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPage;
