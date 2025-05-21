"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { PetSoft } from "@/entities/dashboard/model/types";
import { PetsSearchStoreT } from "./types";

export const usePetSearchStore = create<PetsSearchStoreT>()(
  devtools((set, get) => ({
    searchQuery: "",
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    filteredPets: (allPets: PetSoft[]) => {
      const { searchQuery } = get();
      return allPets.filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase())) || allPets;
    },
  }))
);
