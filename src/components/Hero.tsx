import ContactCard from "./ContactCard";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import type { FetchStatus } from "@/hooks/useFetchContent";
import type { Contacts } from "@/lib/types";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface HeroProps {
  contacts?: Contacts;
  status: FetchStatus;
  error: string | null;
}

export default function Hero({ contacts, status, error }: HeroProps) {
  const { t } = useTranslation();
  const [showCards, setShowCards] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      setShowLoader(true);
      setShowCards(false);
      setShowError(false);
      setAnimationFinished(false);
    }

    if (status === "error") {
      setShowError(true);
      setShowLoader(false);
      setShowCards(false);
    }
  }, [status]);

  useEffect(() => {
    if (status === "success" && animationFinished) {
      setShowLoader(false);
      setShowCards(true);
    }
  }, [status, animationFinished]);

  const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative container flex h-full flex-1 flex-col items-center justify-evenly gap-12 pt-12 pb-24">
      <div className="max-w-2xl text-center">
        <AnimatedText
          text={t("hero.title") + " " + t("common.name")}
          tag="h1"
          className="mb-4 text-3xl md:mb-8"
        />
        <AnimatedText
          text={t("hero.description")}
          tag="p"
          delay={0.8}
          className="m-auto max-w-md text-lg"
        />
      </div>

      <div className="flex min-h-[26rem] flex-col justify-center min-[500px]:min-h-[17rem] md:min-h-[8rem]">
        <AnimatePresence mode="wait">
          {showLoader && (
            <motion.div key="contactCardsLoader" exit={{ opacity: 0, y: -50 }}>
              <Loader
                duration={2}
                onComplete={() => {
                  setAnimationFinished(true);
                }}
              />
            </motion.div>
          )}

          {showCards && (
            <motion.ul
              key="contactCards"
              initial="hidden"
              animate="visible"
              variants={listVariants}
              className="flex flex-wrap gap-4"
            >
              {contacts?.items.map((contact) => (
                <motion.li
                  key={contact.link}
                  className="flex-1"
                  variants={itemVariants}
                >
                  <ContactCard {...contact} />
                </motion.li>
              ))}
            </motion.ul>
          )}

          {showError && (
            <motion.div
              key="contactCardsError"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-red-500"
            >
              <p>{t("common.error")}</p>
              {error && <p>{error}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2"
      >
        <Button variant="link" size="icon" className="group" asChild>
          <Link to="projects" smooth={true} duration={500}>
            <ChevronDown className="size-5 animate-bounce opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
