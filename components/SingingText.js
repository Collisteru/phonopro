import { useState } from "react";

const SingingText = ({ text, audioPath }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    const audio = new Audio(audioPath);
    audio.play();

    // automatically reset after 2 secs
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <p
      style={{ color: clicked ? "red" : "black", cursor: "pointer" }}
      onClick={handleClick}
    >
      {text}
    </p>
  );
};

export default SingingText;
