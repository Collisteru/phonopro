import { useState } from "react";

const SingingText = ({ text, audioPath }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    const audio = new Audio(audioPath);
    audio.play();

    // automatically reset after 1 sec
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <>
      {text && audioPath ? (
        <span
          style={{ color: clicked ? "red" : "black", cursor: "pointer" }}
          onClick={handleClick}
        >
          {text}
        </span>
      ) : (
        <span>{"\t"}</span>
      )}
    </>
  );
};

export default SingingText;
