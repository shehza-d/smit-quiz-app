import { useContext } from "react";
import { GlobalContext } from "../context/index";
import { evaluateScore, getPercentage } from "../helpers";
import { totalQuestions } from "../data";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useContext(GlobalContext);
  const { scores } = state;

  const navigate = useNavigate();

  const { totalCorrectAnswer } = evaluateScore(scores);

  const percentage = getPercentage(totalCorrectAnswer);

  return (
    <div className="mx-auto mt-10 flex h-[70vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/smit.jpeg"
        alt="logo of Saylani SMIT"
      />
      <h1 className="break-words text-center text-4xl font-bold lg:text-5xl">
        Result Page
      </h1>

      <div className="my-10 text-2xl">
        {scores.length ? (
          <>
            <p>
              You answered {totalCorrectAnswer} out of {totalQuestions}{" "}
              questions correctly!
            </p>
            <p>Total Percentage was {percentage}%</p>
          </>
        ) : (
          <p>Give Quiz first to Check Results</p>
        )}
      </div>

      <button
        className="rounded-md px-6 py-2 ring-2 ring-blue-400 duration-300 hover:bg-blue-300 hover:transition-transform"
        onClick={() => navigate("/quiz")}
      >
        {scores.length ? "Restart Quiz" : "Start quiz"}
      </button>
    </div>
  );
}
