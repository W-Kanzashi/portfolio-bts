import Link from "next/link";
import NavbarSection from "const/Links";

export default function PageSelector({
  section,
  setSection,
}: any): JSX.Element {
  function handleSection(e: any) {
    setSection(e.target.value);
  }
  return (
    <>
      <section className="absolute top-4 right-1/2 hidden translate-x-1/2 flex-row gap-1 md:flex xl:right-2 xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 xl:flex-col">
        {NavbarSection.map(({ href }: any) => (
          <Link href={`#${href}`} key={href} passHref>
            <button
              className={
                "h-5 w-5 rounded-full border border-woody-brown-500 " +
                (section === href ? "bg-woody-brown-500" : "bg-white")
              }
              value={href}
              onClick={handleSection}
              name={href}
              title={href}
            ></button>
          </Link>
        ))}
      </section>
    </>
  );
}
