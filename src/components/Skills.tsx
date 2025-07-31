import SectionTitle from "./SectionTitle";
import SkillCard, { SkillCardSkeleton } from "./SkillCard";
import Section from "./Section";
import type { FetchStatus } from "@/hooks/useFetchContent";
import type { Skills } from "@/lib/types";
import { useTranslation } from "react-i18next";
import { useDelayedSuccess } from "@/hooks/useDelayedSuccess";
import LoadingError from "./LoadingError";

interface SkillsProps {
  skills?: Skills;
  status: FetchStatus;
  error: string | null;
}

export default function Skills({ skills, status, error }: SkillsProps) {
  const { t } = useTranslation();
  const showContent = useDelayedSuccess(status);

  const developmentSkeletons = Array.from({ length: 12 }).map((_, index) => (
    <SkillCardSkeleton key={"developmentSkeletonCard" + index} />
  ));

  const designSkeletons = Array.from({ length: 6 }).map((_, index) => (
    <SkillCardSkeleton key={"designSkeletonCard" + index} />
  ));

  return (
    <Section id="skills">
      <SectionTitle>{t("skills.title")}</SectionTitle>

      {status === "error" ? (
        <LoadingError text={t("common.error")} error={error} />
      ) : (
        <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
          <div className="flex-1">
            <h3 className="mb-5">{t("skills.development")}</h3>

            {!showContent && (
              <Column>
                {developmentSkeletons.map((skeleton, index) => (
                  <li key={index}>{skeleton}</li>
                ))}
              </Column>
            )}
            {showContent && (
              <Column>
                {skills?.development.items.map((item) => (
                  <li key={item.title}>
                    <SkillCard {...item} />
                  </li>
                ))}
              </Column>
            )}
          </div>

          <div className="flex-1">
            <h3 className="mb-5">{t("skills.design")}</h3>

            {!showContent && (
              <Column>
                {designSkeletons.map((skeleton, index) => (
                  <li key={index}>{skeleton}</li>
                ))}
              </Column>
            )}
            {showContent && (
              <Column>
                {skills?.design.items.map((item) => (
                  <li key={item.title}>
                    <SkillCard {...item} />
                  </li>
                ))}
              </Column>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}

const Column = ({ children }: { children: React.ReactNode }) => (
  <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
    {children}
  </ul>
);
