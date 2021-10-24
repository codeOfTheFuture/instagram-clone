import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const PostButtons: React.FC = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <div className='flex space-x-4'>
        <HeartIcon className='postBtn' />
        <ChatIcon className='postBtn' />
        <PaperAirplaneIcon className='postBtn' />
      </div>

      <BookmarkIcon className='postBtn' />
    </div>
  );
};

export default PostButtons;
