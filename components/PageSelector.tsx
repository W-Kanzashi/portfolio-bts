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
      <section className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1">
        {NavbarSection.map(({ href }: any) => (
          <Link href={`#${href}`} key={href}>
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
