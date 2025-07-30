import { Link } from "react-scroll";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ModeToggle } from "./theme/mode-toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "motion/react";

const NAV_LINKS = [
  {
    anchor: "projects",
    title: {
      en: "Projects",
      ru: "Проекты",
    },
  },
  {
    anchor: "about",
    title: {
      en: "About me",
      ru: "Обо мне",
    },
  },
  {
    anchor: "skills",
    title: {
      en: "Skills",
      ru: "Навыки",
    },
  },
] as const;

export default function Header() {
  const { currentLang } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      <div className="container flex flex-wrap items-center gap-5 py-5 min-[600px]:flex-nowrap sm:py-12">
        <div className="flex-[1_0]">
          <LanguageSwitcher />
        </div>

        <nav className="order-3 flex flex-[1_1_100%] justify-center pt-2 min-[600px]:order-none min-[600px]:flex-[0_0_auto] min-[600px]:pt-0">
          <ul className="flex gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.anchor} className="text-center">
                <Link
                  to={link.anchor}
                  // offset={-100}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-lg opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  {link.title[currentLang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-[1_0] justify-end">
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
}
