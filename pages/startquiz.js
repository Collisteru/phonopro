// pages/startquiz.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

import Link from "next/link";

const StartQuiz = () => {
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
          <h1>Quizzing Mode</h1>
          <div>Welcome to the IPA quiz!</div>
          <br></br>
          <div>
            Match the symbol to the phoneme it represents by listening to four
            phoneme recordings and choosing the correct one.
          </div>
          <br></br>
          <Link href="/quizzing">
            <Button> Start Quiz </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartQuiz;
