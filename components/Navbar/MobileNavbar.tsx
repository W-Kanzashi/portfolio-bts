import { FaLinux } from "react-icons/fa";

import LinkNavbar from "@components/Navbar/LinkNavbar";

interface Links {
  link: string;
  slug: string;
}

const Links = [
  { link: "Mail", slug: "Mail" },
  { link: "Gestion Client", slug: "Client" },
  { link: "E-commerce", slug: "E-commerce" },
  { link: "Veille Technologique", slug: "Veille-techno" },
];

export default function MobileNavbar(props: any): JSX.Element {
  function toggleNavbar() {
    props.setNavbarOpen(!props.navbarOpen);
  }

  return (
    <>
      <section className="fixed top-0 left-0 z-20 flex min-h-screen min-w-full flex-col items-center justify-center gap-10 bg-watusi-500">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-woody-brown-600">
            Les projets
          </h2>
          {Links.map(({ link, slug }: Links) => (
            <LinkNavbar
              link={link}
              slug={slug}
              setNavbarOpen={toggleNavbar}
              navbarOpen={props.navbarOpen}
              toggleNavbar={toggleNavbar}
              className="text-left"
            />
          ))}
        </div>

        {/* Coordonnées */}
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-3xl font-semibold text-woody-brown-600">
            Mes coordonnées
          </h2>
          <h3 className="text-2xl font-bold text-woody-brown-500">
            <a href="mailto:clarkkeanui@gmail.com">clarkkeanui@gmail.com</a>
          </h3>
        </div>

        <button className="mt-7">
          <FaLinux
            onClick={toggleNavbar}
            className="text-6xl text-watusi-900"
          />
        </button>
      </section>
    </>
  );
}
