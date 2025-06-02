import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<string | null>(null);

  // Ensure the theme is resolved before rendering
  useEffect(() => {
    const storedTheme = localStorage.getItem("vite-ui-theme");
    if (storedTheme) {
      setResolvedTheme(storedTheme);
    } else if (theme) {
      setResolvedTheme(theme);
    }
  }, [theme]);

  if (!resolvedTheme) {
    return null; // Prevent rendering until the theme is resolved
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
        onClick={() => {
          const newTheme = resolvedTheme === "dark" ? "light" : "dark";
          setTheme(newTheme);
          setResolvedTheme(newTheme); // Update local state immediately
        }}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
        <span className="sr-only">
          {resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        </span>
      </Button>
    </motion.div>
  );
}
