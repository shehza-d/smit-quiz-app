import { IDifficulty, IScore } from "../types";
import { totalQuestions } from "../data";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffleArr = (array: string[]) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const evaluateScore = (score: IScore[]) => {
  let totalCorrectAnswer = 0;
  let totalIncorrectAnswer = 0;

  score.forEach((item) => {
    totalCorrectAnswer += item.answeredCorrectly ? 1 : 0;
    totalIncorrectAnswer += !item.answeredCorrectly ? 1 : 0;
  });

  return { totalCorrectAnswer, totalIncorrectAnswer };
};

export const getRating = (rating: IDifficulty) =>
  rating === "easy" ? 1 : rating === "medium" ? 2 : rating === "hard" ? 3 : 0;

// In most cases totalQuestions is being used for calculation but in 1 case total
// was totalAttemptedQuestions(state) so i added optional params of totalQuestions
export const getPercentage = (
  obtained: number,
  total: number = totalQuestions,
) => {
  const result = Math.round((obtained / total) * 100);
  return result || 0; // 0 to avoid NaN at first question
};
