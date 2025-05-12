import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { PetSoft } from "./types";

type PetsStoreT = {
  pets: PetSoft[];
  selectedPetId: null | string;
  setSelectedPetId: (petId: string) => void;
};

export const usePetsStore = create()(
  devtools(
    persist(
      (set) => ({
        pets: [],
        selectedPetId: "",
        setSelectedPetId: (petId: string) => set({ selectedPet: petId }),
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
