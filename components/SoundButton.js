import React from "react";

// given text to display on button and audioPath to sound file
const SoundButton = ({ text, audioPath }) => {
  const playSound = () => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  return (
    <div>
      <button onClick={playSound}>{text}</button>
    </div>
  );
};

export default SoundButton;
