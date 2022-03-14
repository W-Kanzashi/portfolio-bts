import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="flex h-96 flex-col gap-10 px-5 pt-32">
        <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="hover:underline">Blog</a>
          </Link>
          .
        </h2>
      </section>
    </>
  );
}
