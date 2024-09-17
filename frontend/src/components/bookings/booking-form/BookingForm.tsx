"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { toast } from "react-toastify";
import { API_URL, PLACEMENT_CHOICES } from "@/config/constants";
import { validateBudget, validatePhone } from "@/utils/validators";
import { FormError } from "@/components";
import { IBookingValues } from "@/interfaces";

interface Props {
  initialPhone?: string;
  initialfirstTime?: boolean;
}

export const BookingForm = ({ initialPhone, initialfirstTime }: Props) => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<IBookingValues>({
    defaultValues: {
      phone: initialPhone,
      firstTimeSession: initialfirstTime,
    },
  });

  // TODO: Move attbs
  const notify = () => toast.success("Wow so easy!", {
    theme: "dark",
    position: "top-center",
    hideProgressBar: true,
    closeButton: false,
    icon: false,
    pauseOnFocusLoss: false,
    style: {
      backgroundColor: "#FF4200",
      color: "#fafafa",
      border: "none",
      textAlign: "center",
      padding: "16px 24px",
      borderRadius: "8px"
    }
  });

  const onSubmit: SubmitHandler<IBookingValues> = async (data) => {
    const formData = new FormData();

    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    formData.append("phone", data.phone);
    formData.append("notes", data.notes);
    formData.append("estimated_budget", data.budget);
    formData.append("tattoo_placement", data.placement);
    formData.append("is_work_in_progress", data.hasWorkInProgress ? "true" : "false");
    formData.append("is_first_time", data.firstTimeSession ? "true" : "false");

    if (data.file.length > 0) {
      formData.append("references", data.file[0]);
    }

    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      toast.success("Booking created successfully.", {
        theme: "dark",
        style: { backgroundColor: "#333", color: "#fff" }
      });
      reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("There was a problem with the submission. Please try again.", {
        theme: "dark",
        style: { backgroundColor: "#333", color: "#fff" }
      });
    }
  };

  return (
    <section className="w-full p-4">
      <h1 className="text-3xl font-bold mb-4">Send your message</h1>
      <button onClick={notify}>Notify!</button>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First Name"
          size="sm"
          type="text"
          radius="md"
          required
          {...register("firstName", { required: "First name is required" })}
        />

        {errors.firstName?.message && <FormError>* {errors.firstName?.message}</FormError>}

        <Input
          label="Last Name"
          size="sm"
          type="text"
          radius="md"
          required
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName?.message && <FormError>* {errors.lastName?.message}</FormError>}

        <Input
          label="Phone"
          size="sm"
          type="phone"
          radius="md"
          required
          isClearable
          {...register("phone", { validate: validatePhone })}
        />
        {errors.phone?.message && <FormError>* {errors.phone?.message}</FormError>}

        <Textarea
          label="Notes"
          size="sm"
          radius="md"
          {...register("notes", { required: "Notes are required" })}
        />
        {errors.notes?.message && <FormError>* {errors.notes?.message}</FormError>}

        {/* <Select
          label="Select an Artist"
          className="max-w-xs"
        >
          {ARTISTS_CHOICES.map((choices) => (
            <SelectItem key={choices.key} value={choices.key}>
              {choices.label}
            </SelectItem>
          ))}
        </Select> */}

        <Input
          label="Estimated Budget"
          size="sm"
          type="decimal"
          radius="md"
          {...register("budget", { validate: validateBudget })}
        />
        {errors.budget?.message && <FormError>* {errors.budget?.message}</FormError>}

        <Select
          label="Select a tattoo placement"
          size="sm"
          radius="md"
          className="max-w-xs"
          {...register("placement", { required: "Tattoo placement is required" })}
        >
          {PLACEMENT_CHOICES.map((choice) => (
            <SelectItem key={choice.key} value={choice.key}>
              {choice.label}
            </SelectItem>
          ))}
        </Select>
        {errors.placement?.message && <FormError>* {errors.placement?.message}</FormError>}

        <div className="flex flex-col space-y-2">
          <Checkbox
            {...register("hasWorkInProgress")}
          >
            I have a work in progress tattoo
          </Checkbox>
          <Checkbox
            {...register("firstTimeSession")}
          >
            First-time session
          </Checkbox>
        </div>

        <div>
          <input
            type="file"
            className="block w-full text-sm text-neutral-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-darkgrey file:text-primary hover:file:text-neutral-light hover:file:bg-primary"
            {...register("file")}
          />
        </div>

        <Button
          type="submit"
          color="primary"
          radius="md"
          className="font-medium"
        >
          Create Booking
        </Button>
      </form>
    </section>
  )
}
