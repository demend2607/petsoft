"use client";
import Image from "next/image";
import { PetSoft } from "../model/types";
import { usePetsStore } from "../model/store";
import { cn } from "@/shared/lib/hooks/utils";

export default function PetCard({ pet }: { pet: PetSoft }) {
  const { setSelectedPetId, selectedPetId } = usePetsStore((state) => state);

  return (
    <li
      key={pet.id}
      className={cn("bg-white border-b border-light hover:bg-gray-200 focus:bg-gray-200 transition", {
        "bg-gray-200": selectedPetId === pet.id,
      })}
    >
      <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 " onClick={() => setSelectedPetId(pet.id)}>
        <Image src={pet.imageUrl} alt="pet image" width={40} height={40} className="rounded-full object-cover h-[40px]" />
        <p className="font-semibold">{pet.name}</p>
      </button>
    </li>
  );
}
