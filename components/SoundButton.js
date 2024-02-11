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
      {" "}
      {text}
    </button>
  );
};

export default SoundButton;
