"use client";

import Image from "next/image";

import { usePetsStore } from "../model/store";
import PetButton from "@/features/petButton/ui/PetButton";

export default function PetDetails() {
  const { selectedPet, checkoutPet } = usePetsStore((state) => state);

  const selectPet = selectedPet();

  return (
    <section className="content-block max-md:overflow-visible">
      {!selectPet ? (
        <h1 className="m-auto">No pet selected</h1>
      ) : (
        <>
          <section className="bg-white flex items-center justify-between px-8 py-6 border-b border-light">
            <div className="flex flex-row gap-4 items-center max-sm:flex-col">
              <Image src={selectPet.imageUrl} alt="pet image" width={65} height={65} className="rounded-full object-cover h-[65px]" />
              <h2 className="font-bold text-2xl">{selectPet.name}</h2>
            </div>
            <div className="flex flex-row gap-2 max-sm:flex-col ml-auto">
              <PetButton actionType="edit">Edit</PetButton>
              <PetButton actionType="checkout" onClick={() => checkoutPet(selectPet.id)}>
                Checkout
              </PetButton>
            </div>
          </section>
          <section className="flex flex-row justify-around py-10 text-center leading-7 text-sm">
            <div>
              <p className="uppercase">Owner name</p>
              <p>{selectPet.ownerName}</p>
            </div>
            <div>
              <p className="uppercase">Age</p>
              <p>{selectPet.age}</p>
            </div>
          </section>
          <section className="bg-white h-full p-6 py-4 m-6 rounded-sm">
            <p>{selectPet.notes}</p>
          </section>
        </>
      )}
    </section>
  );
}
