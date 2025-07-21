import Markdown from "react-markdown";
import LinkBtn from "./LinkBtn";
import type { ProjectItem } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ link, image, title, body }: ProjectItem) {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  return (
    <div className="card flex h-full flex-col select-none">
      <a
        href={link}
        target="_blank"
        className="mb-5 transition-opacity duration-200 hover:opacity-90"
      >
        <img
          src={import.meta.env.VITE_API_URL + image}
          alt={title[currentLang]}
          className="h-auto w-full object-contain"
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
