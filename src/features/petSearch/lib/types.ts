import { Pet } from "@/generated/prisma";

export type PetsSearchStoreT = {
  searchQuery: string;
  filteredPets: Pet[];
  setSearchQuery: (query: string) => void;
  filterPets: (pets: Pet[]) => void;
};
