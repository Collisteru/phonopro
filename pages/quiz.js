// pages/quizzing.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import SelectionButton from "../components/SelectionButton";
import SoundButton from "../components/SoundButton";
import AudioChoice from "../components/AudioChoice";
import CharacterBox from "../components/CharacterBox";

const Quiz = () => {
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
        <CharacterBox />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton />
          <SoundButton />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoundButton />
          <SoundButton />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <SelectionButton />
          <SelectionButton />
          <SelectionButton />
          <SelectionButton />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
