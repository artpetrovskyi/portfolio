import Reveal from "./Reveal";

export default function SectionTitle({ children }: { children: string }) {
  return (
    <Reveal>
      <h2 className="mb-6 text-3xl md:mb-10">{children}</h2>
    </Reveal>
  );
}
