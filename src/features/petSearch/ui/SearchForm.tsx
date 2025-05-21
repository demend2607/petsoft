"use client";

import { usePetSearchStore } from "../lib/store";

export default function SearchForm() {
  const { searchQuery, setSearchQuery } = usePetSearchStore((state) => state);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search pets"
        className="w-full h-full bg-white/20 rounded-md px-5 py-3 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
