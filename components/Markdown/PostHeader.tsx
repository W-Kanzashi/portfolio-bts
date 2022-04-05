import PostTitle from "@components/Markdown/PostTitle";
import Author from "types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
};

export default PostHeader;
