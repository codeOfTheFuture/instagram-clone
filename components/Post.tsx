import InputBox from "./InputBox";
import PostButtons from "./PostButtons";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";
import { useSession } from "next-auth/react";

interface PostProps {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session } = useSession(),
    { username, userImg, img, caption } = props;

  return (
    <div className='bg-white my-7 border rounded-sm'>
      <PostHeader username={username} userImg={userImg} />
      <img className='object-cover w-full' src={img} alt='Post Image' />
      {session && <PostButtons />}
      <PostCaption username={username} caption={caption} />
      {session && <InputBox />}
    </div>
  );
};

export default Post;
