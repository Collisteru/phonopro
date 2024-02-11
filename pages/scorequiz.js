// pages/scorequiz.js

import { useRouter } from "next/router";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

import Link from "next/link";

const ScoreQuiz = () => {
  const router = useRouter();

  // Get correctCount from the query object
  const correctCount = router.query.correctCount;
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
            Good job finishing the quiz! You got {correctCount} out of 10
            correct!
          </div>
          <br></br>
          <div>
            <Button>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScoreQuiz;
