
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ChallengeSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ChallengeSearch = ({ searchQuery, setSearchQuery }: ChallengeSearchProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search challenges..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/80 dark:bg-gray-800/80 dark:text-white backdrop-blur-sm"
      />
    </div>
  );
};

export default ChallengeSearch;
