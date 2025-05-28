"use client";

import { usePetsStore } from "@/entities/dashboard/model/store";

import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";

import { getPetFormData } from "../lib/formData";

export default function PetForm({ actionType, setIsOpen }: { actionType: "add" | "edit"; setIsOpen: () => void }) {
  const { addPet, editPet, selectedPet } = usePetsStore((state) => state);
  const petValue = selectedPet();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pet = getPetFormData(new FormData(e.currentTarget));
    if (actionType === "add") {
      addPet(pet);
    }
    if (actionType === "edit" ) {
      editPet(petValue!.id, pet);
    }

    setIsOpen();
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="space-y-3">
        {actionType === "add" ? (
          <>
            <div className="space-y-1">
              <Label htmlFor="Name">Name</Label>
              <Input type="text" id="Name" name="name" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input type="text" id="ownerName" name="ownerName" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input type="text" id="imageUrl" name="imageUrl" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" name="age" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" name="notes" required />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <Label htmlFor="Name">Name</Label>
              <Input type="text" id="Name" name="name" required defaultValue={actionType === "edit" ? petValue?.name : ""} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input type="text" id="ownerName" name="ownerName" required defaultValue={actionType === "edit" ? petValue?.ownerName : ""} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input type="text" id="imageUrl" name="imageUrl" defaultValue={actionType === "edit" ? petValue?.imageUrl : ""} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" name="age" required defaultValue={actionType === "edit" ? petValue?.age : ""} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" name="notes" required defaultValue={actionType === "edit" ? petValue?.notes : ""} />
            </div>
          </>
        )}
      </div>

      <Button type="submit" className="mt-5 self-end">
        {actionType === "add" ? "Add a new Pet" : "Edit Pet"}
      </Button>
    </form>
  );
}
