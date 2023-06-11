"use client";

import SearchIcon from "@/components/icons/search";
import XMark from "@/components/icons/x";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [inputFocused, setInputFocused] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [distanceToTop, setToTop] = useState(0);

  function handleFocus(focused: boolean) {
    setInputFocused(focused);
    focused
      ? setToTop(elementRef.current?.getBoundingClientRect().top || 0)
      : setToTop(0);
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out bg-white  ${
        inputFocused ? "h-screen  py-2 px-2" : "px-2"
      }`}
      style={{
        transform: `translate(0, -${distanceToTop}px`,
      }}
    >
      <div className="flex gap-1 bg-gray-100 items-center pr-2 text-xs rounded-lg text-gray-800">
        {inputFocused && (
          <button
            onClick={() => handleFocus(false)}
            className="text-gray-800 bg-gray-300 rounded-lg p-2"
          >
            <XMark className="h-6 w-6" />
          </button>
        )}
        <input
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
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
