import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

import { Button } from "@/shared/components/ui/button";
import { PetSoft } from "../model/types";

import PetCard from "./PetCard";

export default function PetList({ pets }: { pets: PetSoft[] }) {
  return (
    <ul className="flex flex-col bg-gray-100 rounded-md h-full shadow-sm relative">
      {pets.map((pet) => (
        <PetCard key={pet.name} pet={pet} />
      ))}
      <Button className="absolute w-10 h-10 right-3 bottom-3 rounded-full">
        <PlusIcon />
      </Button>
    </ul>
  );
}
