interface Props {
  title: string;
}

export const HeaderPage = ({ title }: Props) => {
  return (
    <header className="py-4">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-light">
        {title}
      </h1>
    </header>
  );
};
