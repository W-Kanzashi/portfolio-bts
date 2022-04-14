import Link from "next/link";
import { useState } from "react";
import { FaLinux, FaChevronRight, FaGithub } from "react-icons/fa";
import { BiNavigation } from "react-icons/bi";

import MobileNavbar from "@components/Navbar/MobileNavbar";
import NavbarSection from "const/Links";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <>
      <aside className="fixed left-0 top-0 z-10 hidden max-h-screen min-h-screen max-w-[25%] flex-col items-center justify-around gap-20 rounded-r-xl bg-watusi-500 py-10 px-4 text-2xl shadow-lg shadow-watusi-500 xl:flex xl:max-w-[18%]">
        <Link href="/">
          <a className="text-center text-xl font-bold text-woody-brown-500 duration-300 ease-in-out hover:scale-105 hover:text-woody-brown-600 hover:drop-shadow-md xl:text-3xl">
            <h2 className="">Portfolio</h2>
          </a>
        </Link>

        <section>
          <div className="flex flex-col gap-6 text-left">
            {NavbarSection.map(({ href, text }) => (
              <Link href={`/#${href}`} key={href}>
                <a className="text-lg font-semibold uppercase text-woody-brown-400 hover:text-woody-brown-500 xl:text-xl">
                  <h3 className="flex flex-row items-center gap-1 duration-500 ease-in-out hover:translate-x-2 2xl:gap-3">
                    <FaChevronRight /> {text}
                  </h3>
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal info */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-woody-brown-400">
            CLARK Keanui
          </h2>
          <h2 className="text-semibold text-xl text-woody-brown-400">
            BTS SIO Option SLAM
          </h2>
          <a
            href="https://github.com/W-Kanzashi/portfolio-bts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 text-woody-brown-400 duration-300  ease-in-out hover:scale-105 hover:gap-1 hover:text-woody-brown-500"
          >
            <FaGithub className="text-3xl" />{" "}
            <span className="text-lg">Github Repository</span>
          </a>
        </section>

        <button
          className="block duration-300 ease-in-out hover:scale-105 hover:text-watusi-900 md:hidden"
          onClick={toggleNavbar}
        >
          <FaLinux />
        </button>
      </aside>
      {/* Navbar responsive */}
      <nav className="fixed bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center bg-watusi-500 xl:hidden">
        <button
          className="flex flex-row items-center justify-center gap-3 text-2xl duration-300 ease-in-out hover:text-woody-brown-500 hover:drop-shadow-xl"
          onClick={toggleNavbar}
        >
          <BiNavigation /> Navigation
        </button>
      </nav>
      {navbarOpen && (
        <MobileNavbar setNavbarOpen={toggleNavbar} navbarOpen={navbarOpen} />
      )}
    </>
  );
}
