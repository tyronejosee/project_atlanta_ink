import { Hours } from "@/components";

export default function ReservationPage() {
  return (
    <section className="max-w-screen-xl mx-auto mt-16">
      <div className="grid grid-cols-2 gap-4 p-4">
        <section className="space-y-8">
          <Hours />
        </section>
        <section>
          Form
        </section>
      </div>
    </section >
  )
}

