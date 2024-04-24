import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { IMcq } from "../../types";
import type { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { mcqFormSchema, McqFormSchemaType } from "../../utils/zodValidation";

interface IProps {
  setMCQs: Dispatch<SetStateAction<IMcq[]>>;
}

export default function McqForm(Props: IProps) {
  const { setMCQs } = Props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<McqFormSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(mcqFormSchema),
  });

  const onFormSubmit = (data: McqFormSchemaType) => {
    console.log("🚀 ~ onFormSubmit ~ data:", data);
    setMCQs((perv) => [
      ...perv,
      {
        ...data,
        incorrect_answers: [
          data.incorrect_answer1,
          data.incorrect_answer2,
          data.incorrect_answer3,
        ],
        id: crypto.randomUUID(),
      },
    ]);
    // setProjectModal(false);
  };

  console.log(errors ? errors : "");
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}
    className="w-full"
    >
      <input
        id="question"
        {...register("question")}
        required={true}
        type="text"
        placeholder="Question"
        className={`my-4 mb-2 mt-1 block h-12 w-full border p-3 ${
          false //errors
            ? "border-red-400 ring-red-500"
            : "focus:border-primary focus:ring-primary"
        } "bg-gray-100 rounded border-gray-400 outline-none focus:ring-2 md:text-xl`}
      />

      {/* <Button
        onClick={() => setShowCodeBlockFormModel(!showCodeBlockFormModel)}
        className="bg-slate-500 text-slate-100"
      >
        Add Code Block
      </Button> */}

      <div className="my-6 grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          Correct Answer
          <input
            //    id="correct_answer"
            {...register("correct_answer")}
            required={true}
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Incorrect Answer
          <input
            id="incorrect_answer1"
            {...register("incorrect_answer1")}
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Incorrect Answer
          <input
            id="incorrect_answer2"
            {...register("incorrect_answer2")}
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Incorrect Answer
          <input
            id="incorrect_answer3"
            {...register("incorrect_answer3")}
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
      </div>

      <Button
        type="submit"
        // onClick={() => setShowCodeBlockFormModel(!showCodeBlockFormModel)}
        className="mx-auto w-44"
      >
        Add MCQ
      </Button>
    </form>
  );
}
