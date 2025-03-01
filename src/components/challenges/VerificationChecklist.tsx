
import VerificationItem from "./VerificationItem";

interface VerificationChecklistProps {
  verificationItems: string[];
  verificationStatus: boolean[];
  toggleVerificationItem: (index: number) => void;
}

const VerificationChecklist = ({ 
  verificationItems, 
  verificationStatus, 
  toggleVerificationItem 
}: VerificationChecklistProps) => {
  if (!verificationItems || verificationItems.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">Verification Checklist</h2>
      <div className="space-y-2">
        {verificationItems.map((item, index) => (
          <VerificationItem 
            key={index}
            index={index}
            item={item}
            isChecked={verificationStatus[index]}
            onClick={() => toggleVerificationItem(index)}
            delay={0.5 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default VerificationChecklist;
