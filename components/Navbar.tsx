import Link from "next/link";
import { useState } from "react";
import { FaLinux } from "react-icons/fa";

import MobileNavbar from "@components/Navbar/MobileNavbar";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <>
      <nav className="fixed left-0 bottom-2 z-10 flex w-full flex-row items-center justify-between rounded-md bg-watusi-500 px-3 py-4 text-2xl shadow-xl md:bottom-[92%] md:right-1/2 md:left-1/2 md:top-2 md:w-[60rem] md:-translate-x-1/2 md:px-10">
        <Link href="/">
          <a className="duration-300 ease-in-out hover:scale-105 hover:text-woody-brown-600 hover:drop-shadow-md">
            <h2 className="">Portfolio CLARK</h2>
          </a>
        </Link>

        <section className="hidden md:block">
          <div className="flex flex-row items-center justify-between gap-5">
            <h3>Informations</h3>
            <h3>Contact</h3>
          </div>
        </section>

        <button
          className="block duration-300 ease-in-out hover:scale-105 hover:text-watusi-900 md:hidden"
          onClick={toggleNavbar}
        >
          <FaLinux />
        </button>
      </nav>
      {/* Navbar responsive */}
      {navbarOpen === false ? null : (
        <MobileNavbar setNavbarOpen={toggleNavbar} navbarOpen={navbarOpen} />
      )}
    </>
  );
}
