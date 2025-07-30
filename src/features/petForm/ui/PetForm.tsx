"use client";

import { usePetsStore } from "@/entities/dashboard/model/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getPetFormData } from "@/features/petForm/lib/formData";
import { toast } from "sonner";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { TPetForm } from "../lib/types";

import PetFormBtn from "./PetFormBtn";
import { type } from "./../../petSearch/lib/types";

export default function PetForm({ actionType, setIsOpen }: { actionType: "add" | "edit"; setIsOpen: () => void }) {
  const { selectedPet, addPet, editPet } = usePetsStore((state) => state);
  const {
    register,
    formState: { isSubmitted, errors },
  } = useForm<TPetForm>({ name: "", ownerName: "", imageUrl: "", age: 0, notes: "" });

  const petValue = selectedPet();

  const formAction = async (formData: FormData) => {
    const petData = getPetFormData(formData);

    try {
      if (actionType === "add") {
        await addPet(petData);
        toast.success("Successfully added pet");
      } else if (petValue) {
        await editPet(petValue!.id, petData);
        toast.success("Successfully updated pet");
      }
      setIsOpen();
    } catch (error) {
      console.error("Form submission failed:", error);
      toast.error("Form submission failed");
    }
  };

  return (
    <form action={formAction} className="flex flex-col">
      <div className="space-y-3">
        {actionType === "add" ? (
          <>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input type="text" id="ownerName" {...register("name", { required: "Name is required" })} />
              {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input type="text" id="imageUrl" {...register("imageUrl")} />
              {errors.imageUrl && <span className="text-red-500">{errors.imageUrl.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" {...register("age", { required: "Age is required" })} />
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" {...register("notes", { required: "Notes is required" })} />
              {errors.notes && <span className="text-red-500">{errors.notes.message}</span>}
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name", { required: "Name is required" })} />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input id="ownerName" {...register("ownerName", { required: "Owner name is required" })} />
              {errors.ownerName && <span className="text-red-500">{errors.ownerName.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input id="imageUrl" {...register("imageUrl")} />
              {errors.imageUrl && <span className="text-red-500">{errors.imageUrl.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" {...register("age", { required: "Age is required" })} />
              {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" {...register("notes", { required: "Notes is required" })} />
              {errors.notes && <span className="text-red-500">{errors.notes.message}</span>}
            </div>
          </>
        )}
      </div>

      <PetFormBtn actionType={actionType} />
    </form>
  );
}
