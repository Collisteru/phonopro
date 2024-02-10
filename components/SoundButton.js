import React from "react";
import Button from "./Button";

// given text to display on button and audioPath to sound file
const SoundButton = ({ text, audioPath }) => {
  const playSound = () => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  return (
    <div>
      <Button onClick={playSound}>{text}</Button>
    </div>
  );
};

export default SoundButton;
