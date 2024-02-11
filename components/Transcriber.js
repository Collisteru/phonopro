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
          if (phonetics) {
            phonetics.forEach((phonetic) => {
              sentence.push(IPA[phonetic]);
            });
            sentence.push(null);
          } else {
            sentence.push({ symbol: word });
          }
        });
      }
      setResult(sentence);
    }
  };

  return (
    <div style={{ paddingTop: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border border-black bg-white text-black font-bold py-2 px-4"
          placeholder="Enter text here"
        />
        <button
          className={`border border-black bg-white text-black font-bold py-2 px-4`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div style={{ paddingTop: "40px" }}>
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
            <span style={{ color: "red" }}>
              Type a sentence and click on the characters!
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Transcriber;
