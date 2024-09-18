interface Props {
  name: string;
  price: number;
}

export const PriceItem = ({ name, price }: Props) => {
  return (
    <li className="group flex justify-between items-center py-4 px-4">
      <span className="group-hover:font-bold group-hover:text-primary">
        {name}
      </span>
      <span className="group-hover:font-bold group-hover:text-primary">
        ${price}
      </span>
    </li>
  );
};
