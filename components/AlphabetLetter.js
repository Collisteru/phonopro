import SoundButton from "./SoundButton";
import CharacterBox from "./CharacterBox";

const AlphabetLetter = ({ letter }) => {
  return (
    <div>
      <p>{letter.name}</p>
      <SoundButton
        text={<CharacterBox character={letter} />}
        audioPath={letter.audiopath}
      />
    </div>
  );
};

export default AlphabetLetter;
