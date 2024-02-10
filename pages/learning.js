// pages/quizzing.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import SelectionMenu from "@components/SelectionMenu";
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
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Learning Mode</h1>
          <p>Practice by: </p>
          <SelectionMenu
            onChange={handleOptionChange}
            options={["Random", "Character"]}
          />
          {selectedOption == "Random" && <p>Selected: {selectedOption}</p>}
          {selectedOption == "Character" && <p>Selected: {selectedOption}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningPage;
