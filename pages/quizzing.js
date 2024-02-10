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
          <h1>Quizzing Mode</h1>
          <div>Welcome to the magnificent IPA quiz!</div>
          <Link href="/quiz">
            <Button> Start Quiz </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizzingPage;
