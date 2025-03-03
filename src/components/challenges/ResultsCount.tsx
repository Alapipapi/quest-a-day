
interface ResultsCountProps {
  count: number;
}

const ResultsCount = ({ count }: ResultsCountProps) => {
  return (
    <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
      Showing {count} {count === 1 ? 'challenge' : 'challenges'}
    </div>
  );
};

export default ResultsCount;
