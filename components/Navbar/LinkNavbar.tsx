import Link from "next/link";

interface Props {
  link: string;
  slug: string;
  labelIcon: any;
  toggleNavbar: () => void;
  setNavbarOpen: (navbarOpen: boolean) => void;
  navbarOpen: boolean;
  className?: string;
}

export default function LinkNavbar(props: Props) {
  function handleNavbar() {
    props.setNavbarOpen(!props.navbarOpen);
  }

  return (
    <button className={props.className} key={props.slug}>
      <Link href={`/work/${props.link}`}>
        <a onClick={handleNavbar}>
          <h3 className="flex flex-row items-center gap-3 text-lg font-bold text-woody-brown-500 duration-300 ease-in-out hover:text-woody-brown-600 xl:text-lg">
            {props.labelIcon}
            {props.slug}
          </h3>
        </a>
      </Link>
    </button>
  );
}
