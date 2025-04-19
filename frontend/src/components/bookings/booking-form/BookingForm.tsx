"use client";

import type { ArtistResponse, BookingValues } from "@/types";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  addToast,
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, ChevronsUpDown, Flame } from "lucide-react";
import { bookingSchema } from "@/lib/zod";
import { createBooking } from "@/lib/api/bookings";
import { FormError } from "@/components";
import { PLACEMENT_CHOICES } from "@/config/constants";

type Props = {
  artists: ArtistResponse[];
  initialFirstName?: string;
  initialFirstTime?: boolean;
  initialArtist?: string;
};

export const BookingForm = ({
  artists,
  initialFirstName,
  initialFirstTime,
  initialArtist,
}: Props) => {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: initialFirstName,
      firstTimeSession: initialFirstTime,
      artist: initialArtist,
    },
  });

  const onSubmit = async (data: BookingValues) => {
    const formData = new FormData();

    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    formData.append("phone", data.phone);
    formData.append("notes", data.notes);
    formData.append("artist_id", data.artist);
    formData.append("estimated_budget", data.budget);
    formData.append("tattoo_placement", data.placement);
    formData.append(
      "is_work_in_progress",
      data.hasWorkInProgress ? "true" : "false",
    );
    formData.append("is_first_time", data.firstTimeSession ? "true" : "false");

    if (data.file.length > 0) formData.append("references", data.file[0]);

    try {
      const res = await createBooking(data);
      if (res?.status === 201) {
        router.push("/");
        addToast({
          title: "Booking created",
          description: "Your booking has been successfully created.",
          promise: new Promise((resolve) => setTimeout(resolve, 2000)),
        });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      setApiError(`${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-10">
        {/* First Name field */}
        <Input
          label="First Name"
          size="lg"
          type="text"
          radius="md"
          placeholder="John"
          labelPlacement="outside"
          isInvalid={!!errors.firstName?.message}
          color={errors.firstName?.message ? "danger" : "default"}
          errorMessage={errors.firstName?.message}
          {...register("firstName")}
        />

        {/* Last Name field */}
        <Input
          label="Last Name"
          size="lg"
          type="text"
          radius="md"
          placeholder="Doe"
          labelPlacement="outside"
          isInvalid={!!errors.lastName?.message}
          color={errors.lastName?.message ? "danger" : "default"}
          errorMessage={errors.lastName?.message}
          {...register("lastName")}
        />

        {/* Phone field */}
        <Input
          isClearable
          label="Phone"
          size="lg"
          type="tel"
          radius="md"
          placeholder="+1 404 123 4567"
          labelPlacement="outside"
          isInvalid={!!errors.phone?.message}
          color={errors.phone?.message ? "danger" : "default"}
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />

        {/* Notes field */}
        <Textarea
          size="lg"
          type="textarea"
          radius="md"
          label="Notes"
          placeholder="Your notes here..."
          labelPlacement="outside"
          classNames={{ base: "!mt-2" }}
          isInvalid={!!errors.notes?.message}
          color={errors.notes?.message ? "danger" : "default"}
          errorMessage={errors.notes?.message}
          {...register("notes")}
        />

        {/* Artist field */}
        <Select
          size="lg"
          radius="md"
          label="Artist"
          labelPlacement="outside"
          placeholder="Select an Artist"
          selectorIcon={<ChevronsUpDown className="w-4 h-4" />}
          isInvalid={!!errors.artist?.message}
          color={errors.artist?.message ? "danger" : "default"}
          errorMessage={errors.artist?.message}
          {...register("artist")}
        >
          {artists.map((artist) => (
            <SelectItem key={artist.id}>{artist.name}</SelectItem>
          ))}
        </Select>

        {/* Estimated Bullet field */}
        <Input
          label="Estimated Budget"
          size="lg"
          type="number"
          radius="md"
          placeholder="100"
          labelPlacement="outside"
          isInvalid={!!errors.budget?.message}
          color={errors.budget?.message ? "danger" : "default"}
          errorMessage={errors.budget?.message}
          {...register("budget")}
        />

        {/* Placement field */}
        <Select
          size="lg"
          radius="md"
          label="Placement"
          labelPlacement="outside"
          placeholder="Select a tattoo placement"
          selectorIcon={<ChevronsUpDown className="w-4 h-4" />}
          isInvalid={!!errors.placement?.message}
          color={errors.placement?.message ? "danger" : "default"}
          errorMessage={errors.placement?.message}
          {...register("placement")}
        >
          {PLACEMENT_CHOICES.map((choice) => (
            <SelectItem key={choice.key}>{choice.label}</SelectItem>
          ))}
        </Select>
      </div>

      {/* References field */}
      <div>
        <label className="text-white subpixel-antialiased block text-sm pb-1 pe-2 text-ellipsis">
          References
        </label>
        <input
          type="file"
          className="block w-full text-sm text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
          {...register("file")}
        />
        {errors.file?.message && <FormError>{errors.file?.message}</FormError>}
      </div>

      {/* Checkbox fields */}
      <div className="flex flex-col space-y-2">
        <Checkbox size="md" {...register("hasWorkInProgress")}>
          I have a work in progress tattoo
        </Checkbox>

        <Checkbox size="md" {...register("firstTimeSession")}>
          First-time session
        </Checkbox>
      </div>

      {apiError && (
        <p className="text-xs text-red-500 text-center">{apiError}</p>
      )}

      <Button
        type="submit"
        radius="md"
        color="primary"
        className="font-medium w-full"
        disabled={isSubmitting}
        endContent={<ArrowUpRight className="w-4 h-4" />}
      >
        {isSubmitting ? "Creating..." : "Create Booking"}
      </Button>
    </form>
  );
};
