import Router from "next/router";
import {
  PostHeader,
  Subtitle,
  Author,
  PostImg,
  StyledPost,
  PostBottom,
} from "../components/styled";

export default function Post({ post }) {
  const imgDefault = "https://www.svgrepo.com/show/234313/bitcoin.svg";

  const goToId = () => {
    Router.push(`post/${post.publishedAt}`);
  };
  return (
    <StyledPost onClick={goToId}>
      <PostHeader>{post.title}</PostHeader>
      <Subtitle>{post.description}</Subtitle>
      <PostBottom>
        <Author>{post.author}</Author>
      </PostBottom>
      <PostImg src={post.urlToImage || imgDefault} />
    </StyledPost>
  );
}
