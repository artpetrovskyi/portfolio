import type { Skill } from "@/lib/types";

export default function SkillCard({ title, icon }: Skill) {
  return (
    <div className="card flex flex-col items-center gap-5 h-full">
      <img
        src={import.meta.env.VITE_API_URL + icon}
        alt={title}
        width={30}
        height={30}
        className="h-[30px] w-[30px] opacity-50 invert dark:invert-0"
      />
      <span className="font-light text-center">{title}</span>
    </div>
  );
}
