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
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
  const {
    data: projectsData,
    status,
    error,
  } = useFetchContent<ProjectsData>("content/projects.json");

  const { t } = useTranslation();

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
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4"
            >
              <CarouselPrevious variant="secondary" className="bg-gradient" />
              <CarouselNext variant="secondary" className="bg-gradient" />
            </motion.div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={status}
            initial={{ opacity: 0, height: 662 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 662 }}
            transition={{ duration: 0.6 }}
          >
            {status === "error" ? (
              <div className="flex min-h-28 flex-col justify-center text-center text-sm text-red-500">
                <p>{t("common.error")}</p>
                {error && <p>{error}</p>}
              </div>
            ) : (
              <CarouselContent className="-ml-4">
                {status === "loading" &&
                  Array.from({ length: 5 }, (_, index) => (
                    <CarouselItem
                      key={`ProjectCardSkeleton-${index}`}
                      className="basis-[93%] pl-4 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
                    >
                      <ProjectCardSkeleton />
                    </CarouselItem>
                  ))}

                {status === "success" &&
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
          </motion.div>
        </AnimatePresence>
      </Carousel>
    </Section>
  );
}
