import Link from "next/link";
import { useState } from "react";
import { FaLinux, FaChevronRight, FaGithub } from "react-icons/fa";
import { BiNavigation } from "react-icons/bi";

import MobileNavbar from "@components/Navbar/MobileNavbar";
import Section from "@components/Navbar/Section";

const homeSection = [
  { section: "Entreprise" },
  { section: "Cours" },
  { section: "Personel" },
];

export default function Navbar() {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState({ state: false, section: "" });

  const toggleMobileNavbar = () => setMobileNavbarOpen(!mobileNavbarOpen);

  /**
   * Toggle the navbar section
   *
   * @param state   - The state of the componenent
   * @param section - The section that need to be display
   * @returns `void`
   */
  const toggleNavbar = (section: string, state = true) =>
    setNavbarOpen({ state: state, section: section });

  return (
    <>
      <aside className="fixed left-0 top-0 z-10 hidden max-h-screen min-h-screen max-w-[25%] flex-col items-center justify-around gap-20 rounded-r-xl bg-watusi-500 py-10 px-4 text-2xl shadow-lg shadow-watusi-500 xl:flex xl:max-w-[18%]">
        <Link href="/">
          <a className="text-center text-xl font-bold text-woody-brown-500 duration-300 ease-in-out hover:scale-105 hover:text-woody-brown-600 hover:drop-shadow-md xl:text-3xl">
            <h2 className="">Portfolio</h2>
          </a>
        </Link>

        <section>
          <div className="flex h-full w-full flex-col gap-6 text-left">
            {homeSection.map(({ section }: any) => (
              <button
                key={section}
                onMouseOver={() => toggleNavbar(section)}
                className="mx-2 my-1 h-full w-full rounded-xl px-2 py-1 hover:bg-watusi-400 hover:shadow-lg"
              >
                <a className="text-lg font-semibold uppercase text-woody-brown-400 hover:text-woody-brown-500 xl:text-xl">
                  <h3 className="flex flex-row items-center gap-1 duration-500 ease-in-out hover:translate-x-2 2xl:gap-3">
                    <FaChevronRight /> <span>{section}</span>
                  </h3>
                </a>
              </button>
            ))}
          </div>
          {navbarOpen.state && (
            <Section
              section={navbarOpen.section}
              setNavbarOpen={toggleNavbar}
              navbarOpen={navbarOpen}
            />
          )}
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
          onClick={toggleMobileNavbar}
        >
          <FaLinux />
        </button>
      </aside>
      {/* Navbar responsive */}
      <nav className="fixed bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center bg-watusi-500 xl:hidden">
        <button
          className="flex flex-row items-center justify-center gap-3 text-2xl duration-300 ease-in-out hover:text-woody-brown-500 hover:drop-shadow-xl"
          onClick={toggleMobileNavbar}
        >
          <BiNavigation /> Navigation
        </button>
      </nav>
      {mobileNavbarOpen && (
        <MobileNavbar
          setMobileNavbarOpen={toggleMobileNavbar}
          mobileNavbarOpen={mobileNavbarOpen}
        />
      )}
    </>
  );
}
