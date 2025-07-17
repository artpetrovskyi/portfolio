import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import Section from "./Section";
import type { FetchStatus } from "@/hooks/useFetchContent";
import type { SkillCategory, Skills } from "@/lib/types";

interface SkillsProps {
  skills?: Skills;
  status: FetchStatus;
  error: string | null;
}

export default function Skills({ skills, status, error }: SkillsProps) {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
        <div className="flex-1">
          <h3 className="mb-5">For development:</h3>

          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading skills: {error}</p>}
          {status === "success" && skills && (
            <Column items={skills.development.items} />
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-5">For design:</h3>

          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading skills: {error}</p>}
          {status === "success" && skills && (
            <Column items={skills.design.items} />
          )}
        </div>
      </div>
    </Section>
  );
}

const Column = ({ items }: SkillCategory) => {
  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
        {items.map((item) => (
          <li key={item.title}>
            <SkillCard {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
