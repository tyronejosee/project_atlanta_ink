"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button, Textarea, Checkbox } from "@nextui-org/react";
import { API_URL, PLACEMENT_CHOICES } from "@/config/constants";
import { validateBudget, validatePhone } from "@/utils/validators";
import { FormError } from "@/components";
import { IApplicantValues, IArtist, IBookingValues } from "@/interfaces";

export const ApplicantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IApplicantValues>();

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
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      reset();
      // router.push("/applicants/application-submitted");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // TODO: Add sentry
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name *"
        size="sm"
        type="text"
        radius="md"
        required
        {...register("name", { required: "Name is required" })}
      />
      {errors.name?.message && <FormError>* {errors.name?.message}</FormError>}

      <Input
        label="Email *"
        size="sm"
        type="email"
        radius="md"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email?.message && (
        <FormError>* {errors.email?.message}</FormError>
      )}

      <Input
        label="Phone *"
        size="sm"
        type="phone"
        radius="md"
        {...register("phone", { required: "Phone is required" })}
      />
      {errors.phone?.message && (
        <FormError>* {errors.phone?.message}</FormError>
      )}

      <Textarea
        label="Message"
        size="sm"
        radius="md"
        {...register("message", { required: "Message are required" })}
      />
      {errors.message?.message && (
        <FormError>* {errors.message?.message}</FormError>
      )}

      <div>
        <label className="subpixel-antialiased block text-foreground-500 text-small pb-0.5 pe-2 text-ellipsis">
          Your CV *
        </label>
        <input
          type="file"
          className="block w-full text-xs text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
          {...register("cv")}
        />
      </div>
      {errors.cv?.message && <FormError>* {errors.cv?.message}</FormError>}

      <Checkbox
        className="block"
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
        Submit Data
      </Button>
    </form>
  );
};
