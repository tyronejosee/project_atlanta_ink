interface Props {
  title: string;
  subtitle?: string;
  headingLevel?: "h1" | "h2" | "h3";
}

export const HeaderPage = ({ title, subtitle, headingLevel = "h1" }: Props) => {
  const HeadingTag = headingLevel;

  return (
    <header className="py-4 space-y-2">
      <HeadingTag className="text-3xl md:text-4xl font-bold text-neutral-light">
        {title}
      </HeadingTag>
      <p className="text-neutral-gray">{subtitle}</p>
    </header>
  );
};
