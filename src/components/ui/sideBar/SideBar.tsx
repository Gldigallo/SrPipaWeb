"use client";
import clsx from "clsx";
import Link from "next/link";
import { useUiStore } from "@/store";
import { IoCloseOutline } from "react-icons/io5";

export const SideBar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background Black */}
      {isSideMenuOpen && (
        <div className="fixed sm:hidden top-0 left-0 w-screen h-screen z-50 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed sm:hidden top-0 left-0 w-screen h-screen z-50 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed sm:hidden p-5 right-0 top-0 w-[150px] h-screen bg-[#090909] z-50 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => closeMenu()}
        />
        <Link href="/" className="relative flex mt-0 mb-5 text-white ">
          Inicio
        </Link>
        <Link href="/contacto" className="relative flex my-5 text-white ">
          Contacto
        </Link>
        <Link href="/nosotros" className="relative flex my-5 text-white ">
          Nosotros
        </Link>
      </nav>
    </div>
  );
};
