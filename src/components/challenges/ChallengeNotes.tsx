
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NotebookPen, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ChallengeNotesProps {
  challengeId: number;
  challengeTitle: string;
}

const ChallengeNotes = ({ challengeId, challengeTitle }: ChallengeNotesProps) => {
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedNotes = localStorage.getItem(`challenge-notes-${challengeId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [challengeId]);

  const saveNotes = () => {
    localStorage.setItem(`challenge-notes-${challengeId}`, notes);
    setIsEditing(false);
    toast({
      title: "Notes saved!",
      description: "Your challenge notes have been saved successfully.",
    });
  };

  const cancelEdit = () => {
    const savedNotes = localStorage.getItem(`challenge-notes-${challengeId}`);
    setNotes(savedNotes || "");
    setIsEditing(false);
  };

  return (
    <Card className="mt-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <NotebookPen className="h-5 w-5" />
            Challenge Notes
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <CardContent>
            {isEditing ? (
              <div className="space-y-3">
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your thoughts, strategies, or reflections about this challenge..."
                  className="min-h-[120px] resize-none"
                />
                <div className="flex gap-2">
                  <Button onClick={saveNotes} size="sm">
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button onClick={cancelEdit} variant="outline" size="sm">
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {notes ? (
                  <div className="bg-muted/30 p-3 rounded-md">
                    <p className="text-sm whitespace-pre-wrap">{notes}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm italic">
                    No notes yet. Click "Edit Notes" to add your thoughts!
                  </p>
                )}
                <Button onClick={() => setIsEditing(true)} size="sm" variant="outline">
                  <NotebookPen className="h-4 w-4 mr-1" />
                  Edit Notes
                </Button>
              </div>
            )}
          </CardContent>
        </motion.div>
      )}
    </Card>
  );
};

export default ChallengeNotes;
