"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_URL, PLACEMENT_CHOICES } from "@/config/constants";
import { bookingSchema } from "@/validations/bookingSchema";
import { FormError } from "@/components";
import { IArtist, IBookingValues } from "@/interfaces";

interface Props {
  artists: IArtist[];
  initialFirstName?: string;
  initialFirstTime?: boolean;
  initialArtist?: string;
}

export const BookingForm = ({
  artists,
  initialFirstName,
  initialFirstTime,
  initialArtist,
}: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: initialFirstName,
      firstTimeSession: initialFirstTime,
      artist: initialArtist,
    },
  });

  const onSubmit: SubmitHandler<IBookingValues> = async (data) => {
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

    if (data.file.length > 0) {
      formData.append("references", data.file[0]);
    }

    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        body: formData,
      });

      // ! TODO: Fix temporary patch
      if (response.status === 422) {
        router.push("/bookings/thank-you");
        return;
      }

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      router.push("/bookings/thank-you");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // ! TODO: Add sentry
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* First Name field */}
      <Input
        label="First Name *"
        size="sm"
        type="text"
        radius="md"
        {...register("firstName")}
      />

      {errors.firstName?.message && (
        <FormError>* {errors.firstName?.message}</FormError>
      )}

      {/* Last Name field */}
      <Input
        label="Last Name *"
        size="sm"
        type="text"
        radius="md"
        {...register("lastName")}
      />
      {errors.lastName?.message && (
        <FormError>* {errors.lastName?.message}</FormError>
      )}

      {/* Phone field */}
      <Input
        label="Phone *"
        size="sm"
        type="text"
        radius="md"
        isClearable
        {...register("phone")}
      />
      {errors.phone?.message && (
        <FormError>* {errors.phone?.message}</FormError>
      )}

      {/* Notes field */}
      <Textarea label="Notes *" size="sm" radius="md" {...register("notes")} />
      {errors.notes?.message && (
        <FormError>* {errors.notes?.message}</FormError>
      )}

      {/* Artist field */}
      <Select
        label="Select an Artist *"
        size="sm"
        radius="md"
        {...register("artist")}
      >
        {artists.map((artist) => (
          <SelectItem key={artist.id} value={artist.id}>
            {artist.name}
          </SelectItem>
        ))}
      </Select>
      {errors.artist?.message && (
        <FormError>* {errors.artist?.message}</FormError>
      )}

      {/* Estimated Bullet field */}
      <Input
        label="Estimated Budget"
        size="sm"
        type="decimal"
        radius="md"
        {...register("budget")}
      />
      {errors.budget?.message && (
        <FormError>* {errors.budget?.message}</FormError>
      )}

      {/* Placement field */}
      <Select
        label="Select a tattoo placement *"
        size="sm"
        radius="md"
        {...register("placement")}
      >
        {PLACEMENT_CHOICES.map((choice) => (
          <SelectItem key={choice.key} value={choice.key}>
            {choice.label}
          </SelectItem>
        ))}
      </Select>
      {errors.placement?.message && (
        <FormError>* {errors.placement?.message}</FormError>
      )}

      {/* References field */}
      <div>
        <label className="subpixel-antialiased block text-foreground-500 text-small pb-0.5 pe-2 text-ellipsis">
          References *
        </label>
        <input
          type="file"
          className="block w-full text-sm text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
          {...register("file")}
        />
        {errors.file?.message && (
          <FormError>* {errors.file?.message}</FormError>
        )}
      </div>

      {/* Checkbox fields */}
      <div className="flex flex-col space-y-2">
        <Checkbox size="sm" {...register("hasWorkInProgress")}>
          I have a work in progress tattoo
        </Checkbox>

        <Checkbox size="sm" {...register("firstTimeSession")}>
          First-time session
        </Checkbox>
      </div>

      <Button
        type="submit"
        color="primary"
        radius="lg"
        className="w-full text-neutral-light font-medium"
      >
        Create Booking
      </Button>

      <p className="text-xs text-neutral-gray text-center">
        * Fields marked with an asterisk are required.
      </p>
    </form>
  );
};
