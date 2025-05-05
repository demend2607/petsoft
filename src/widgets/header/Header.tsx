"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Logo from "./Logo";

const routes = [
  { name: "Dashboard", path: "/app/dashboard" },
  { name: "Account", path: "/app/account" },
];
export default function Header() {
  const activePathName = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-12 px-3 md:px-9 text-xs ">
      <Logo />
      <nav>
        <ul className="flex flex-row gap-x-4 items-center">
          {routes.map((route) => (
            <li
              key={route.name}
              className={clsx(
                { "link-active": activePathName === route.path },
                { "text-white/85": activePathName !== route.path },
                "text-white/70 hover:text-white"
              )}
            >
              <Link href={route.path} className="">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
