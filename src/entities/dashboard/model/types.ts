export type PetSoft = {
  id: string;
  ownerName: string;
  name: string;
  imageUrl: string;
  age: number;
  notes: string;
};

export type PetsStoreT = {
  pets: PetSoft[];
  selectedPetId: null | string;
  setPets: (pets: PetSoft[]) => void;
  selectedPet: () => PetSoft | undefined | null;
  setSelectedPetId: (petId: string) => void;
  addPet: (newPet: Omit<PetSoft, "id">) => void;
  editPet: (petId: string, updatedPet: Omit<PetSoft, "id">) => void;
  checkoutPet: (petId: string) => void;
};
