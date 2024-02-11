import SoundButton from "./SoundButton";
import CharacterBox from "./CharacterBox";

const AlphabetLetter = ({ letter }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div style={{ padding: "20px" }}>
        <p>{letter.name}</p>
        <SoundButton
          text={<CharacterBox character={letter} />}
          audioPath={letter.audiopath}
        />
      </div>
    </div>
  );
};

export default AlphabetLetter;
