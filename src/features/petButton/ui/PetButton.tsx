"use client";

import { cn } from "@/shared/lib/hooks/utils";

import { Button } from "@/shared/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/shared/components/ui/dialog";

import { PetButtonT } from "../lib/types";
import PetForm from "@/features/petForm/ui/PetForm";
import { useState } from "react";

export default function PetButton({ children, className, actionType, onClick }: PetButtonT) {
  const [isOpen, setIsOpen] = useState(false);
  if (actionType === "checkout") {
    return (
      <Button variant="secondary" className={cn("", className)} onClick={onClick}>
        {children}
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon" className={cn("", className)}>
            <PlusIcon className="w-6 h-6" />
          </Button>
        ) : (
          <Button variant="secondary" className={cn("", className)}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{actionType === "add" ? "Add a new pet" : "Edit pet"}</DialogTitle>
        </DialogHeader>
        <PetForm actionType={actionType} setIsOpen={() => setIsOpen(false)} />
        {/* <DialogFooter>Dialog footer</DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
