import Logo from "@/widgets/header/Logo";
import Image from "next/image";

import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pattern gap-10 xl:flex-row">
      <Image src="/petsoft-preview.png" priority={true} alt="Preview PetSoft" width={519} height={472} />
      <section className="flex flex-col w-[400px]">
        <Logo />
        <h1 className="text-5xl font-semibold my-6">
          Manage your <span className="font-extrabold">pet daycare</span> with ease
        </h1>
        <p className="font-medium text-base">Use PetSoft to easily keep track of pets under your care. Get lifetime access for $299.</p>
        <div className="mt-10 space-x-3">
          <Button asChild>
            <Link href={"/signup"}>Get started</Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link href={"/login"}>Log in</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
