import { z } from "zod";
import { BASE_PET_IMAGE } from "./constants";

export const petIdSchema = z.string().cuid();

export const petFormSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required").max(20, "Name cannot exceed 20 characters"),
    ownerName: z.string().min(1, "Owner name is required").max(30, "Owner name cannot exceed 30 characters"),
    imageUrl: z.union([z.literal(""), z.string().trim().url("Please enter a valid URL")]),
    age: z.coerce.number().int().positive().max(100),
    notes: z.union([z.literal(""), z.string().max(500)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || BASE_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petFormSchema>;
