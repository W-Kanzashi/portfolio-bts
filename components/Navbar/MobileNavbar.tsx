import { FaBookOpen, FaGithub, FaHome, FaPlane } from "react-icons/fa";
import { MdMail, MdPerson } from "react-icons/md";
import { BiNavigation, BiNetworkChart } from "react-icons/bi";
import { GrCloudComputer } from "react-icons/gr";

import LinkNavbar from "@components/Navbar/LinkNavbar";

interface Links {
  link: string;
  slug: string;
  labelIcon: any;
}

const Links = [
  { link: "Intro", slug: "Introduction", labelIcon: <FaHome /> },
  { link: "Migration", slug: "Migration des services", labelIcon: <FaPlane /> },
  { link: "Mail", slug: "Mail", labelIcon: <MdMail /> },
  {
    link: "SEO",
    slug: "Développer la présence en ligne",
    labelIcon: <BiNetworkChart />,
  },
  { link: "Gestion Client", slug: "Client", labelIcon: <MdPerson /> },
  {
    link: "GestionPatrimoine",
    slug: "Gestion du patrimoine",
    labelIcon: <GrCloudComputer />,
  },
  {
    link: "Veille-techno",
    slug: "Veille Technologique",
    labelIcon: <FaBookOpen />,
  },
];

export default function MobileNavbar(props: any): JSX.Element {
  function toggleNavbar() {
    props.setNavbarOpen(!props.navbarOpen);
  }

  return (
    <>
      <section className="fixed top-0 left-0 z-50 flex min-h-screen min-w-full flex-col items-center justify-around bg-watusi-500 text-left">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-woody-brown-600">
            Les projets
          </h2>
          {Links.map(({ link, slug, labelIcon }: Links) => (
            <LinkNavbar
              key={slug}
              link={link}
              slug={slug}
              labelIcon={labelIcon}
              setNavbarOpen={toggleNavbar}
              navbarOpen={props.navbarOpen}
              toggleNavbar={toggleNavbar}
            />
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
            onClick={toggleNavbar}
          >
            <BiNavigation /> Navigation
          </button>
        </nav>
      </section>
    </>
  );
}
