import CoverImage from "@components/Markdown/CoverImage";
import Link from "next/link";
import Author from "types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({ title, coverImage, excerpt, slug }: Props) => {
  return (
    <section
      className="flex h-screen w-full snap-center flex-col items-center justify-center text-center"
      id={slug}
    >
      <div className="min-w-full px-2 md:flex md:flex-col md:gap-16 lg:gap-8">
        <div>
          <h3 className="mb-4 text-4xl font-semibold leading-tight lg:text-5xl">
            <Link as={`/work/${slug}`} href="/work/[slug]">
              <a className="text-woody-brown-500 hover:text-woody-brown-600">
                {title}
              </a>
            </Link>
          </h3>
        </div>
        <div className="md:px-20 2xl:px-32">
          <p className="mb-4 text-xl leading-relaxed text-woody-brown-500">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="mb-8 h-96 w-full md:mb-16 md:w-96">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  );
};

export default HeroPost;
