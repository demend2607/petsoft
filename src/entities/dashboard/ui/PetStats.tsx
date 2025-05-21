"use client";

import { usePetsStore } from "../model/store";

export default function PetStats() {
  const pets = usePetsStore((state) => state.pets);

  const numberOfPets = pets.length;
  return (
    <div className="text-center">
      <p className="text-2xl font-bold">{numberOfPets}</p>
      <p className="text-white/75">Current pets</p>
    </div>
  );
}
