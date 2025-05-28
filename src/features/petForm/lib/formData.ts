import { PetSoft } from "@/entities/dashboard/model/types";

export const getPetFormData = (formData: FormData): Omit<PetSoft, "id"> => ({
  name: formData.get("name") as string,
  ownerName: formData.get("ownerName") as string,
  imageUrl: (formData.get("imageUrl") as string) || "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
  age: +(formData.get("age") as string),
  notes: formData.get("notes") as string,
});
