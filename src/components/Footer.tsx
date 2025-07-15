import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="container py-12">
      <p className="text-muted-foreground flex-1 text-justify text-sm">
        © {currentYear} Artem Petrovskyi. All information on this site is
        protected by copyright. Copying, reproducing, or distributing content
        without prior written permission is prohibited. All trademarks and logos
        on this site are the property of their respective owners.
      </p>

      {/* <Button
        onClick={scrollToTop}
        variant="ghost"
        size="card"
        className="group h-full flex-1 sm:flex-none flex flex-col"
      >
        <ChevronUp className="size-5 opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
        Go to top
      </Button> */}
    </footer>
  );
}
