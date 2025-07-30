import { Pet } from "@/generated/prisma";

export type PetFormData = Omit<Pet, "id" | "createdAt" | "updatedAt">;

export type PetsStoreT = {
  pets: Pet[];
  selectedPetId: Pet["id"];
  loading: boolean;
  error: string | null;

  setPets: (pets: Pet[]) => void;
  setSelectedPetId: (petId: Pet["id"]) => void;
  selectedPet: () => Pet | undefined;

  addPet: (pet: PetFormData) => Promise<void>;
  editPet: (petId: Pet["id"], pet: PetFormData) => void;
  checkoutPet: (petId: Pet["id"]) => void;
};
