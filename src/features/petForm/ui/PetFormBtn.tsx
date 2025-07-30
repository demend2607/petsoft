import { Button } from "@/shared/components/ui/button";

Button;
export default function PetFormBtn({ actionType }: { actionType: "add" | "edit" }) {
  return (
    <Button type="submit" className="mt-5 self-end">
      {actionType === "add" ? "Add a new Pet" : "Edit Pet"}
    </Button>
  );
}
