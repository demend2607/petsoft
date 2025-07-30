"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/shared/lib/prismaDB";
import { sleep } from "@/shared/lib/hooks/utils";
import { Pet } from "@/generated/prisma";
import { PetFormData } from "@/entities/dashboard/model/types";

export const getPets = async () => {
  return await prisma.pet.findMany();
};
export const addPet = async (pet: PetFormData) => {
  sleep(1000);

  try {
    return await prisma.pet.create({
      data: pet,
    });
  } catch (error) {
    throw new Error("Could not add pet");
  }
};

export const updatePet = async (id: Pet["id"], pet: PetFormData) => {
  sleep(1000);
  try {
    await prisma.pet.update({
      where: { id },
      data: pet,
    });
  } catch (error) {
    throw new Error("Could not update pet");
  }
  revalidatePath("/app", "layout");
};
export const deletePet = async (id: Pet["id"]) => {
  sleep(1000);
  try {
    await prisma.pet.deleteMany({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("Could not delete pet");
  }
  revalidatePath("/app", "layout");
};
