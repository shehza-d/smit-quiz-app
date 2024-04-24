import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";

interface IProps {
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Model({ children, setShowModal }: IProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm focus:outline-none">
      <div className="mx-auto my-6 h-fit w-[650px] rounded-lg border bg-white p-4 shadow-lg drop-shadow-2xl">
        {/*  */}
        <div className="flex justify-between">
          <h3 className="center text-2xl font-medium">Title Model</h3>
          <button
            className="mb-1 mr-1 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <RxCross2
            className="text-2xl"
            />
          </button>
        </div>
        {children}
        {/*  */}
      </div>
    </div>
  );
}
