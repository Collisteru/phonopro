import Button from "./Button";
import SingingText from "./SingingText";
import { useState, useEffect } from "react";

const { IPA } = require("../constants.js");
const { CMU_DICT } = require("../constants.js");

const Transcriber = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);

  // useEffect(() => {

  // }, [result]);

  const handleSubmit = () => {
    // keep only alpha and split the input text into words
    const words = inputText
      .toUpperCase()
      .replace(/[^A-Z\s]/g, "")
      .split(" ");

    const sentence = [];

    if (words.length > 0) {
      words.forEach((word) => {
        const phonetics = CMU_DICT[word];
        phonetics.forEach((phonetic) => {
          sentence.push(IPA[phonetic]);
        });
      });
    }
    setResult(sentence);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <div>
        <h2>Transcription:</h2>
        <p>
          {console.log(result)}
          {result > 0 &&
            result.map((item) => (
              <SingingText text={item?.symbol} audioPath={item?.audiopath} />
            ))}
        </p>
      </div>
    </div>
  );
};

export default Transcriber;
