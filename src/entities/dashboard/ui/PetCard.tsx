import Image from "next/image";
import { PetSoft } from "../model/types";

export default function PetCard({ pet }: { pet: PetSoft }) {
  return (
    <li key={pet.id} className="bg-white border-b border-black/[0.08] hover:bg-gray-200 focus:bg-gray-200 transition">
      <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 ">
        <Image src={pet.imageUrl} alt="pet image" width={40} height={40} className="rounded-full object-cover h-[40px]" />
        <p className="font-semibold">{pet.name}</p>
      </button>
    </li>
  );
}
