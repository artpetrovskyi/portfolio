import ContactCard from "./ContactCard";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import type { FetchStatus } from "@/hooks/useFetchContent";
import type { Contacts } from "@/lib/types";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

interface HeroProps {
  contacts?: Contacts;
  status: FetchStatus;
  error: string | null;
}

export default function Hero({ contacts, status, error }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative container flex h-full flex-1 flex-col items-center justify-around gap-12 pb-24">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-3xl">
          {t("hero.title")} {t("common.name")}
        </h1>
        <p className="m-auto max-w-96 text-lg">{t("hero.description")}</p>
      </div>

      <ul className="flex flex-wrap gap-4">
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error loading contacts: {error}</p>}
        {status === "success" &&
          contacts?.items.map((contact) => (
            <li key={contact.link} className="flex-1">
              <ContactCard {...contact} />
            </li>
          ))}
      </ul>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-1/2">
        <Button variant="link" size="icon" className="group" asChild>
          <Link to="projects" smooth={true} duration={500}>
            <ChevronDown className="size-5 animate-bounce opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
