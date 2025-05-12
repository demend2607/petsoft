import { cn } from "../lib/hooks/utils";

export default function ContentBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("bg-gray-100 shadow-md rounded-md w-full h-full", className)}>{children}</div>;
}
