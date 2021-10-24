import { DotsHorizontalIcon } from "@heroicons/react/solid";

interface PostHeaderProps {
  username: string;
  userImg: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, userImg }) => {
  return (
    <div className='flex items-center p-5'>
      <img
        className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
        src={userImg}
        alt='User Image'
      />
      <p className='flex-1 font-bold'>{username}</p>
      <DotsHorizontalIcon className='h-5' />
    </div>
  );
};

export default PostHeader;
