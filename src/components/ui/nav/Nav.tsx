"use client";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-x-8">
      <Link
        href="/"
        className="relative text-black transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
      >
        Inicio
      </Link>
      <Link
        href="/contacto"
        className="relative text-black transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
      >
        Contacto
      </Link>
      <Link
        href="/nosotros"
        className="relative text-black transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
      >
        Nosotros
      </Link>
    </nav>
  );
};
