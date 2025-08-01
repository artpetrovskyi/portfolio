import Markdown from "react-markdown";
import LinkBtn from "./LinkBtn";
import { useLanguage } from "@/hooks/useLanguage";
import type { AchievementItem } from "@/lib/types";
import { Skeleton } from "./ui/skeleton";

export default function AchivementCard({
  body,
  link,
  linkTitle,
}: AchievementItem) {
  const { currentLang } = useLanguage();

  return (
    <div className="card gap-10 !p-6">
      <div className="prose dark:prose-invert prose-neutral prose-a:no-underline mb-5 max-w-none">
        <Markdown key={currentLang}>{body[currentLang]}</Markdown>
      </div>

      <div className="flex justify-end">
        <LinkBtn href={link} text={linkTitle[currentLang]} />
      </div>
    </div>
  );
}

export const AchievementCardSkeleton = () => {
  return (
    <Skeleton className="card gap-10 !p-6">
      <Skeleton className="mb-5 h-7"></Skeleton>
      <div className="flex justify-end">
        <Skeleton className="h-5 w-32"></Skeleton>
      </div>
    </Skeleton>
  );
};
