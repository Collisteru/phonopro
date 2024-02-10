import QuizPage from "../components/QuizPage";
import { useState, useEffect } from "react";

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

export default function Quizzing() {
  const [correctCount, setCorrectCount] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const totalQuizzes = 10;

  return <QuizPage correctCount={correctCount} quizIndex={quizIndex} />;
}
