"use client";

import { usePetsStore } from "@/entities/dashboard/model/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { TPetForm, petFormSchema } from "@/shared/lib/validation";

import PetFormBtn from "./PetFormBtn";
import { useMemo } from "react";

export default function PetForm({ actionType, setIsOpen }: { actionType: "add" | "edit"; setIsOpen: () => void }) {
  const { selectedPet, addPet, editPet } = usePetsStore((state) => state);

  const petValue = useMemo(() => selectedPet(), [selectedPet]);
  const {
    register,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TPetForm>({
    resolver: zodResolver(petFormSchema),
    defaultValues:
      actionType === "edit"
        ? {
            name: petValue?.name,
            ownerName: petValue?.ownerName,
            imageUrl: petValue?.imageUrl,
            age: petValue?.age,
            notes: petValue?.notes,
          }
        : undefined,
  });

  const formAction = async () => {
    const result = await trigger();
    if (!result) return;

    setIsOpen();

    const petData = await getValues();

    if (actionType === "add") {
      await addPet(petData);
    } else if (petValue) {
      await editPet(petValue!.id, petData);
    }
  };

  return (
    <form onSubmit={handleSubmit(formAction)} className="flex flex-col">
      <div className="space-y-3">
        {actionType === "add" ? (
          <>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input id="ownerName" {...register("ownerName")} />
              {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input id="imageUrl" {...register("imageUrl")} />
              {errors.imageUrl && <span className="text-red-500">{errors.imageUrl.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" {...register("age")} />
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" {...register("notes")} />
              {errors.notes && <span className="text-red-500">{errors.notes.message}</span>}
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input id="ownerName" {...register("ownerName")} />
              {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input id="imageUrl" {...register("imageUrl")} />
              {errors.imageUrl && <span className="text-red-500">{errors.imageUrl.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input id="age" {...register("age")} />
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" {...register("notes")} />
              {errors.notes && <span className="text-red-500">{errors.notes.message}</span>}
            </div>
          </>
        )}
      </div>

      <PetFormBtn actionType={actionType} />
    </form>
  );
}
