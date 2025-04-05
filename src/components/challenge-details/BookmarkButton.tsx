
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, StarOff } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface BookmarkButtonProps {
  challengeId: number | undefined;
  title: string | undefined;
}

const BookmarkButton = ({ challengeId, title }: BookmarkButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (challengeId) {
      const favorites = JSON.parse(localStorage.getItem("favoriteChallenges") || "[]");
      setIsFavorite(favorites.includes(challengeId));
    }
  }, [challengeId]);

  const toggleFavorite = () => {
    if (!challengeId) return;
    
    const favorites = JSON.parse(localStorage.getItem("favoriteChallenges") || "[]");
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((id: number) => id !== challengeId);
      toast({
        title: "Removed from favorites",
        description: title ? `"${title}" removed from your favorites` : "Challenge removed from your favorites",
        duration: 3000,
      });
    } else {
      newFavorites = [...favorites, challengeId];
      toast({
        title: "Added to favorites",
        description: title ? `"${title}" added to your favorites` : "Challenge added to your favorites",
        duration: 3000,
      });
    }
    
    localStorage.setItem("favoriteChallenges", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    
    // Dispatch event for other components to update
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <Button variant="outline" size="sm" onClick={toggleFavorite}>
      {isFavorite ? (
        <>
          <StarOff className="h-4 w-4 mr-1" />
          Unfavorite
        </>
      ) : (
        <>
          <Star className="h-4 w-4 mr-1" />
          Favorite
        </>
      )}
    </Button>
  );
};

export default BookmarkButton;
