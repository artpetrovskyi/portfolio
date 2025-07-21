import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const icons = [
    { name: "light", Icon: Sun },
    { name: "dark", Icon: Moon },
  ];

  return (
    <Button
      variant="secondary"
      className="flex items-center gap-3"
      onClick={toggleTheme}
    >
      {icons.map(({ name, Icon }) => (
        <Icon
          key={name}
          className={cn(
            "size-5 opacity-30 transition-opacity duration-200",
            theme === name && "opacity-100",
          )}
        />
      ))}
    </Button>
  );
}
