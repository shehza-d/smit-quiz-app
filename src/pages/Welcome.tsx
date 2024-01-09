import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="mx-auto mt-10 flex h-[80vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/smit.jpeg"
        alt="logo of Saylani SMIT"
      />
      <h1 className="mb-10 break-words text-center text-4xl font-bold lg:text-5xl">
        Welcome to SMIT Quiz
      </h1>
      <Link
        to="/quiz"
        className="rounded-md px-6 py-2 ring-2 ring-blue-400 duration-300 hover:bg-blue-300 hover:transition-transform"
      >
        Start Quiz
      </Link>
    </div>
  );
}
