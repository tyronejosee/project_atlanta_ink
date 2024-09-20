interface Props {
  title: string;
  subtitle?: string;
}

export const HeaderSection = ({
  title,
  subtitle = "Lorem ipsum dolor sit",
}: Props) => {
  return (
    <header className="space-y-4 mb-8 text-center">
      <span className="text-lg md:text-xl font-bold text-primary">
        {subtitle}
      </span>
      <h2 className="text-5xl md:text-6xl font-bold text-neutral-light">
        {title}
      </h2>
    </header>
  );
};
