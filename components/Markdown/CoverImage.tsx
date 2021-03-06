import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      height={400}
      width={400}
      layout="responsive"
      className={cn("shadow-sm", {
        "transition-shadow duration-200 hover:shadow-lg": slug,
      })}
    />
  );
  return (
    <div className="relative sm:mx-0">
      {slug ? (
        <Link as={`/work/${slug}`} href="/work/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
