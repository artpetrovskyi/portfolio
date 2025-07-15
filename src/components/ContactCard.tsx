import type { Contact } from "@/lib/types";
import { Button } from "./ui/button";

export default function ContactCard({ icon, title, link, name }: Contact) {
  return (
    <a href={link} className="group card flex flex-col items-center gap-5">
      <img
        src={import.meta.env.VITE_API_URL + icon}
        alt={name}
        width={30}
        height={30}
        className="h-[30px] w-[30px] opacity-50 invert transition-opacity duration-200 group-hover:opacity-100 dark:invert-0"
      />
      <span className="font-light">{title}</span>
    </a>
    // <Button variant="gradient" size="card" asChild className="group">
    //   <a href={link} target="_blank" className="flex items-center gap-3">
    //     <img
    //       src={import.meta.env.VITE_API_URL + icon}
    //       alt={name}
    //       width={30}
    //       height={30}
    //       className="h-[30px] w-[30px] opacity-50 invert transition-opacity duration-200 group-hover:opacity-100 dark:invert-0"
    //     />
    //     {title}
    //   </a>
    // </Button>
  );
}
