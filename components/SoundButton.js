import React from "react";
import Button from "./Button";

// given text to display on button and audioPath to sound file
const SoundButton = ({ text, audioPath }) => {
  const playSound = () => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  return (
    <button
      className="border border-black bg-white text-black font-bold py-5 px-6 px-4 ml-4 mr-4"
      onClick={playSound}
    >
      {
        <img
          src={"/speaker_red.svg.png"}
          style={{ width: "30px", height: "30px" }}
          className="mt-&"
        />
      }
      {text}
    </button>
  );
};

export default SoundButton;
