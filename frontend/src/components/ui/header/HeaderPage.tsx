interface Props {
  title: string;
  subtitle?: string;
}

export const HeaderPage = ({ title, subtitle }: Props) => {
  return (
    <header className="py-4 space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-light">
        {title}
      </h1>
      <p className="text-neutral-gray">{subtitle}</p>
    </header>
  );
};
