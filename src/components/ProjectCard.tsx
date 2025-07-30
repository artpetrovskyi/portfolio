import Markdown from "react-markdown";
import LinkBtn from "./LinkBtn";
import type { ProjectItem } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { Skeleton } from "./ui/skeleton";

export default function ProjectCard({ link, image, title, body }: ProjectItem) {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  return (
    <div className="card flex h-full flex-col select-none">
      <a
        href={link}
        target="_blank"
        className="ibg mb-5 pb-[60%] transition-opacity duration-200 hover:opacity-90"
      >
        <img
          src={import.meta.env.VITE_API_URL + image}
          alt={title[currentLang]}
          className="object-contain"
          loading="lazy"
          width={357}
          height={214}
        />
      </a>

      <a
        href={link}
        target="_blank"
        className="mb-4 transition-opacity duration-200 hover:opacity-80"
      >
        <h3>{title[currentLang]}</h3>
      </a>

      <div className="prose dark:prose-invert prose-sm prose-neutral prose-li:m-0 prose-li:p-0 mb-5 max-w-none flex-1">
        <Markdown>{body[currentLang]}</Markdown>
      </div>

      <div className="text-center">
        <LinkBtn href={link} text={t("projects.view")} />
      </div>
    </div>
  );
}

export const ProjectCardSkeleton = () => {
  return (
    <Skeleton className="card flex h-full flex-col">
      <Skeleton className="ibg mb-5 pb-[60%]"></Skeleton>

      <Skeleton className="mb-4 h-12"></Skeleton>

      <Skeleton className="mb-5 h-[17rem]"></Skeleton>

      <div>
        <Skeleton className="mx-auto h-5 w-24"></Skeleton>
      </div>
    </Skeleton>
  );
};
