
interface ChallengeCardInfoProps {
  title: string;
  description: string;
  category: "coding" | "fitness" | "creativity" | "problem-solving";
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
  progress: number;
}

const ChallengeCardInfo = ({ 
  title, 
  description, 
  category, 
  difficulty,
  timeEstimate,
  progress 
}: ChallengeCardInfoProps) => {
  return (
    <>
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      
      <div className="flex items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${
            difficulty === "Easy" 
              ? "bg-green-500" 
              : difficulty === "Medium" 
              ? "bg-yellow-500" 
              : "bg-red-500"
          }`}></span>
          <span>{difficulty}</span>
        </div>
        <span>{timeEstimate}</span>
        {progress > 0 && <span>{progress}% Complete</span>}
      </div>
    </>
  );
};

export default ChallengeCardInfo;
