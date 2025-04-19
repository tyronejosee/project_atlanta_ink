import type { BookingValues } from "@/types";

import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";

export async function createBooking(booking: BookingValues) {
  if (USE_API) return await fetcher("/bookings", "POST", { data: booking });
  const bookings: BookingValues[] = [];
  const alreadyExists = bookings.some(
    (b) =>
      b.firstName + b.lastName === `${booking.firstName} ${booking.lastName}`,
  );
  if (!alreadyExists) {
    bookings.push(booking);
  }
  return { status: 201 };
}
