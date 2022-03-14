import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-6xl">{children}</main>
      <Footer />
    </>
  );
}
