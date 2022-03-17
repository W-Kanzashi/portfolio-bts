import Link from "next/link";

interface Props {
  link: string;
  slug: string;
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
    <button className={props.className}>
      <Link href={`#${props.slug}`}>
        <a onClick={toggleNavbar}>
          <h3 className="text-2xl font-bold text-woody-brown-500">
            {props.link}
          </h3>
        </a>
      </Link>
    </button>
  );
}
