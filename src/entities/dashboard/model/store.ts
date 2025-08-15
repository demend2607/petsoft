"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { addPet, deletePet, updatePet } from "../../../features/petForm/lib/prisma_actions";

import { PetsStoreT } from "./types";
import { toast } from "sonner";

export const usePetsStore = create<PetsStoreT>()(
  devtools((set, get, api) => ({
    pets: [],
    selectedPetId: "",
    loading: false,
    error: null,
    setPets: (initialPets) => set({ pets: initialPets }),
    setSelectedPetId: (petId: string) => {
      if (get().selectedPetId === petId) set({ selectedPetId: "" });
      else {
        return set({ selectedPetId: petId });
      }
    },
    selectedPet: () => {
      const selectedPetId = get().selectedPetId;
      if (!selectedPetId) return;
      // console.log(selectedPetId);

      return get().pets.find((pet) => pet.id === selectedPetId);
    },
    addPet: async (pet) => {
      const result = await addPet(pet);
      console.log(result);

      if (result.error) {
        return toast.warning(result.error);
      }
      if (result.id) {
        get().setSelectedPetId(result.id);
        toast.success("Successfully added pet");
      }
    },
    editPet: async (petId, pet) => {
      const error = await updatePet(petId, pet);
      if (error) {
        return toast.warning(error.message);
      }
      toast.success("Successfully updated pet");
    },
    checkoutPet: async (petId) => {
      const error = await deletePet(petId);
      if (error) {
        return toast.warning(error.message);
      }
      toast.success("Successfully deleted pet");
    },
  }))
);
