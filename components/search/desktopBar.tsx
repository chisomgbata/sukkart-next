"use client";

import SearchIcon from "@/components/icons/search";
import XMark from "@/components/icons/x";
import { useEffect, useRef, useState } from "react";

export default function DesktopSearchBar() {
  return (
    <div className={`transition-all duration-700 ease-out bg-white w-full `}>
      <div className="flex gap-1 bg-gray-100 items-center pr-2 text-xs rounded-lg text-gray-800">
        <input
          type="text"
          placeholder="Search for products and categories"
          className={`px-2 py-3 w-full bg-transparent  outline-none text-gray-500 `}
        />
        <div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
