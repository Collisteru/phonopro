import QuizPage from "../components/QuizPage";
import { useState, useEffect } from "react";

export default function Quizzing() {
  const [correctCount, setCorrectCount] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const totalQuizzes = 10;

  const resetQuiz = () => {
    setCorrectCount(0);
    setQuizIndex(0);
  };

  const handleAnswer = (selectedOption, correctIndex) => {
    // Handle the submission here
    console.log("selectedOption: ", selectedOption);
    console.log("correctIndex: ", correctIndex);
    if (selectedOption == correctIndex + 1) {
      // Increment the correct_count if the selected option is correct
      setCorrectCount((prevCount) => prevCount + 1);
      console.log("Correct!");
    }
    // Increment the quiz_index to move to the next question
    setQuizIndex((prevIndex) => prevIndex + 1);
  };

  // Generate a new key whenever quizIndex changes to force re-rendering of QuizPage
  const quizPageKey = `quizPage-${quizIndex}`;

  return (
    <QuizPage
      key={quizPageKey}
      correctCount={correctCount}
      quizIndex={quizIndex}
      handleAnswer={handleAnswer}
      resetQuiz={resetQuiz}
    />
  );
}
