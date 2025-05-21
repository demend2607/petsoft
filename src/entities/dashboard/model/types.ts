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
  addPet: (pet: PetSoft) => void;
  checkoutPet: (petId: string) => void;
};
