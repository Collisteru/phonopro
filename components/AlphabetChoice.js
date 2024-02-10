import CharacterBox from "./CharacterBox";
import SelectionMenu from "./SelectionMenu";
import { useEffect, useState } from "react";
const { IPA } = require("../constants.js");

const AlphabetChoice = () => {
  const [parameter, setParameter] = useState(null);
  const [character, setCharacter] = useState(null);
  const [alphabet, setAlphabet] = useState(null);
  const handleParameterChange = (option) => {
    setParameter(option);
  };
  const handleCharacterChange = (option) => {
    setCharacter(option);
  };

  // update options dataset depending on parameter
  useEffect(() => {
    console.log(parameter);
    //   if (parameter === "Symbol") {
    //     setAlphabet(IPA);
    //   } else if (parameter === "Name") {
    //     setAlphabet(IPA);
    //   }
  }, [parameter]);
  return (
    <>
      <SelectionMenu
        onChange={handleParameterChange}
        options={["Symbol", "Name"]}
      />
      {parameter && (
        <SelectionMenu
          onChange={handleCharacterChange}
          options={Object.values(IPA).map(
            (item) => item[parameter.toLowerCase()]
          )}
        />
      )}
    </>
  );
};

export default AlphabetChoice;
