import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "@components/Markdown/PostBody";
import Header from "@components/Markdown/Header";
import PostHeader from "@components/Markdown/PostHeader";
import { getPostBySlug, getAllPosts } from "lib/api";
import PostTitle from "@components/Markdown/PostTitle";
import Head from "next/head";
import markdownToHtml from "lib/markdownToHtml";
import PostType from "types/posts";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <main className="pl-5 drop-shadow-2xl xl:ml-[18%] 2xl:pl-5 2xl:pt-20 ">
      {router.isFallback ? (
        <PostTitle>Chargement...</PostTitle>
      ) : (
        <>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <article className="mx-auto max-w-6xl md:mb-8 2xl:mb-10 2xl:py-10">
            <Header />
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </main>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
