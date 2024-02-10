// pages/quizzing.js

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";

const QuizzingPage = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "25vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            {" "}
            This page exists only to help us test the rendering of all the IPA
            characters in our font and CSS styling.
          </div>
          <h1>
            m ɱ n ɳ ɲ ŋ ɴ p b t d ʈ ɖ c ɟ k g q ɢ ʔ ɸ β f v θ ð s z ʃ ʒ ʂ ʐ ç ʝ
            x ɣ χ ʁ ħ ʕ h ɦ ʋ ɹ ɻ j ɰ ʙ r ʀ ɾ ɽ ɬ ɮ l ɭ ʎ ʟ ɺ ɺ̢ ʎ̯
          </h1>
          <h1>
            i · yɨ · ʉɯ · uɪ · ʏʊe · øɘ · ɵɤ · oəɛ · œɜ · ɞʌ · ɔæɐa · ɶɑ · ɒ
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizzingPage;
