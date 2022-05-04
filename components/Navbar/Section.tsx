import LinksSection from "@components/Navbar/LinksSections";
import LinkNavbar from "@components/Navbar/LinkNavbar";

interface Links {
  link: string;
  slug: string;
  labelIcon: any;
}

export default function WorkSection(props: any): JSX.Element {
  function toggleNavbar() {
    // toggleNavbar = (section: string, state = true)
    props.setNavbarOpen(false, "");
  }

  console.log(props.navbarOpen);
  return (
    <>
      <aside
        className="fixed left-[25%] top-0 z-10 hidden max-h-screen min-h-screen max-w-[25%] flex-col items-center justify-around gap-20 rounded-r-xl border-2 border-woody-brown-500 bg-watusi-500 py-10 px-4 text-2xl shadow-lg shadow-watusi-500 xl:left-[18%] xl:flex"
        onMouseLeave={toggleNavbar}
      >
        <section>
          <div className="flex flex-col gap-6 text-left">
            {LinksSection.map(({ link, slug, labelIcon }: Links) => (
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
        </section>
      </aside>
    </>
  );
}
