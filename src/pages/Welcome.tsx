import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="mx-auto ml:mt-10 flex min-h-[80vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/smit.jpeg"
        alt="logo of Saylani SMIT"
      />
      <h1 className="break-words text-center text-3xl font-bold text-slate-800 lg:text-5xl">
        Welcome to SMIT Quiz Portal
      </h1>
      <p className="my-4 ml:my-8 text-slate-700 md:text-xl">
        Saylani Mass IT Training program is an institute that delivers the
        latest IT education (FREE OF COST). <br />
        SMIT Department is one of the departments that is running under Saylani
        Welfare Trust Management.
      </p>
      <Link
        to="/quiz"
        className="ring-primary hover:bg-primary rounded-md px-6 py-2 ring-2 duration-300 hover:transition-transform"
      >
        Proceed
      </Link>
    </div>
  );
}
