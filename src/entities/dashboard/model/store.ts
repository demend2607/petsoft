"use client";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { PetSoft, PetsStoreT } from "./types";

export const usePetsStore = create<PetsStoreT>()(
  devtools(
    persist(
      (set, get) => ({
        pets: [],
        selectedPetId: "",
        setPets: (pets: PetSoft[]) => set({ pets: pets }),
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
        addPet: (pet: PetSoft) => set((state) => ({ pets: [...state.pets, pet] })),
        checkoutPet: (petId: string) => set((state) => ({ pets: state.pets.filter((pet) => pet.id !== petId) })),
      }),
      {
        name: "petsStore",
        partialize: (state) => ({
          pets: state.pets,
        }),
      }
    )
  )
);
