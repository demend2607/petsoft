"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { addPet, deletePet, updatePet } from "../../../features/petForm/lib/prisma_actions";

import { PetsStoreT } from "./types";

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
      if (!selectedPetId) return undefined;
      return get().pets.find((pet) => pet.id === selectedPetId);
    },
    addPet: async (pet) => {
      try {
        const createdPet = await addPet(pet);

        set((state) => ({
          pets: [...state.pets, createdPet],
          error: null,
          selectedPetId: createdPet.id,
        }));
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : "Failed to add pet",
        });
        throw error;
      }
    },
    editPet: async (petId, pet) => {
      try {
        await updatePet(petId, pet);

        set((state) => ({
          pets: state.pets.map((pet) => (pet.id === petId ? { ...pet, ...pet } : pet)),
          error: null,
        }));
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : "Failed to update pet",
        });
        throw error;
      }
    },
    checkoutPet: async (petId) => {
      try {
        await deletePet(petId);

        set((state) => ({ pets: state.pets.filter((pet) => pet.id !== petId), error: null }));
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : "Failed to remove pet",
        });
        throw error;
      }
    },
  }))
);
