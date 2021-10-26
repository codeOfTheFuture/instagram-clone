import InputBox from "./InputBox";
import PostButtons from "./PostButtons";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";

interface PostProps {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ id, username, userImg, img, caption }) => {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <PostHeader username={username} userImg={userImg} />
      {/* Img */}
      <img className='object-cover w-full' src={img} alt='Post Image' />
      {/* Buttons */}
      <PostButtons />
      {/* caption */}
      <PostCaption username={username} caption={caption} />
      {/* comments */}

      {/* input box */}
      <InputBox />
    </div>
  );
};

export default Post;
