"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { toast } from "react-toastify";

import { FormErrors } from "@/components";
import { API_URL, PLACEMENT_CHOICES } from "@/utils/constants";
import { validateBudget, validatePhone } from "@/utils/validators";
import { IBookingValues } from "@/types/global";



export const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<IBookingValues>();

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
      toast.success("Booking created successfully.");
      reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("There was a problem with the submission. Please try again.");
    }
  };

  return (
    <section className="w-full p-4">
      <h1 className="text-3xl font-bold mb-4">Send your message</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First Name"
          type="text"
          radius="none"
          required
          {...register("firstName", { required: "First name is required" })}
        />

        {errors.firstName && <FormErrors>* {errors.firstName.message}</FormErrors>}

        <Input
          label="Last Name"
          type="text"
          radius="none"
          required
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <FormErrors>* {errors.lastName.message}</FormErrors>}

        <Input
          label="Phone"
          type="phone"
          radius="none"
          required
          isClearable
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <FormErrors>* {errors.phone.message}</FormErrors>}

        <Textarea
          label="Notes"
          radius="none"
          {...register("notes", { required: "Notes are required" })}
        />
        {errors.notes && <FormErrors>* {errors.notes.message}</FormErrors>}

        <div>
          <input
            type="file"
            {...register("file")}
          />
        </div>

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
          type="decimal"
          radius="none"
          {...register("budget", { validate: validateBudget })}
        />
        {errors.budget && <FormErrors>* {errors.budget.message}</FormErrors>}

        <Select
          label="Select a tattoo placement"
          className="max-w-xs"
          placeholder="Select a placement"
          {...register("placement", { required: "Tattoo placement is required" })}
        >
          {PLACEMENT_CHOICES.map((choice) => (
            <SelectItem key={choice.key} value={choice.key}>
              {choice.label}
            </SelectItem>
          ))}
        </Select>
        {errors.placement && <FormErrors>* {errors.placement.message}</FormErrors>}

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
        <Button
          type="submit"
          color="primary"
          radius="none"
          className="font-medium"
        >
          Create Booking
        </Button>
      </form>
    </section>
  )
}
