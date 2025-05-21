export type PetButtonT = {
  children?: React.ReactNode;
  className?: string;
  actionType: "add" | "edit" | "checkout";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
