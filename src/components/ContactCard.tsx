import type { ContactItem } from "@/lib/types";

export default function ContactCard({ icon, title, link, name }: ContactItem) {
  return (
    <a
      href={link}
      target="_blank"
      className="group card flex h-full flex-col items-center gap-5"
      title={name}
    >
      <div
        className="h-[30px] w-[30px] opacity-50 invert transition-opacity duration-200 group-hover:opacity-100 dark:invert-0"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span className="text-center text-sm font-light">{title}</span>
    </a>
  );
}
