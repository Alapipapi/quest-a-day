
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-20 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 dark:to-transparent" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary dark:bg-primary/20">
            Daily Challenge Hub
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium text-secondary-foreground">
            v1.3.1
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Challenge Yourself
          <span className="block text-primary">Every Single Day</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Explore new challenges daily across coding, fitness, creativity, and problem-solving. 
          Push your boundaries and grow with every challenge you complete.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Track your progress</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Access helpful resources</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">70+ challenges and growing</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
