interface IProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  isLoading?: boolean;
}

export default function Button(Props: IProps) {
  const { children, className, onClick, type, isLoading } = Props;
  return (
    <button
      // href={href||'#'}
      onClick={onClick ? onClick : () => {}}
      className={`${className} center rounded bg-primary px-3 py-1 font-semibold uppercase text-white shadow-md drop-shadow hover:shadow-xl hover:drop-shadow-xl`}
      type={type || "button"}
    >
      {!isLoading ? children : "Loading..."}
    </button>
  );
}
