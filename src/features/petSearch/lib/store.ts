"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { PetsSearchStoreT } from "./types";
import { usePetsStore } from "@/entities/dashboard/model/store";

export const usePetSearchStore = create<PetsSearchStoreT>()(
  devtools((set, get) => ({
    searchQuery: "",
    filteredPets: [],
    setSearchQuery: (query) => {
      set({ searchQuery: query });
    },
    filterPets: (pets) => {
      const query = get().searchQuery;
      const filtered = pets.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase())) || pets;

      set({ filteredPets: filtered });
    },
  }))
);
