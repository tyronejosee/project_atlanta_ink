import { Metadata } from "next";
import { BookingForm, HeaderPage, ScheduleList } from "@/components";
import { IBookingQueryParams } from "@/interfaces";
import { getArtists } from "@/lib/api";

interface Props {
  searchParams: IBookingQueryParams;
}

export const metadata: Metadata = {
  title: "Products - Atlanta Ink",
  description:
    "Book an appointment at our tattoo studio. Get in touch with us easily by phone, email, or visit our website.",
  keywords:
    "book appointment, tattoo studio, contact, phone, email, hours, atlanta",
};

export default async function BookingsPage({ searchParams }: Props) {
  const artists = await getArtists();
  const { firstName, firstTime, artist } = searchParams;

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
