"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/shared/lib/prismaDB";
import { sleep } from "@/shared/lib/hooks/utils";
import { Pet } from "@/generated/prisma";
import { TPetForm, petFormSchema, petIdSchema } from "@/shared/lib/validation";
import { safeParse } from "zod/v4/core";

export const getPets = async () => {
  return await prisma.pet.findMany();
};
export const addPet = async (pet: unknown) => {
  await sleep(1000);

  // before there was an error, where age was not a number, because typing wasn't working on server
  const validatedPet = petFormSchema.safeParse(pet);
  if (!validatedPet.success) {
    return { error: "Invalid pet data", id: null };
  }

  try {
    const result = await prisma.pet.create({
      data: validatedPet.data,
    });

    revalidatePath("/app", "layout");
    return { error: null, id: result.id };
  } catch (error) {
    return { error: "Could not add pet", id: null };
  }
};

export const updatePet = async (id: Pet["id"], pet: TPetForm) => {
  sleep(1000);

  const validatedPet = petFormSchema.safeParse(pet);
  const validatedId = petIdSchema.safeParse(id);
  if (!validatedPet.success || !validatedId.success) {
    return { message: "Invalid pet data" };
  }

  try {
    await prisma.pet.update({
      where: { id: validatedId.data },
      data: validatedPet.data,
    });
  } catch (error) {
    return { message: "Could not update pet" };
  }
  revalidatePath("/app", "layout");
};

export const deletePet = async (id: Pet["id"]) => {
  sleep(1000);

  const validatedId = petIdSchema.safeParse(id);
  if (!validatedId.success) {
    return { message: "Invalid pet data" };
  }

  try {
    await prisma.pet.deleteMany({
      where: {
        id: validatedId.data,
      },
    });
  } catch (error) {
    return { message: "Could not delete pet" };
  }
  revalidatePath("/app", "layout");
};
