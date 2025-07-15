import type { Skill, SkillsData } from "@/lib/types";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { useFetchContent } from "@/hooks/useFetchContent";

export default function Skills() {
  const {
    data: skillsData,
    status,
    error,
  } = useFetchContent<SkillsData>("content/skills.json");

  return (
    <section className="container py-12">
      <SectionTitle>Skills</SectionTitle>

      <div className="flex gap-20">
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
    </section>
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
