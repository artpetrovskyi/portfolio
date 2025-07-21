interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="container py-8 md:py-12">
      {children}
    </section>
  );
}
