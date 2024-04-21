// New Quiz Questions will be added here
import { useState } from "react";
import Model from "../components/ui/Model";
import CodeForm from "../components/utils/CodeForm";
import Button from "../components/ui/Button";

export default function Admin() {
  const [showCodeBlockFormModel, setShowCodeBlockFormModel] = useState(false);

  return (
    <div>
      {showCodeBlockFormModel && (
        <Model
          // showModal={showCodeBlockFormModel}
          setShowModal={setShowCodeBlockFormModel}
        >
          <CodeForm />
        </Model>
      )}
      <h3>Add Questions</h3>
      <input
        type="text"
        placeholder="Question"
        className={`block h-12 w-full border border-gray-400 bg-gray-100 p-3 ${
          false //errors
            ? "border-red-400 ring-red-500"
            : "focus:border-primary focus:ring-primary"
        } "mb-2 mt-1 rounded outline-none focus:ring-2 md:text-xl`}
      />

      <div className="my-8 grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          Correct Answer
          <input
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Wrong Answer
          <input
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Wrong Answer
          <input
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
        <div className="flex flex-col">
          Wrong Answer
          <input
            type="text"
            className="h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary md:text-xl"
          />
        </div>
      </div>
      <Button
        onClick={() => setShowCodeBlockFormModel(!showCodeBlockFormModel)}
        className="button"
      >
        Add Code Block
      </Button>
    </div>
  );
}
