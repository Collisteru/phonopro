// pages/scorequiz.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

import Link from "next/link";

const ScoreQuiz = () => {
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
          <div>This is the quiz scoring page, hooray!</div>;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScoreQuiz;
