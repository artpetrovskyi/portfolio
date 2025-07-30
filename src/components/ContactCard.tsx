import type { ContactItem } from "@/lib/types";
import { Skeleton } from "./ui/skeleton";

export default function ContactCard({ icon, title, link, name }: ContactItem) {
  return (
    <a
      href={link}
      target="_blank"
      className="group card flex h-full flex-col items-center gap-5"
    >
      <img
        src={import.meta.env.VITE_API_URL + icon}
        alt={name}
        width={30}
        height={30}
        className="h-[30px] w-[30px] opacity-50 invert transition-opacity duration-200 group-hover:opacity-100 dark:invert-0"
        loading="lazy"
      />
      <span className="text-center font-light">{title}</span>
    </a>
  );
}

export const ContactCardSkeleton = () => {
  return (
    <Skeleton className="group card flex h-full flex-col items-center gap-5">
      <Skeleton className="h-[30px] w-[30px]" />
      <Skeleton className="h-[25px] w-[100px]" />
    </Skeleton>
  );
};
