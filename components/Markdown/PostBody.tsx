type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section
      className="prose-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
