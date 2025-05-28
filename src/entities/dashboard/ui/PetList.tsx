"use client";

import { useEffect } from "react";

import { PetSoft } from "../model/types";
import { usePetsStore } from "../model/store";
import { usePetSearchStore } from "@/features/petSearch/lib/store";
import fetchPets from "../model/api";

import PetCard from "./PetCard";
import PetButton from "@/features/petButton/ui/PetButton";

export default function PetList({ initialPets }: { initialPets: PetSoft[] }) {
  const { pets, setPets } = usePetsStore();
  const { filteredPets } = usePetSearchStore((state) => state);

  useEffect(() => setPets(initialPets), []);
  const filteredPetList = filteredPets(pets);

  fetchPets();
  return (
    <ul className="content-block relative">
      {filteredPetList.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
      <PetButton actionType="add" className="absolute right-3 bottom-3" />
    </ul>
  );
}
