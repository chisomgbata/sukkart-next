"use client";

import { useState } from "react";
import MenuIcon from "../icons/menu";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setMenuOpen(true)}>
        <span className="sr-only">Open Menu</span>
        <MenuIcon className="w-6 h-6 text-gray-500" />
      </button>
    </>
  );
}
