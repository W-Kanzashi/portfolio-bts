import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "@components/Markdown/PostBody";
import Header from "@components/Header";
import PostHeader from "@components/Markdown/PostHeader";
import { getPostBySlug, getAllPosts } from "lib/api";
import PostTitle from "@components/Markdown/PostTitle";
import Head from "next/head";
import { CMS_NAME } from "lib/constants";
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
    <main className="container mx-auto rounded-2xl bg-watusi-600/80 px-5 pt-20 shadow-2xl shadow-watusi-500">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>
              {post.title} | Next.js Blog Example with {CMS_NAME}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <article className="mb-32 py-10 px-2">
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
