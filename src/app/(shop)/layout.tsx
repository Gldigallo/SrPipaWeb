import { Footer, Header, SideBar } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>
        <Header />
        <SideBar />
      </div>
      <div>{children}</div>
      <Footer />
    </main>
  );
}
