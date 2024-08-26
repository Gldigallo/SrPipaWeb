import { Logo, Nav } from "@/components";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between p-5 py-2 lg:py-4 lg:px-0">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
