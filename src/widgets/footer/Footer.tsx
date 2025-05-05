"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];
export default function Footer() {
  const activePathName = usePathname();
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; 2025 Lorem Ipsum. All rights reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.name} className={clsx({ "text-white": activePathName === route.path }, { "text-white/70": activePathName !== route.path })}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
