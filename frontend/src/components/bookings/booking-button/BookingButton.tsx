"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

interface Props {
  artistID: string;
}

export const BookingButton = ({ artistID }: Props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/bookings?artist=${artistID}`);
  };

  return (
    <Button onClick={handleButtonClick} color="primary">
      Book artist
    </Button>
  );
};
