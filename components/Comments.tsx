import { DocumentData } from "firebase/firestore";
import Comment from "./Comment";

interface CommentsProps {
  comments: DocumentData[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
      {comments.map((comment: DocumentData) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
