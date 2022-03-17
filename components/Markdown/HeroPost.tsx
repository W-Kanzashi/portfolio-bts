import DateFormatter from "@components/Markdown/DateFormatter";
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

const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <section
      className="mx-auto flex max-w-2xl flex-col items-center justify-center md:flex-row"
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
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-xl leading-relaxed text-woody-brown-500">
            {excerpt}
          </p>
        </div>
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  );
};

export default HeroPost;
