import type { SkillItem } from "@/lib/types";
import { Skeleton } from "./ui/skeleton";
import Reveal from "./Reveal";

export default function SkillCard({ title, icon }: SkillItem) {
  return (
    <Reveal>
      <div className="card flex h-full flex-col items-center gap-5">
        <div
          className="h-[30px] w-[30px] opacity-50 invert dark:invert-0"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <span className="text-center text-sm font-light whitespace-nowrap">
          {title}
        </span>
      </div>
    </Reveal>
  );
}

export const SkillCardSkeleton = () => {
  return (
    <Reveal>
      <Skeleton className="card flex h-full flex-col items-center gap-5">
        <Skeleton className="h-[1.875rem] w-[1.875rem]" />
        <Skeleton className="h-5 w-[5.625rem]" />
      </Skeleton>
    </Reveal>
  );
};
