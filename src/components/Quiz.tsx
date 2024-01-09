import type { IQuestion } from "../types";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import ChoicesBtn from "./ChoicesBtn";
import { getRating } from "../helpers";
import { totalQuestions } from "../data/index";
import Stars from "./ui/Stars";
import { useNavigate } from "react-router-dom";

interface IProps {
  question: IQuestion;
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  correctAnswer: string;
}

export default function Quiz(props: IProps) {
  // destructuring of props
  const {
    question: { question, category, difficulty, choices },
    currentQuestion,
    setCurrentQuestion,
    correctAnswer,
  } = props;

  const navigate = useNavigate();

  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string>("");
  const [btnText, setBtnText] = useState<string>("Next Question");

  const handleNextQuestion = () => {
    if (currentQuestion === totalQuestions) navigate("/result");
    // currentQuestion + 1 will change screen to next question
    setCurrentQuestion(currentQuestion + 1);
    setUserSelectedAnswer("");
  };

  return (
    <div className="">
      <h2 className="text-2xl text-zinc-600 md:text-4xl">
        Question {currentQuestion} of {totalQuestions}
      </h2>
      <h4 className="pt-2 text-zinc-500">{category}</h4>

      <Stars filled={getRating(difficulty)} />

      <p className="flex min-h-[6rem] items-center text-lg font-medium">
        {question}
      </p>

      <div className="grid grid-cols-2 items-center justify-items-center gap-8">
        {choices?.map((item, i) => (
          <ChoicesBtn
            key={i}
            item={item}
            currentQuestion={currentQuestion}
            correctAnswer={correctAnswer}
            userSelectedAnswer={userSelectedAnswer}
            setUserSelectedAnswer={setUserSelectedAnswer}
            setBtnText={setBtnText}
          />
        ))}
      </div>

      {userSelectedAnswer && (
        <div className="mt-10 flex w-full flex-col items-center gap-6">
          <div className="text-4xl font-medium text-zinc-800">
            {userSelectedAnswer === correctAnswer ? "Correct!" : "Sorry!"}
          </div>
          {
            <button
              className="rounded-md border-2 border-slate-700 bg-gray-200 px-6 py-1"
              onClick={handleNextQuestion}
            >
              {btnText}
            </button>
          }
        </div>
      )}
    </div>
  );
}
