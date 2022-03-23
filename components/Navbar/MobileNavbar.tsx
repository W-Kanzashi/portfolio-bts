import { FaLinux, FaBookOpen } from "react-icons/fa";
import { MdMail, MdPerson } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

import LinkNavbar from "@components/Navbar/LinkNavbar";

interface Links {
  link: string;
  slug: string;
  labelIcon: any;
}

const Links = [
  { link: "Mail", slug: "Mail", labelIcon: <MdMail /> },
  { link: "Gestion Client", slug: "Client", labelIcon: <MdPerson /> },
  { link: "E-commerce", slug: "E-commerce", labelIcon: <FiShoppingCart /> },
  {
    link: "Veille Technologique",
    slug: "Veille-techno",
    labelIcon: <FaBookOpen />,
  },
];

export default function MobileNavbar(props: any): JSX.Element {
  function toggleNavbar() {
    props.setNavbarOpen(!props.navbarOpen);
  }

  return (
    <>
      <section className="fixed top-0 left-0 z-20 flex min-h-screen min-w-full flex-col items-center justify-center gap-10 bg-watusi-500 text-left">
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

        {/* Coordonnées */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-woody-brown-600">
            Informations
          </h2>
          <h3 className="text-2xl font-bold text-woody-brown-500">
            <a href="mailto:clarkkeanui@gmail.com">clarkkeanui@gmail.com</a>
          </h3>
          <h3 className="text-2xl font-bold text-woody-brown-500">
            <a href="https://github.com/W-Kanzashi/portfolio-bts/tree/main">
              Github Repository
            </a>
          </h3>
        </div>

        <button>
          <FaLinux
            onClick={toggleNavbar}
            className="text-6xl text-watusi-900 duration-500 ease-in-out hover:scale-105 hover:text-woody-brown-600"
          />
        </button>
      </section>
    </>
  );
}
