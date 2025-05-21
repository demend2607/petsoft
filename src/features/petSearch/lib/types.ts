import { PetSoft } from "@/entities/dashboard/model/types";

export type PetsSearchStoreT = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPets: (pets: PetSoft[]) => PetSoft[];
};
