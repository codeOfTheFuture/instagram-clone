import { DocumentData } from "firebase/firestore";
import Moment from 'react-moment';

interface CommentProps {
  comment: DocumentData;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const { username, profileImg, commentText, timestamp } = comment.data();
  return (
    <div className='flex items-center space-x-2 mb-3'>
      <img
        src={profileImg}
        alt='Comment user profile image'
        className='w-7 h-7 rounded-full'
      />
      <p className='text-sm flex-1'>
        <span className='font-bold'>{username}</span> {commentText}
      </p>

      <Moment fromNow className="pr-5 text-xs">
        {timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export default Comment;
