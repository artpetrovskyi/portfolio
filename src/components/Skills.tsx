import type { Skill, SkillsData } from "@/lib/types";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { useFetchContent } from "@/hooks/useFetchContent";
import Section from "./Section";

export default function Skills() {
  const {
    data: skillsData,
    status,
    error,
  } = useFetchContent<SkillsData>("content/skills.json");

  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      <div className="flex gap-10 flex-col md:flex-row lg:gap-20 ">
        <div className="flex-1">
          <h3 className="mb-5">For development:</h3>

          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading skills: {error}</p>}
          {status === "success" && skillsData && (
            <Column items={skillsData.development.items} />
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-5">For design:</h3>

          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error loading skills: {error}</p>}
          {status === "success" && skillsData && (
            <Column items={skillsData.design.items} />
          )}
        </div>
      </div>
    </Section>
  );
}

const Column = ({ items }: { items: Skill[] }) => {
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
