import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { LocateFixedIcon, Mail, Phone, WholeWord } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { BookingForm, BookingCard, Hours } from "@/components";
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
  const { phone, firstTime, artist } = searchParams;

  return (
    <main className="max-w-screen-xl mx-auto mt-16 px-4 xl:px-0">
      <div className="grid grid-cols-2 gap-10">
        <section className="space-y-8">
          <header>
            <span className="text-primary">Contact Us</span>
            <h1 className="text-7xl">Get in Touch</h1>
            <p className="text-neutral-gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit.
            </p>
          </header>
          <div className="grid grid-cols-2 gap-4">
            <BookingCard
              title="Phone"
              text="+123123123"
              icon={<Phone className="size-10" />}
            />
            <BookingCard
              title="Website"
              text="atlantaink.com"
              icon={<WholeWord />}
            />
            <BookingCard
              title="Email"
              text="support@atlantaink.com"
              icon={<Mail />}
            />
            <BookingCard
              title="Address"
              text="Example"
              icon={<LocateFixedIcon />}
            />
          </div>
          <Hours />
        </section>
        <BookingForm
          artists={artists}
          initialPhone={phone ? decodeURIComponent(phone as string) : ""}
          initialfirstTime={firstTime}
          initialArtist={artist}
        />
      </div>
      <ToastContainer />
    </main>
  );
}
