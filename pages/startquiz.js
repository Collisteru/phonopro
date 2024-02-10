// pages/startquiz.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

import Link from "next/link";

const [correctCount, setCorrectCount] = useState(0);
const [quizIndex, setQuizIndex] = useState(0);
const totalQuizzes = 5; // Change this to the total number of quizzes

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

export default StartQuiz;
