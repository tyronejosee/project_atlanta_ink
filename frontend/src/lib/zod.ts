import { z } from "zod";
import { validateFileSize, validatePhone } from "@/lib/utils";

export const applicantSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name cannot exceed 100 characters" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(100, { message: "Email cannot exceed 100 characters" })
    .email({ message: "Invalid email address" }),

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
    .custom<FileList>((files) => files instanceof FileList, {
      message: "CV is required",
    })
    .refine((files) => files.length > 0, {
      message: "CV is required",
    })
    .refine((files) => files[0]?.type === "application/pdf", {
      message: "The file must be a PDF",
    })
    .refine((files) => files[0]?.size <= 2 * 1024 * 1024, {
      message: "File size must be less than 2 MB",
    }),

  message: z
    .string()
    .max(1000, { message: "Message cannot exceed 1000 characters" })
    .optional(),
});

export const bookingSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(100, { message: "First name must be at most 100 characters" }),

  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(100, { message: "Last name must be at most 100 characters" }),

  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .max(15, { message: "Phone must be at most 15 characters" })
    .refine(
      (value) => {
        const validationResult = validatePhone(value);
        return validationResult === true;
      },
      { message: "Invalid phone number" },
    ),

  notes: z
    .string()
    .min(1, { message: "Notes is required" })
    .max(1000, { message: "Notes must be at most 1000 characters" }),

  artist: z
    .string()
    .refine((value) => !!value, { message: "Artist is required" }),

  budget: z
    .string()
    .optional()
    .refine(
      (value) => {
        const decimalPattern = /^\d+(\.\d+)?$/;
        return value === undefined || decimalPattern.test(value);
      },
      {
        message: "Budget must be a valid decimal number",
      },
    ),

  placement: z
    .string()
    .min(1, { message: "Tattoo placement is required" })
    .max(20, { message: "Tattoo placement must be at most 20 characters" }),

  hasWorkInProgress: z.boolean().optional(),

  firstTimeSession: z.boolean().optional(),

  file: z
    .any()
    .optional()
    .refine((fileList) => validateFileSize(fileList) === true, {
      message: "File must be an image (JPG, PNG, WEBP) and less than 2 MB",
    }),
});
