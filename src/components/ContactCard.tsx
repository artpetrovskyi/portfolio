import type { ContactItem } from "@/lib/types";

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
      />
      <span className="text-center font-light">{title}</span>
    </a>
  );
}
