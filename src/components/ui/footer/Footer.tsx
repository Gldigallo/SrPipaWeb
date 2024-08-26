import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-black text-white text-xs mb-0">
      <Link href="/">
        <span>Sr</span>
        <span>Pipa </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
      <Link href="/"></Link>
    </div>
  );
};
