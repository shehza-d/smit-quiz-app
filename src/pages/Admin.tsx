// New Quiz Questions will be added here
import { useState } from "react";
import Model from "../components/ui/Model";
import CodeForm from "../components/admin/CodeForm";
import Button from "../components/ui/Button";
import { IMcq } from "../types";
import McqForm from "../components/admin/McqForm";

export default function Admin() {
  const [showCodeBlockFormModel, setShowCodeBlockFormModel] = useState(false);
  const [MCQs, setMCQs] = useState<IMcq[]>([]);
  console.log("🚀 ~ Admin ~ MCQs:", MCQs);

  return (
    <div>
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
        className="bg-slate-500 text-slate-100"
      >
        Add Code Block
      </Button>

      <h3>Add Questions</h3>
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
