import Post from "./Post";

export default function ShowPosts({ posts }) {
  // console.log(posts);
  return posts.map((el, i) => <Post post={el} key={i} />);
}
