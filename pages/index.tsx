import React, { useState } from "react";
import Head from "next/head";
import Post from "types/posts";
import { getAllPosts } from "lib/api";
import HeroPost from "@components/Markdown/HeroPost";
import Header from "@components/Header";
import PageSelector from "@components/PageSelector";
import useScrollPercentage from "utils/ScrollPercentage";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props): JSX.Element {
  const [section, setSection] = useState("Intro");
  const [scrollRef, scrollPercentage] = useScrollPercentage();

  function handleSection() {
    switch (Math.floor((scrollPercentage as number) / 14)) {
      case 0:
        setSection("Intro");
        break;
      case 1:
        setSection("Migration");
        break;
      case 2:
        setSection("Mail");
        break;
      case 3:
        setSection("SEO");
        break;
      case 4:
        setSection("Client");
        break;
      case 5:
        setSection("GestionPatrimoine");
        break;
      case 6:
        setSection("Veille-techno");
        break;
    }
  }

  return (
    <>
      <Head>
        <title>CLARK Keanui - Portofolio</title>
      </Head>
      <main
        className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-watusi-600/80 px-3 duration-1000 no-scrollbar xl:ml-[25%] xl:bg-white xl:px-0"
        ref={scrollRef as any}
        onScroll={handleSection}
      >
        <PageSelector section={section} setSection={handleSection} />
        <Header />
        {/* Markdown parser display */}
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
    </>
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
