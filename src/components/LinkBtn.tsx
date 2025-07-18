import { ChevronRight } from "lucide-react";

type LinkBtnProps = {
  href: string;
  text: string;
};

export default function LinkBtn({ href, text }: LinkBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group inline-flex items-center gap-0.5 text-sm text-nowrap transition-opacity duration-200 hover:opacity-80"
    >
      {text}
      <ChevronRight className="size-5 transition-[transform_opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
    </a>
  );
}
