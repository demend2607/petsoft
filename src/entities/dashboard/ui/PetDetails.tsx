import Image from "next/image";

import { Button } from "@/shared/components/ui/button";
import { PetSoft } from "../model/types";

export default function PetDetails({ pets }: { pets: PetSoft[] }) {
  return (
    <section className="flex flex-col w-full bg-gray-100 shadow-sm rounded-md">
      {/* <h2>No pet selection</h2> */}
      <section className="bg-white flex flex-row justify-between px-8 py-6">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <Image src={pets[0].imageUrl} alt="pet image" width={60} height={60} className="rounded-full object-cover h-[60px]" />
          <p className="font-bold text-2xl">{pets[0].name}</p>
        </div>
        <div className="flex flex-row gap-2 max-sm:flex-col">
          <Button className="bg-slate-200 text-black hover:text-white">Edit</Button>
          <Button className="bg-slate-200 text-black hover:text-white">Checkout</Button>
        </div>
      </section>
      <section className="flex flex-row justify-around py-10 text-center leading-7 text-sm">
        <div>
          <p className="uppercase">Owner name</p>
          <p>{pets[0].ownerName}</p>
        </div>
        <div>
          <p className="uppercase">Age</p>
          <p>{pets[0].age}</p>
        </div>
      </section>
      <section className="bg-white h-full p-6 py-4 m-6 rounded-sm">
        <p>{pets[0].notes}</p>
      </section>
    </section>
  );
}
