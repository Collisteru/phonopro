import Button from "./Button";
import SingingText from "./SingingText";
import { useState, useEffect } from "react";

const { IPA } = require("../constants.js");
const { CMU_DICT } = require("../constants.js");

// regex to check if the input text contains alphabets
const regexAlpha = /[a-zA-Z]/;

const Transcriber = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    if (!regexAlpha.test(inputText)) {
      setResult([]); // if does not have alpha character, clear the result
    } else {
      // keep only alpha and split the input text into words
      const words = inputText
        .trim()
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
          sentence.push(null);
        });
      }
      setResult(sentence);
    }
  };

  return (
    <div>
      <h2>Write your sentence in IPA, and then check it!</h2>
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
          {result.length > 0 ? (
            result.map((item, index) => (
              <SingingText
                key={index}
                text={item?.symbol}
                audioPath={item?.audiopath}
              />
            ))
          ) : (
            <span>Nothing to transcript!</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Transcriber;
