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
  function toggleNavbar() {
    props.setNavbarOpen(!props.navbarOpen);
  }
  return (
    <button className={props.className} key={props.slug}>
      <Link href={`#${props.slug}`}>
        <a onClick={toggleNavbar}>
          <h3 className="flex flex-row items-center gap-3 text-2xl font-bold text-woody-brown-500">
            {props.labelIcon}
            {props.link}
          </h3>
        </a>
      </Link>
    </button>
  );
}
