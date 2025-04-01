
interface ChallengeInstructionsListProps {
  instructions?: string[];
  examples?: string[];
}

const ChallengeInstructionsList = ({ instructions, examples }: ChallengeInstructionsListProps) => {
  return (
    <div className="space-y-4">
      {instructions && instructions.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Instructions:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {instructions.map((instruction, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300">{instruction}</li>
            ))}
          </ul>
        </div>
      )}
      
      {examples && examples.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Example Exercises:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {examples.map((example, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300">{example}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChallengeInstructionsList;
