"use client";

import { useEffect, useMemo } from "react";

import { usePetsStore } from "../model/store";
import { usePetSearchStore } from "@/features/petSearch/lib/store";

import PetCard from "./PetCard";
import PetButton from "@/features/petButton/ui/PetButton";
import { Pet } from "@/generated/prisma";

export default function PetList({ initialPets }: { initialPets: Pet[] }) {
  const { setPets, pets } = usePetsStore();
  const { searchQuery } = usePetSearchStore((state) => state);

  useEffect(() => {
    setPets(initialPets);
  }, [initialPets]);

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [pets, searchQuery]);

  return (
    <ul className="content-block relative">
      {filteredPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
      <PetButton actionType="add" className="absolute right-3 bottom-3" />
    </ul>
  );
}
