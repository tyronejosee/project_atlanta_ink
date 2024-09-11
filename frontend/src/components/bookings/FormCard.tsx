import { ReactNode } from "react";

interface Props {
  title: string;
  text: string;
  icon: ReactNode;
}

export const FormCard = ({ title, text, icon }: Props) => {
  return (
    <div className="group flex bg-neutral-darkgrey p-4 hover:bg-primary">
      <div className="size-12 inline-flex justify-center items-center">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-lg font-bold text-primary group-hover:text-neutral-dark">{title}</p>
        <p className="text-neutral-light text-sm">{text}</p>
      </div>
    </div>
  )
}