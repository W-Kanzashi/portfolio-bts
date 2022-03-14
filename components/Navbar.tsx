import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-2 z-10 flex w-[60rem] -translate-x-1/2 flex-row items-center justify-between gap-20 rounded-md bg-watusi-500 px-10 py-4 shadow-xl">
      <Link href="/">
        <a className="bg-clip-text duration-300 ease-in-out hover:scale-105 hover:text-woody-brown-600 hover:drop-shadow-md">
          <h2 className="">Portfolio CLARK</h2>
        </a>
      </Link>
      <div className="flex flex-row items-center justify-between gap-5">
        <h3>Informations</h3>
        <h3>Contact</h3>
      </div>
    </nav>
  );
}
