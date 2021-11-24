import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot: DocumentData) => setPosts(snapshot.docs)
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post: DocumentData) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Posts;
