import InputBox from "./InputBox";
import PostButtons from "./PostButtons";
import PostCaption from "./PostCaption";
import PostHeader from "./PostHeader";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
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
    [comments, setComments] = useState<DocumentData[]>([]),
    [likes, setLikes] = useState<DocumentData[]>([]),
    [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: DocumentData) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "likes"),
        (snapshot: DocumentData) => setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      try {
        await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
          username: session.user.username,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

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

      {session && <PostButtons likePost={likePost} hasLiked={hasLiked} />}

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
