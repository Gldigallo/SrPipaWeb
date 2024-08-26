"use client";
import React from "react";
import Link from "next/link";
import { useUiStore } from "@/store";

export const Nav = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);

  return (
    <div>
      <nav className="hidden sm:flex items-center gap-x-8">
        <Link
          href="/"
          className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
        >
          Inicio
        </Link>
        <Link
          href="/contacto"
          className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
        >
          Contacto
        </Link>
        <Link
          href="/nosotros"
          className="relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
        >
          Nosotros
        </Link>
      </nav>
      <button
        className="sm:hidden justify-end text-black font-semibold m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        onClick={openSideMenu}
      >
        Menú
      </button>
    </div>
  );
};
