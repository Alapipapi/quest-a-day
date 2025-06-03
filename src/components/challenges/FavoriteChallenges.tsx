
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Challenge, CHALLENGES } from "@/data/challengeData";
import ChallengeCard from "@/components/ChallengeCard";

const FavoriteChallenges = () => {
  const [favoriteChallenges, setFavoriteChallenges] = useState<Challenge[]>([]);

  const updateFavorites = () => {
    const favoriteIds = JSON.parse(localStorage.getItem("favoriteChallenges") || "[]");
    if (favoriteIds.length === 0) {
      setFavoriteChallenges([]);
      return;
    }
    
    const favorites = CHALLENGES.filter(challenge => favoriteIds.includes(challenge.id));
    setFavoriteChallenges(favorites);
  };

  useEffect(() => {
    updateFavorites();
    
    const handleFavoritesUpdate = () => {
      updateFavorites();
    };
    
    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  if (favoriteChallenges.length === 0) {
    return null;
  }

  return (
    <div className="mb-12" data-section="favorites">
      <div className="flex items-center gap-2 mb-4">
        <Star className="text-yellow-500 h-5 w-5" />
        <h2 className="text-xl font-bold">Favorite Challenges</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteChallenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChallengeCard 
              id={challenge.id}
              title={challenge.title}
              description={challenge.description}
              category={challenge.category}
              difficulty={challenge.difficulty}
              timeEstimate={challenge.timeEstimate}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteChallenges;
