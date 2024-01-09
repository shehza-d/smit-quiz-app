import { totalQuestions } from "../data";
import { evaluateScore, getPercentage } from "../helpers";
import { useContext } from "react";
import { GlobalContext } from "../context/index";

export default function useScoreBarPercentage() {
  const { state } = useContext(GlobalContext);
  const { scores } = state;

  const totalAttemptedQuestions = scores.length;

  const { totalCorrectAnswer, totalIncorrectAnswer } = evaluateScore(scores);

  const max = totalQuestions - totalIncorrectAnswer;
  const maxPercentage = getPercentage(max);
  const minPercentage = getPercentage(totalCorrectAnswer);
  const totalCorrectPercentageUpTillNow = getPercentage(
    totalCorrectAnswer,
    totalAttemptedQuestions,
  );

  return { minPercentage, totalCorrectPercentageUpTillNow, maxPercentage };
}
