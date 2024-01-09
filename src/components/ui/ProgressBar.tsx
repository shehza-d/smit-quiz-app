// Top Progress Bar
export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full">
      <div
        className="h-4 bg-primary transition-all duration-700"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
