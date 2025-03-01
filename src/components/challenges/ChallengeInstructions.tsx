
import InstructionItem from "./InstructionItem";

interface ChallengeInstructionsProps {
  instructions: string[];
}

const ChallengeInstructions = ({ instructions }: ChallengeInstructionsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">Instructions</h2>
      <div className="space-y-2">
        {instructions.map((instruction, index) => (
          <InstructionItem 
            key={index}
            index={index} 
            instruction={instruction}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeInstructions;
