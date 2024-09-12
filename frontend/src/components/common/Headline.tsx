interface Props {
  title: string;
  className?: string;
}

export const Headline = ({ title, className }: Props) => {
  return (
    <h2 className={`text-3xl font-bold ${className}`}>
      {title}
    </h2>
  )
}
