import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiNavigation } from "react-icons/bi";

import { Work, Courses, Personal } from "@components/Navbar/LinksSections";
import LinkNavbar from "@components/Navbar/LinkNavbar";

interface Links {
  link: string;
  slug: string;
  labelIcon: any;
}

const homeSection = [
  { section: "Entreprise" },
  { section: "Cours" },
  { section: "Personel" },
];

export default function MobileNavbar(props: any): JSX.Element {
  const [openSection, setOpenSection] = useState("");
  function toggleMobileNavbar() {
    props.setMobileNavbarOpen(!props.navbarOpen);
  }

  function displaySection(section: any) {
    {
      section.map(({ link, slug, labelIcon }: Links) => (
        <LinkNavbar
          key={slug}
          link={link}
          slug={slug}
          labelIcon={labelIcon}
          setNavbarOpen={toggleMobileNavbar}
          navbarOpen={props.navbarOpen}
          toggleNavbar={toggleMobileNavbar}
        />
      ));
    }
  }

  return (
    <>
      <section className="fixed top-0 left-0 z-50 flex min-h-screen min-w-full flex-col items-center justify-center gap-8 bg-watusi-500 text-left">
        <h2 className="text-3xl font-semibold text-woody-brown-600">
          Les projets
        </h2>
        <div className="flex flex-col gap-5">
          {homeSection.map(({ section }: any) => (
            <button
              className={`${
                openSection === section ? "bg-woody-brown-600" : ""
              } py-2 px-4 text-xl font-bold text-woody-brown-500 hover:border-woody-brown-600 hover:text-woody-brown-600`}
              key={section}
              onClick={() => {
                setOpenSection(section);
                displaySection(section);
              }}
            >
              {section}
            </button>
          ))}
        </div>

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
        <nav className="fixed bottom-0 left-0 z-10 flex h-10 w-full items-center justify-center xl:hidden">
          <button
            className="flex flex-row items-center justify-center gap-3 text-2xl duration-300 ease-in-out hover:text-woody-brown-500 hover:drop-shadow-xl"
            onClick={toggleMobileNavbar}
          >
            <BiNavigation /> Navigation
          </button>
        </nav>
      </section>
    </>
  );
}
