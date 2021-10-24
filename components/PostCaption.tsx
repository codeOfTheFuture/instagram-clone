interface PostCaptionProps {
  username: string;
  caption: string;
}

const PostCaption: React.FC<PostCaptionProps> = ({ username, caption }) => {
  return (
    <>
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username} </span>
        {caption}
      </p>
    </>
  );
};

export default PostCaption;
