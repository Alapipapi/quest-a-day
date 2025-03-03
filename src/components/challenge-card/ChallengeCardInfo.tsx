
interface ChallengeCardInfoProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
}

const ChallengeCardInfo = ({ 
  title, 
  description, 
  difficulty, 
  timeEstimate 
}: ChallengeCardInfoProps) => {
  return (
    <>
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full" style={{
            backgroundColor: 
              difficulty === "Easy" ? "#4FD1C5" :
              difficulty === "Medium" ? "#F6AD55" : "#FC8181"
          }} />
          {difficulty}
        </span>
        <span>{timeEstimate}</span>
      </div>
    </>
  );
};

export default ChallengeCardInfo;
