import InputBox from "./InputBox";
import PostButtons from "./PostButtons";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import Comments from "./Comments";

interface PostProps {
  post: DocumentData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id } = post,
    { username, profileImg, image, caption } = post.data(),
    { data: session } = useSession(),
    [comment, setComment] = useState<string>(""),
    [comments, setComments] = useState<DocumentData[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: DocumentData) => setComments(snapshot.docs)
      ),
    [db]
  );

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const sendComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    try {
      await addDoc(collection(db, "posts", id, "comments"), {
        commentText: commentToSend,
        username: session.user.username,
        profileImg: session.user.image,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white my-7 border rounded-sm'>
      <PostHeader username={username} profileImg={profileImg} />

      <img className='object-cover w-full' src={image} alt='Post Image' />

      {session && <PostButtons />}

      <PostCaption username={username} caption={caption} />

      {comments.length > 0 && <Comments comments={comments} />}

      {session && (
        <InputBox
          comment={comment}
          handleCommentChange={handleCommentChange}
          sendComment={sendComment}
        />
      )}
    </div>
  );
};

export default Post;
