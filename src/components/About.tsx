import type { FetchStatus } from "@/hooks/useFetchContent";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import type { About, Contacts } from "@/lib/types";
import Markdown from "react-markdown";

interface AboutProps {
  about?: About;
  contacts?: Contacts;
  status: FetchStatus;
  error: string | null;
}

export default function About({ about, contacts, status, error }: AboutProps) {
  return (
    <Section>
      <SectionTitle>About me</SectionTitle>

      <div className="card mb-5 flex flex-col gap-10 !p-6 md:flex-row">
        <div className="relative w-full flex-[0_0_35%] self-center overflow-hidden rounded-xl pb-[120%] min-[500px]:min-h-96 min-[500px]:w-80 min-[500px]:pb-[45%] md:w-auto md:self-auto md:rounded-r-none">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover align-top"
            src={import.meta.env.VITE_API_URL + about?.photo}
            alt="Artem Petrovskyi"
          />
        </div>

        <div>
          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading about: {error}</p>}
          {status === "success" && about && (
            <div className="flex h-full flex-col gap-10">
              <div className="prose dark:prose-invert prose-neutral max-w-none flex-1">
                <Markdown>{about.body.en}</Markdown>
              </div>
              <ul className="space-y-4">
                {contacts?.items.map((contact) => (
                  <li key={contact.link}>
                    {contact.name}:{" "}
                    <a
                      href={contact.link}
                      target="_blank"
                      className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                    >
                      {contact.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
