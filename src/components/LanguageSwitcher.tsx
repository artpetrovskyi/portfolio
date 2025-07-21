"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { languageNames } from "@/lib/i18n/config";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher() {
  const { currentLang, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="secondary"
      className="relative h-10 w-24 overflow-hidden px-6"
      onClick={toggleLanguage}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentLang}
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-150%", opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute w-full text-center"
        >
          {languageNames[currentLang]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
