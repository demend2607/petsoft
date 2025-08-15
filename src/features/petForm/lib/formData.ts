import { TPetForm } from "@/shared/lib/validation";

import { BASE_PET_IMAGE } from "@/shared/lib/constants";

export const getPetFormData = (formData: FormData): TPetForm => ({
  name: formData.get("name") as string,
  ownerName: formData.get("ownerName") as string,
  imageUrl: (formData.get("imageUrl") as string) || BASE_PET_IMAGE,
  age: +(formData.get("age") as string),
  notes: formData.get("notes") as string,
});
