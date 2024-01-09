import useScoreBarPercentage from "../../hooks/useScoreBarPercentage";

// this is the bottom Score Progress Bar
export default function ScoreBar() {
  const { minPercentage, totalCorrectPercentageUpTillNow, maxPercentage } =
    useScoreBarPercentage();

  return (
    <div className="relative h-9 w-full rounded-md border-2 border-zinc-600">
      <div className="absolute -top-12 flex h-9 w-full items-center justify-between">
        <span>Min: {minPercentage}%</span>
        <span>Score: {totalCorrectPercentageUpTillNow}%</span>
        <span>Max: {maxPercentage}%</span>
      </div>
      <div
        style={{ width: `${maxPercentage}%` }}
        className={`absolute h-full rounded-l bg-gray-300 transition-all duration-700`}
      ></div>
      <div
        style={{ width: `${totalCorrectPercentageUpTillNow}%` }}
        className="absolute h-full rounded-l bg-gray-500 transition-all duration-700"
      ></div>
      <div
        style={{ width: `${minPercentage}%` }}
        className={`absolute h-full rounded-l bg-black transition-all duration-700`}
      ></div>
    </div>
  );
}
