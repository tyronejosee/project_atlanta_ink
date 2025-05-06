"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

type Props = {
  artistID: string;
};

export const BookingButton = ({ artistID }: Props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/bookings?artist=${artistID}`);
  };

  return (
    <Button onPress={handleButtonClick} color="primary" radius="none">
      Book artist
    </Button>
  );
};
