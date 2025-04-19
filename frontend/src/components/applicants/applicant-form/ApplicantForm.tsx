"use client";

import type { ApplicantValues } from "@/types";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Textarea, Checkbox, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { createApplicant } from "@/lib/api/applicants";
import { applicantSchema } from "@/lib/zod";
import { FormError } from "@/components";

export const ApplicantForm = () => {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicantValues>({
    resolver: zodResolver(applicantSchema),
  });

  const onSubmit = async (data: ApplicantValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("last_name", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    if (data.cv.length > 0) {
      formData.append("cv", data.cv[0]);
    }

    try {
      const res = await createApplicant(data);
      if (res?.status === 201) {
        router.push("/");
        addToast({
          title: "Application received",
          description: "Your application has been successfully submitted.",
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
        {/* Name field */}
        <Input
          label="Name"
          size="lg"
          type="text"
          radius="md"
          placeholder="John Doe"
          labelPlacement="outside"
          isInvalid={!!errors.name?.message}
          color={errors.name?.message ? "danger" : "default"}
          errorMessage={errors.name?.message}
          {...register("name")}
        />

        {/* Email field */}
        <Input
          label="Email"
          size="lg"
          type="email"
          radius="md"
          placeholder="john.doe@example.com"
          labelPlacement="outside"
          isInvalid={!!errors.email?.message}
          color={errors.email?.message ? "danger" : "default"}
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        {/* Phone field */}
        <Input
          label="Phone"
          size="lg"
          type="phone"
          radius="md"
          placeholder="+1 404 123 4567"
          labelPlacement="outside"
          isInvalid={!!errors.phone?.message}
          color={errors.phone?.message ? "danger" : "default"}
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />

        {/* Message field */}
        <Textarea
          label="Message"
          size="lg"
          radius="md"
          placeholder="Your message here..."
          labelPlacement="outside"
          classNames={{ base: "!mt-2" }}
          isInvalid={!!errors.message?.message}
          color={errors.message?.message ? "danger" : "default"}
          errorMessage={errors.message?.message}
          {...register("message")}
        />
      </div>

      {/* CV field */}
      <div>
        <label className="text-white subpixel-antialiased block text-sm pb-1 pe-2 text-ellipsis">
          Your CV
        </label>
        <input
          type="file"
          accept="application/pdf"
          className="block w-full text-xs text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
          {...register("cv")}
        />
        {errors.cv?.message && <FormError>* {errors.cv?.message}</FormError>}
      </div>

      {/* Checkbox field */}
      <Checkbox className="block" size="sm">
        I wish to receive emails in case of a hiring process.
      </Checkbox>

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
        {isSubmitting ? "Applying..." : "Apply now"}
      </Button>
    </form>
  );
};
