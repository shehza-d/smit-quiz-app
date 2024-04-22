import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IProps extends ButtonProps {
  isLoading?: boolean;
}

export default function Button(Props: IProps) {
  const { children, className, onClick, type, isLoading } = Props;
  return (
    <button
      // href={href||'#'}
      onClick={onClick ? onClick : () => {}}
      className={twMerge(
        // twMerge ensures the props classes will be applied and below classes will be overridden
        `center rounded bg-primary px-3 py-1 font-semibold uppercase text-white shadow-md drop-shadow hover:shadow-xl hover:drop-shadow-xl`,
        className
      )}
      type={type || "button"}
    >
      {!isLoading ? children : "Loading..."}
    </button>
  );
}
