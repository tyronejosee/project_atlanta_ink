import { z } from "zod";
import { validatePhone } from "./baseValidators";

export const applicantSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name cannot exceed 100 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .max(15, { message: "Phone cannot exceed 15 characters" })
    .refine(
      (value) => {
        const validationResult = validatePhone(value);
        return validationResult === true;
      },
      { message: "Invalid phone number" },
    ),

  cv: z
    .any()
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "File size must be less than 2 MB",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      {
        message: "File must be a PDF or DOC type",
      },
    ),
  // TODO: fix formats

  message: z
    .string()
    .max(1000, { message: "Message cannot exceed 1000 characters" })
    .optional(),
});
