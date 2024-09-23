import Image from "next/image";
import { Input, Button, Textarea, Checkbox } from "@nextui-org/react";
import { HeaderPage } from "@/components";

export default function ApplyPage() {
  return (
    <section className="max-w-screen-xl mx-auto mt-16">
      <div className="grid grid-cols-2 gap-4 p-4">
        <form className="space-y-4">
          <HeaderPage title="Apply for Job" />
          <Input
            label="Name"
            size="sm"
            type="text"
            radius="md"
            required
            // {...register("firstName", { required: "First name is required" })}
          />
          <Input
            label="Email"
            size="sm"
            type="email"
            radius="md"
            required
            // {...register("firstName", { required: "First name is required" })}
          />
          <Input
            label="Phone"
            size="sm"
            type="phone"
            radius="md"
            required
            // {...register("firstName", { required: "First name is required" })}
          />
          <Textarea
            label="Message"
            size="sm"
            radius="md"
            // {...register("notes", { required: "Notes are required" })}
          />
          {/* {errors.notes?.message && (
            <FormError>* {errors.notes?.message}</FormError>
          )} */}
          <div>
            <input
              type="file"
              className="block w-full text-xs text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
              // {...register("file")}
            />
          </div>
          <Checkbox
            className="block"
            // {...register("hasWorkInProgress")}
          >
            I wish to receive emails in case of a hiring process.
          </Checkbox>
          <Button
            type="submit"
            color="primary"
            radius="md"
            className="font-medium w-full"
          >
            Create Booking
          </Button>
        </form>
        <section className="overflow-hidden rounded-xl">
          <Image
            src="/images/apply-background.webp"
            alt="Apply Background"
            width={1080}
            height={1080}
            className="object-cover w-full h-full"
          />
        </section>
      </div>
    </section>
  );
}
