import Post from "./Post";

const Posts: React.FC = () => {
  const posts = [
    {
      id: 123,
      username: "Jeffrey",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is dope!!!",
    },
    {
      id: 124,
      username: "Jeffrey",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is dope!!!",
    },
    {
      id: 125,
      username: "Jeffrey",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is dope!!!",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
