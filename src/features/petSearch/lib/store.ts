"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { PetsSearchStoreT } from "./types";

export const usePetSearchStore = create<PetsSearchStoreT>()(
  devtools((set, get) => ({
    searchQuery: "",
    filteredPets: [],
    setSearchQuery: (query) => {
      set({ searchQuery: query });
    },
  }))
);
