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
          style={{
            color: clicked ? "red" : "black",
            cursor: "pointer",
            fontSize: "50px",
          }}
          onClick={handleClick}
        >
          {text}
        </span>
      ) : text ? (
        <span style={{ fontSize: "50px" }}>
          {"["}
          {text}
          {"] "}
        </span>
      ) : (
        <span style={{ fontSize: "50px" }}>{"\t"}</span>
      )}
    </>
  );
};

export default SingingText;
