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
import Markdown from "react-markdown";
import LinkBtn from "./LinkBtn";

export default function Projects() {
  const {
    data: projectsData,
    status,
    error,
  } = useFetchContent<ProjectsData>("content/projects.json");

  return (
    <Section>
      <Carousel
        opts={{
          align: "start",
        }}
        className="[&_.overflow-hidden]:!overflow-visible"
      >
        {/* Top */}
        <div className="flex justify-between gap-4">
          <SectionTitle>Projects</SectionTitle>
          <div className="flex gap-4">
            <CarouselPrevious
              variant="secondary"
              className="bg-gradient cursor-pointer px-6"
            />
            <CarouselNext
              variant="secondary"
              className="bg-gradient cursor-pointer px-6"
            />
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
                <div className="card flex h-full flex-col select-none">
                  <a
                    href={project.link}
                    target="_blank"
                    className="mb-5 transition-opacity duration-200 hover:opacity-90"
                  >
                    <img
                      src={import.meta.env.VITE_API_URL + project.image}
                      alt={project.title.en}
                      className="h-auto w-full object-contain"
                    />
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    className="mb-4 transition-opacity duration-200 hover:opacity-80"
                  >
                    <h3>{project.title.en}</h3>
                  </a>

                  <div className="prose dark:prose-invert prose-sm prose-neutral prose-li:m-0 prose-li:p-0 mb-5 max-w-none flex-1">
                    <Markdown>{project.body.en}</Markdown>
                  </div>

                  <div className="text-center">
                    <LinkBtn href={project.link} text="View project" />
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
