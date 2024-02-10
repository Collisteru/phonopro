// pages/quiz.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import { useState } from "react";
import getRandomIPA from "@components/RandomIPA";

import SelectionMenu from "@components/SelectionMenu";
import SoundButton from "@components/SoundButton";
import CharacterBox from "@components/CharacterBox";

// server side fetching
export async function getServerSideProps() {
  const randomIPAs = Array.from({ length: 4 }, () => getRandomIPA());
  return {
    props: {
      randomIPAs,
    },
  };
}

const Quiz = ({ randomIPAs }) => {
  // const [randomIPAs, setRandomIPAs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (submission) => {
    // Handle the submission here
    console.log("Submission: ", submission);
  };

  const character = randomIPAs[0];

  const [option1, option2, option3, option4] = randomIPAs;

  const handleOptionChange = (option) => {
    setSelectedOption(option); // update selectedOption when the option is changed
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
          <SoundButton text={1} audioPath={option1.audiopath} />
          <SoundButton text={2} audioPath={option2.audiopath} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton text={3} audioPath={option3.audiopath} />
          <SoundButton text={4} audioPath={option4.audiopath} />
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
