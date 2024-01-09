import { useState } from "react";
import { questionsData, totalQuestions } from "../data/index";
import Quiz from "../components/Quiz";
import ProgressBar from "../components/ui/ProgressBar";
import ScoreBar from "../components/ui/ScoreBar";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const index = currentQuestion - 1;
  const question = questionsData[index];

  const percentage = (currentQuestion / totalQuestions) * 100;

  return (
    <>
      <ProgressBar percentage={percentage} />
      <div className="mx-auto mt-10 flex h-[85vh] w-4/5 max-w-4xl flex-col justify-between">
        <Quiz
          question={question}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          correctAnswer={question.correct_answer}
        />
        <ScoreBar />
      </div>
    </>
  );
}
