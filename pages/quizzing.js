// pages/quizzing.js

import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Link from "next/link";

const [correctCount, setCorrectCount] = useState(0);
const [quizIndex, setQuizIndex] = useState(0);
const totalQuizzes = 5; // Change this to the total number of quizzes

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

const handleAnswer = (isCorrect) => {
  if (isCorrect) {
    setCorrectCount((prevCount) => prevCount + 1);
  }
  setQuizIndex((prevIndex) => prevIndex + 1);
};

const resetQuiz = () => {
  setCorrectCount(0);
  setQuizIndex(0);
};

return (
  <div>
    <h1>Quiz App</h1>
    {quizIndex < totalQuizzes ? (
      <QuizPage
        key={quizIndex} // Ensure each quiz instance gets a unique key
        onAnswer={handleAnswer}
        onNext={() => setQuizIndex((prevIndex) => prevIndex + 1)}
      />
    ) : (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Correct Answers: {correctCount}</p>
        <button onClick={resetQuiz}>Restart Quiz</button>
      </div>
    )}
  </div>
);
export default QuizzingPage;
