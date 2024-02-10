import CharacterBox from "./CharacterBox";
import SelectionMenu from "./SelectionMenu";
import SoundButton from "./SoundButton";
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
    Object.values(IPA).forEach((item) => {
      if (item[parameter?.toLowerCase()] === character) {
        setAlphabet(item);
      }
    });
  }, [character]);

  return (
    <div>
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
      <div>
        {alphabet !== null && (
          <SoundButton
            text={<CharacterBox character={alphabet} />}
            audioPath={alphabet.audiopath}
          />
        )}
      </div>
    </div>
  );
};

export default AlphabetChoice;
