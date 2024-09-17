import { ToastContainer } from "react-toastify";
import { LocateFixedIcon, Mail, Phone, WholeWord } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { BookingForm, BookingCard, Hours } from "@/components";

export default function BookingsPage() {
  return (
    <section className="max-w-screen-xl mx-auto mt-16">
      <div className="grid grid-cols-2 gap-4 p-4">
        <section className="space-y-8">
          <header>
            <span className="text-primary">Contact Us</span>
            <h1 className="text-7xl">Get in Touch</h1>
            <p className="text-neutral-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit.</p>
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
        <BookingForm />
      </div>
      <ToastContainer />
    </section >
  );
};
