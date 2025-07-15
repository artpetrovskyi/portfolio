import type { Skill } from "@/lib/types";

export default function SkillCard({ title, icon }: Skill) {
  return (
    <a className="card flex flex-col items-center gap-5">
      <img
        src={import.meta.env.VITE_API_URL + icon}
        alt={title}
        width={30}
        height={30}
        className="h-[30px] w-[30px] opacity-50 invert dark:invert-0"
      />
      <span className="font-light">{title}</span>
    </a>
  );
}
