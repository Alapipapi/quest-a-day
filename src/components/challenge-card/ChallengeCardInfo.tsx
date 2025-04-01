
interface ChallengeCardInfoProps {
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  progress: number;
}

const ChallengeCardInfo = ({ 
  title, 
  description, 
  category, 
  progress 
}: ChallengeCardInfoProps) => {
  return (
    <>
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{progress > 0 ? `${progress}% Complete` : 'Not started'}</span>
      </div>
    </>
  );
};

export default ChallengeCardInfo;
