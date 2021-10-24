import PostHeader from "./PostHeader";

interface PostProps {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ id, username, userImg, img, caption }) => {
  return (
    <div>
      <h1>A single post</h1>

      {/* Header */}
      <PostHeader username={username} userImg={userImg} />
      {/* Img */}

      {/* Buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
};

export default Post;
