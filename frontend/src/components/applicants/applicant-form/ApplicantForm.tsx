"use client";

import { useRouter } from "next/navigation";
import { Input, Button, Textarea, Checkbox } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_URL } from "@/config/constants";
import { applicantSchema } from "@/validations/applicantSchema";
import { IApplicantValues } from "@/interfaces";
import { FormError } from "@/components";

export const ApplicantForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IApplicantValues>({
    resolver: zodResolver(applicantSchema),
  });

  const onSubmit: SubmitHandler<IApplicantValues> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("last_name", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    if (data.cv.length > 0) {
      formData.append("cv", data.cv[0]);
    }

    try {
      const response = await fetch(`${API_URL}/applicants`, {
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

      router.push("/applicants/application-submitted");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // TODO: Add sentry
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name field */}
      <Input
        label="Name *"
        size="sm"
        type="text"
        radius="md"
        required
        {...register("name")}
      />
      {errors.name?.message && <FormError>* {errors.name?.message}</FormError>}

      {/* Email field */}
      <Input
        label="Email *"
        size="sm"
        type="email"
        radius="md"
        {...register("email")}
      />
      {errors.email?.message && (
        <FormError>* {errors.email?.message}</FormError>
      )}

      {/* Phone field */}
      <Input
        label="Phone *"
        size="sm"
        type="phone"
        radius="md"
        {...register("phone")}
      />
      {errors.phone?.message && (
        <FormError>* {errors.phone?.message}</FormError>
      )}

      {/* Message field */}
      <Textarea
        label="Message"
        size="sm"
        radius="md"
        {...register("message")}
      />
      {errors.message?.message && (
        <FormError>* {errors.message?.message}</FormError>
      )}

      {/* CV field */}
      <div>
        <label className="subpixel-antialiased block text-foreground-500 text-small pb-0.5 pe-2 text-ellipsis">
          Your CV *
        </label>
        <input
          type="file"
          className="block w-full text-xs text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
          {...register("cv")}
        />
        {errors.cv?.message && <FormError>* {errors.cv?.message}</FormError>}
      </div>

      {/* Checkbox field */}
      <Checkbox
        className="block"
        size="sm"
        // {...register("isEmail")}
      >
        I wish to receive emails in case of a hiring process.
      </Checkbox>

      <Button
        type="submit"
        color="primary"
        radius="md"
        className="font-medium w-full"
      >
        Apply now
      </Button>

      <p className="text-xs text-neutral-gray text-center">
        * Fields marked with an asterisk are required.
      </p>
    </form>
  );
};
