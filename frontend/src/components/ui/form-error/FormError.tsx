interface Props {
  children?: React.ReactNode;
}

export const FormError = ({ children }: Props) => {
  return <span className="text-xs text-primary">{children}</span>;
};
