import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className="relative overflow-hidden px-6"
      onClick={toggleTheme}
    >
      <Sun
        className={`absolute size-5 transition-transform duration-500 ${theme === "dark" ? "translate-y-[150%]" : ""}`}
      />
      <Moon
        className={`absolute size-5 transition-transform duration-500 ${theme === "light" ? "translate-y-[-150%]" : ""}`}
      />
    </Button>
  );
}
