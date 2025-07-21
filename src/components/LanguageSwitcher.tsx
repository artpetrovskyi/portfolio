import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { locales } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { currentLang, toggleLanguage } = useLanguage();
  const languages = locales;

  return (
    <Button variant="secondary" onClick={toggleLanguage} className="flex gap-2 items-center">
      {languages.map((lang) => (
        <span
          key={lang}
          className={cn(
            "uppercase opacity-50 transition-opacity duration-200",
            lang === currentLang && "opacity-100",
          )}
        >
          {lang}
        </span>
      ))}
    </Button>
  );
}
