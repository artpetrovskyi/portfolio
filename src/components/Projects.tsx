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
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

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
          <div className="flex gap-4">
            <CarouselPrevious variant="secondary" className="bg-gradient" />
            <CarouselNext variant="secondary" className="bg-gradient" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading projects: {error}</p>}
          {status === "success" &&
            projectsData &&
            projectsData.items.map((project) => (
              <CarouselItem
                key={project.link}
                className="basis-[93%] pl-4 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
              >
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
