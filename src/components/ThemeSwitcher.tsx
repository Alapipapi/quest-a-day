
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  // Return null or a loading state if the theme is not yet resolved
  if (!theme) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm border-gray-200 dark:bg-gray-800/80 dark:border-gray-700 shadow-lg"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
        <span className="sr-only">
          {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        </span>
      </Button>
    </motion.div>
  );
}
