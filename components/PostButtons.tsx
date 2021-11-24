import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

interface PostButtonProps {
  likePost: () => Promise<void>;
  hasLiked: boolean;
}

const PostButtons: React.FC<PostButtonProps> = ({ likePost, hasLiked }) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <div className='flex space-x-4'>
        {hasLiked ? (
          <HeartIconFilled
            className='postBtn text-red-500'
            onClick={likePost}
          />
        ) : (
          <HeartIcon className='postBtn' onClick={likePost} />
        )}
        <ChatIcon className='postBtn' />
        <PaperAirplaneIcon className='postBtn' />
      </div>

      <BookmarkIcon className='postBtn' />
    </div>
  );
};

export default PostButtons;
