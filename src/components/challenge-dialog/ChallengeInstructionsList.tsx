
interface ChallengeInstructionsListProps {
  instructions?: string[];
}

const ChallengeInstructionsList = ({ instructions }: ChallengeInstructionsListProps) => {
  if (!instructions || instructions.length === 0) return null;
  
  return (
    <div>
      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Instructions:</h4>
      <ul className="list-disc pl-5 space-y-2">
        {instructions.map((instruction, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-300">{instruction}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeInstructionsList;
