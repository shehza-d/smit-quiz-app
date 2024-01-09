import { useContext } from "react";
import { GlobalContext } from "../context/index";
import type { Dispatch, SetStateAction, MouseEvent } from "react";
import { totalQuestions } from "../data/index";

interface IProps {
  item: string;
  correctAnswer: string;
  userSelectedAnswer: string;
  setUserSelectedAnswer: Dispatch<SetStateAction<string>>;
  currentQuestion: number;
  setBtnText: Dispatch<SetStateAction<string>>;
}

export default function ChoicesBtn(props: IProps) {
  const {
    item,
    correctAnswer,
    userSelectedAnswer,
    setUserSelectedAnswer,
    currentQuestion,
    setBtnText,
  } = props; // destructuring of props

  const { state, dispatch } = useContext(GlobalContext);
  const { scores } = state;

  const checkAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    if (userSelectedAnswer) return; // most important line

    // API can be called here to send Result to DB
    setUserSelectedAnswer(event.currentTarget.innerText);

    dispatch({
      type: "SET_SCORE",
      payload: [
        ...scores,
        {
          questionNo: currentQuestion,
          answeredCorrectly: event.currentTarget.innerText === correctAnswer,
        },
      ],
    });

    if (currentQuestion === totalQuestions) {
      setBtnText("Show result");
      return;
    }
  };
  return (
    <button
      onClick={checkAnswer}
      className={`w-full max-w-[18rem] rounded-md border-2 border-slate-700 px-2 py-1 font-medium ${
        userSelectedAnswer
          ? item === correctAnswer
            ? "bg-black text-white"
            : "opacity-50"
          : "bg-gray-200"
      }`}
    >
      {item}
    </button>
  );
}
