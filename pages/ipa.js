import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

import { isMobile } from "react-device-detect";

import Link from "next/link";

function IPA() {
  // Define columnStyle outside of conditional statements

  const columnStyle = {
    marginLeft: "25%",
    marginRight: "25%",
    textAlign: "justify",
  };

  return (
    <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
      <Header />
      <h1 style={{ fontSize: "3rem" }}>What is IPA?</h1>
      <div style={columnStyle}>
        <p>
          In theory, each letter in an alphabet is supposed to correspond with a
          sound in the language it represents. In real life, this often isn't
          the case, and so the way words are spelled (an orthography) can leave
          their pronounciation ambiguous. English gives us many examples: clean
          rhymes with "mean" and "glean", but not with "ocean" or "crustacean".
          Also, "does" and "woes" can't rhyme together, unless you're talking
          about animals.{" "}
        </p>
        <br></br>
        <p>
          Even examples of English orthography that seem more straightforward
          can actually be ambiguous, which is part of what leads to foreign
          accents in second language learners. For example, in American English,
          the "a" in "cat" and the "a" in "father" are completely different
          vowels, even though grammarians call them the same letter. There are
          other wrinkles, too, like how English uses two letters in "th" to
          represent what is actually a single sound, or how the single letter
          "x" is used to represent two sounds together.{" "}
        </p>
        <br></br>
        <p>
          If the goal of an alphabet is to teach people how to pronounce a
          language, we're going to have to do better than the English alphabet.
          We want an alphabet that represents a single spoken sound (phoneme) by
          a single letter unambiguously, such that each letter corresponds to
          the same phoneme no matter where it appears. We want an alphabet that
          represents phonemes across languages the same, instead of transcribing
          the same phoneme differently in different languages. We want an
          alphabet that we can read aloud and sound the same, or at least as
          close as is possible, as the person who wrote down the speech.{" "}
        </p>
        <br></br>
        <p> What we want is the International Phonetic Alphabet.</p>
        <br></br>
        <p>
          {" "}
          The IPA was developed by linguists in the 19th century as the first
          writing system in history to consistently transcribe the sounds of
          human speech. Its creators analyzed the ways humans make phonemes --
          consonants and vowels -- and systematically gave each utterance its
          own character based loosely on the use of the Latin Alphabet by French
          and English. The IPA is used not just by linguists but also by foreign
          language learners, lexicographers, speech-language pathologists,
          actors, and others.{" "}
        </p>
        <br></br>
        <p>
          {" "}
          The goal of this website is not to teach the principles of the IPA but
          to give you an opportunity to practice memorizing the letterforms,
          which can be strange and unintuitive, and connect them with the
          phonemes they correspond to. In Learning Mode, you can look at a list
          of all the characters and see what they look and sound like. You can
          also type in English text to generate its transcription in IPA. In
          Quizzing Mode, you can test your knowledge by looking at random
          letterforms and choosing which phoneme they correspond to. This simple
          flashcard method, which is based on the well-known method of spaced
          repetition, makes it easy to absorb the meaning of the letters. With
          PhonoPro, you'll be proficient in IPA in no time!
        </p>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default IPA;
