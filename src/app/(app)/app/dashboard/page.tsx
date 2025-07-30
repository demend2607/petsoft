import { getPets } from "@/features/petForm/lib/prisma_actions";

import PetList from "@/entities/dashboard/ui/PetList";
import PetDetails from "@/entities/dashboard/ui/PetDetails";
import SearchForm from "@/features/petSearch/ui/SearchForm";
import PetStats from "@/entities/dashboard/ui/PetStats";
import { Toaster } from "@/shared/components/ui/sonner";

export default async function Page() {
  const initialPets = await getPets();

  return (
    <main className="flex flex-col">
      <section className="flex justify-between items-center text-white py-6">
        <div>
          <h1 className="text-2xl">PetSoft</h1>
          <p className="text-white/75 font-semibold">Manage your pet daycare with ease</p>
        </div>
        <PetStats />
      </section>
      <section className="flex max-md:flex-col gap-4 text-black h-[600px]">
        <div className="flex flex-col gap-4 w-[400px] max-md:w-full">
          <SearchForm />
          <PetList initialPets={initialPets} />
        </div>
        <PetDetails />
      </section>
      <Toaster />
    </main>
  );
}
