import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="pt-5 md:pt-32">
        <h2 className="mb-10 text-3xl font-bold leading-tight tracking-tight md:mb-20 md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="text-woody-brown-500 decoration-woody-brown-500 hover:text-woody-brown-600">
              Accueil.
            </a>
          </Link>
        </h2>
      </section>
    </>
  );
}
