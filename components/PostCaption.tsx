interface PostCaptionProps {
  username: string;
  caption: string;
  likes: number;
}

const PostCaption: React.FC<PostCaptionProps> = (props) => {
  const { username, caption, likes } = props;
  return (
    <>
      <div className='p-5 truncate'>
        {likes > 0 && <p className='font-bold mb-1'>{likes} likes</p>}
        <span className='font-bold mr-1'>{username} </span>
        {caption}
      </div>
    </>
  );
};

export default PostCaption;
