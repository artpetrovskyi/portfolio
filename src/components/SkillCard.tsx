import type { SkillItem } from "@/lib/types";

export default function SkillCard({ title, icon }: SkillItem) {
  return (
    <div className="card flex h-full flex-col items-center gap-5">
      <img
        src={import.meta.env.VITE_API_URL + icon}
        alt={title}
        width={30}
        height={30}
        className="h-[30px] w-[30px] opacity-50 invert dark:invert-0"
      />
      <span className="text-center font-light">{title}</span>
    </div>
  );
}
