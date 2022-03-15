type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose-lg prose-stone prose-h1:font-bold dark:prose-invert md:prose-xl lg:prose-2xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
