import ContactCard from "./ContactCard";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import type { FetchStatus } from "@/hooks/useFetchContent";
import type { Contacts } from "@/lib/types";

interface HeroProps {
  contacts?: Contacts;
  status: FetchStatus;
  error: string | null;
}

export default function Hero({ contacts, status, error }: HeroProps) {
  return (
    <section className="relative container flex h-full flex-1 flex-col items-center justify-around gap-12 pb-24">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-3xl">Hello! My name is Artem Petrovskyi</h1>
        <p className="m-auto max-w-96 text-lg">
          I do website design, Front-end and web application development
        </p>
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
        <Button variant="ghost" size="icon" className="group">
          <ChevronDown className="size-5 animate-bounce opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
        </Button>
      </div>
    </section>
  );
}
