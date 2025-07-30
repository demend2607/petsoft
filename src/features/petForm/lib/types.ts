import { z } from "zod";

export type InputProps = {
  className?: string;
  children: React.ReactNode;
  requiredT?: boolean;
  props: { type: string; name?: string; id: string };
};

export const petFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name cannot exceed 50 characters"),
  ownerName: z.string().min(1, "Owner name is required").max(50, "Owner name cannot exceed 50 characters"),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .refine((url) => url.startsWith("https://"), {
      message: "URL must start with https://",
    })
    .optional()
    .or(z.literal("")) // Allow empty string
    .transform((url) => url || "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"), // Default if empty
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .int("Age must be an integer")
    .min(0, "Age cannot be negative")
    .max(30, "Age cannot exceed 30"),

  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
});

export type TPetForm = z.infer<typeof petFormSchema>;
