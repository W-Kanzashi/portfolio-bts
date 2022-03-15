import HeroPost from "@components/Markdown/HeroPost";
import { getAllPosts } from "lib/api";
import Post from "types/posts";

import Header from "@components/Header";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props): JSX.Element {
  return (
    <div className="bg-watusi-600 subpixel-antialiased">
      <Header />

      {/* Markdown parser display */}
      <main>
        {allPosts.map((heroPost) => (
          <HeroPost
            key={heroPost.title}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
