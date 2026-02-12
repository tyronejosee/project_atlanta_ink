import type { Metadata } from "next";
import type { BookingQueryParams } from "@/types";

import { getArtists } from "@/lib/api/artists";
import { BookingForm, HeaderPage, ScheduleList } from "@/components";

export const metadata: Metadata = {
  title: "Bookings - Atlanta Ink Tattoo Studio",
  description:
    "Book an appointment at our tattoo studio. Get in touch with us easily by phone, email, or visit our website.",
  keywords:
    "book appointment, tattoo studio, contact, phone, email, hours, atlanta",
};

type Props = {
  searchParams: Promise<BookingQueryParams>;
};

export default async function BookingsPage({ searchParams }: Props) {
  const { firstName, firstTime, artist } = await searchParams;
  const artists = await getArtists();

  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <HeaderPage
            title={firstName ? `Hi, ${firstName}!` : "Bookings"}
            subtitle="Schedule your appointment easily and secure your spot today!"
          />
          <BookingForm
            artists={artists}
            initialFirstName={firstName}
            initialFirstTime={firstTime}
            initialArtist={artist}
          />
        </section>
        <ScheduleList />
      </div>
    </main>
  );
}
