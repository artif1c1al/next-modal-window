import {
  Wrapper,
  PostHeader,
  Subtitle,
  Author,
  CreationDate,
  PostImg,
} from "../components/styled";

export default function Index() {
  return (
    <div className="App">
      <Wrapper>
        <PostHeader>News</PostHeader>
        <Subtitle>How are you?</Subtitle>
        <Author>Ivan Ivanov</Author>
        <CreationDate>Oct 15 </CreationDate>
        <PostImg src="https://miro.medium.com/max/750/0*pGHUnhhI9fiv3RcS.jpg" />
      </Wrapper>
    </div>
  );
}
