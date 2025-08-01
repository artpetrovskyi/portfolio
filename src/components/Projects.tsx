import { useFetchContent } from "@/hooks/useFetchContent";
import SectionTitle from "./SectionTitle";
import type { ProjectsData } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section from "./Section";
import ProjectCard, { ProjectCardSkeleton } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { useDelayedSuccess } from "@/hooks/useDelayedSuccess";
import LoadingError from "./LoadingError";
import Reveal from "./Reveal";

export default function Projects() {
  const {
    data: projectsData,
    status,
    error,
  } = useFetchContent<ProjectsData>("content/projects.json");

  const { t } = useTranslation();
  const showContent = useDelayedSuccess(status);

  return (
    <Section id="projects">
      <Carousel
        opts={{
          align: "start",
        }}
        className="[&_.overflow-hidden]:!overflow-visible"
      >
        {/* Top */}
        <div className="flex justify-between gap-4">
          <SectionTitle>{t("projects.title")}</SectionTitle>
          <Reveal>
            {status !== "error" && (
              <div className="flex gap-4">
                <CarouselPrevious variant="secondary" className="bg-gradient" />
                <CarouselNext variant="secondary" className="bg-gradient" />
              </div>
            )}
          </Reveal>
        </div>

        <Reveal>
          {status === "error" ? (
            <LoadingError text={t("common.error")} error={error} />
          ) : (
            <CarouselContent className="-ml-4">
              {!showContent &&
                Array.from({ length: 5 }, (_, index) => (
                  <CarouselItem
                    key={`ProjectCardSkeleton-${index}`}
                    className="basis-[93%] pl-4 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
                  >
                    <ProjectCardSkeleton />
                  </CarouselItem>
                ))}

              {showContent &&
                projectsData?.items.map((project) => (
                  <CarouselItem
                    key={project.link}
                    className="basis-[93%] pl-4 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
                  >
                    <ProjectCard {...project} />
                  </CarouselItem>
                ))}
            </CarouselContent>
          )}
        </Reveal>
      </Carousel>
    </Section>
  );
}
