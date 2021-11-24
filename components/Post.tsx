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

interface PostProps {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session } = useSession(),
    { id, username, userImg, img, caption } = props,
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

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className='bg-white my-7 border rounded-sm'>
      <PostHeader username={username} userImg={userImg} />

      <img className='object-cover w-full' src={img} alt='Post Image' />

      {session && <PostButtons />}

      <PostCaption username={username} caption={caption} />

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
