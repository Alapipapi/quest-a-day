
interface ChallengeVerificationListProps {
  verification?: string[];
}

const ChallengeVerificationList = ({ verification }: ChallengeVerificationListProps) => {
  if (!verification || verification.length === 0) return null;
  
  return (
    <div>
      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Verification Checklist:</h4>
      <ul className="list-disc pl-5 space-y-2">
        {verification.map((item, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeVerificationList;
