import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-7xl shadow-xl shadow-watusi-600">
        {children}
      </main>
      <Footer />
    </>
  );
}
