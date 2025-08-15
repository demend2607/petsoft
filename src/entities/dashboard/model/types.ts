import { Pet } from "@/generated/prisma";
import { TPetForm } from "@/shared/lib/validation";

export type PetsStoreT = {
  pets: Pet[];
  selectedPetId: Pet["id"];
  loading: boolean;
  error: string | null;

  setPets: (pets: Pet[]) => void;
  setSelectedPetId: (petId: Pet["id"]) => void;
  selectedPet: () => Pet;

  addPet: (pet: TPetForm) => Promise<void>;
  editPet: (petId: Pet["id"], pet: TPetForm) => Promise<void>;
  checkoutPet: (petId: Pet["id"]) => Promise<void>;
};
