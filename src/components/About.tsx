import type { FetchStatus } from "@/hooks/useFetchContent";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import type { About, AchievementItem, Contacts } from "@/lib/types";
import Markdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import AchivementCard, { AchievementCardSkeleton } from "./AchivementCard";
import LoadingError from "./LoadingError";
import { useDelayedSuccess } from "@/hooks/useDelayedSuccess";
import { Skeleton } from "./ui/skeleton";
import Reveal from "./Reveal";

interface AboutProps {
  about?: About;
  contacts?: Contacts;
  achievements?: AchievementItem[];
  status: FetchStatus;
  error: string | null;
}

export default function About({
  about,
  contacts,
  achievements,
  status,
  error,
}: AboutProps) {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const showContent = useDelayedSuccess(status);

  return (
    <Section id="about">
      <SectionTitle>{t("about.title")}</SectionTitle>

      {/* ABOUT SECTION */}
      {status === "error" ? (
        <LoadingError text={t("common.error")} error={error} />
      ) : (
        <>
          {!showContent && (
            <Reveal>
              <AboutSkeleton />{" "}
            </Reveal>
          )}

          {showContent && (
            <Reveal>
              <div className="card mb-5 flex flex-col gap-10 !p-6 md:mb-10 md:flex-row">
                <div className="ibg w-full flex-[0_0_35%] self-center overflow-hidden rounded-xl pb-[120%] min-[500px]:min-h-96 min-[500px]:w-80 min-[500px]:pb-[45%] md:w-auto md:self-auto md:rounded-r-none">
                  <img
                    src={import.meta.env.VITE_API_URL + about?.photo}
                    alt="Artem Petrovskyi"
                    width={420}
                    height={540}
                    loading="lazy"
                    className="object-top"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <div className="prose dark:prose-invert prose-neutral max-w-none flex-1">
                    <Markdown key={currentLang}>
                      {about?.body[currentLang]}
                    </Markdown>
                  </div>
                  <ul className="space-y-4">
                    {contacts?.items.map((contact) => (
                      <li key={contact.link}>
                        {contact.name}:{" "}
                        <a
                          href={contact.link}
                          target="_blank"
                          className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                        >
                          {contact.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          )}

          {/* Achievement cards */}
          {!showContent && (
            <Reveal>
              <ul className="space-y-5">
                {Array.from({ length: 1 }).map((_, i) => (
                  <li key={`AchievementCardSkeleton-${i}`}>
                    <AchievementCardSkeleton />
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {showContent && (
            <Reveal>
              <ul className="space-y-5">
                {achievements?.map((achievement) => (
                  <li key={achievement.link}>
                    <AchivementCard {...achievement} />
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </>
      )}
    </Section>
  );
}

const AboutSkeleton = () => {
  return (
    <Skeleton className="card mb-5 flex flex-col gap-10 !p-6 md:mb-10 md:flex-row">
      <Skeleton className="w-full flex-[0_0_35%] self-center rounded-xl pb-[120%] min-[500px]:min-h-96 min-[500px]:w-80 min-[500px]:pb-[45%] md:w-auto md:self-auto md:rounded-r-none"></Skeleton>
      <Skeleton className="flex min-h-[28rem] w-full flex-col gap-10"></Skeleton>
    </Skeleton>
  );
};
