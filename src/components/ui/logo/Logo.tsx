import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="uppercas font-black text-white flex items-center text-lg"
    >
      <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded mr-px">
        Sr
      </span>
      Pipa
    </Link>
  );
};
