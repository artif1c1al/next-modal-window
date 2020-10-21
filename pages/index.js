import Router from "next/router";
import Head from "next/head";

import {
  Wrapper,
  PostHeader,
  Subtitle,
  Author,
  CreationDate,
  PostImg,
  Post,
  PostBottom,
} from "../components/styled";

const goToId = () => {
  Router.push("post/1777");
};

export default function Index({ json }) {
  console.log(json);
  return (
    <div className="App">
      <Head>
        <meta name="keywords" content="medium, bolet jormal, new york times" />
        <meta name="description" content="posts" />
      </Head>
      <Wrapper>
        <Post onClick={goToId}>
          <PostHeader>News</PostHeader>
          <Subtitle>How are you?</Subtitle>
          <PostBottom>
            <Author>Ivan Ivanov</Author>
            <CreationDate>Oct 15 </CreationDate>
          </PostBottom>
          <PostImg src="https://miro.medium.com/max/750/0*pGHUnhhI9fiv3RcS.jpg" />
        </Post>
        <Post>
          <PostHeader>News</PostHeader>
          <Subtitle>How are you?</Subtitle>
          <PostBottom>
            <Author>Ivan Ivanov</Author>
            <CreationDate>Oct 15 </CreationDate>
          </PostBottom>
          <PostImg src="https://miro.medium.com/max/750/0*pGHUnhhI9fiv3RcS.jpg" />
        </Post>
        <Post>
          <PostHeader>News</PostHeader>
          <Subtitle>How are you?</Subtitle>
          <PostBottom>
            <Author>Ivan Ivanov</Author>
            <CreationDate>Oct 15 </CreationDate>
          </PostBottom>
          <PostImg src="https://miro.medium.com/max/750/0*pGHUnhhI9fiv3RcS.jpg" />
        </Post>
      </Wrapper>
    </div>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    "http://newsapi.org/v2/top-headlines?country=ru&apiKey=API_KEY"
  );
  const json = await res.json();
  return { json };
};
