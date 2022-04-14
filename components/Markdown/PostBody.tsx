type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section
      className="prose-body"
      // Sanitize is made at the parser level, so we don't need to do it here.
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
