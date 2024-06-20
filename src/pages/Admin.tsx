// New Quiz Questions will be added here
import { useState } from "react";
import Model from "../components/ui/Model";
import CodeForm from "../components/admin/CodeForm";
import Button from "../components/ui/Button";
import { IMcq } from "../types";
import McqForm from "../components/admin/McqForm";
import { FaCode } from "react-icons/fa";

export default function Admin() {
  const [showCodeBlockFormModel, setShowCodeBlockFormModel] = useState(false);
  const [MCQs, setMCQs] = useState<IMcq[]>([]);
  console.log("🚀 ~ Admin ~ MCQs:", MCQs);

  return (
    <div className="flex flex-col items-start gap-4 p-4 w-full">
      {showCodeBlockFormModel && (
        <Model
          // showModal={showCodeBlockFormModel}
          setShowModal={setShowCodeBlockFormModel}
        >
          <CodeForm
            setMCQs={setMCQs}
            setShowCodeBlockFormModel={setShowCodeBlockFormModel}
          />
        </Model>
      )}
      <Button
        onClick={() => setShowCodeBlockFormModel(!showCodeBlockFormModel)}
        className="bg-slate-500 text-slate-100 flex justify-center items-center gap-2"
      >
        <FaCode className="text-lg" /><p>Add Code Block</p>
      </Button>

      <h3 className="mt-4">Add Questions</h3>
      <McqForm setMCQs={setMCQs} />

      <div className="list">
        {MCQs?.map((mcq) => (
          <div key={mcq.id}>
            Q. {mcq.question} <br />
            Options 1. {mcq.correct_answer} <br />
            {mcq.incorrect_answers?.map((item, i) => (
              <>
                Options {i + 2}. {item} <br />
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
