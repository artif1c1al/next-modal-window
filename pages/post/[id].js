import Head from "next/head";
import { useRouter } from "next/router";
import HomeButton from "../../components/HomeButton";

import {
  Wrapper,
  ArticleHeader,
  ArticleImg,
  ArticleContent,
} from "../../components/styled";

export default function Post({ posts }) {
  const { query } = useRouter();
  const { articles } = posts;

  let article = articles.filter((article) => article?.publishedAt === query.id);
  article = article[0];

  return (
    <>
      <Head>
        <meta name="keywords" content="post" />
        <meta name="description" content="This is posts from my site" />
        <title>{article.title}</title>
      </Head>
      <Wrapper>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleImg src={article.urlToImage} />
        <ArticleContent>{article.content}</ArticleContent>
        <HomeButton />
      </Wrapper>
    </>
  );
}

Post.getInitialProps = async (ctx) => {
  // let url =
  //   process.env.REQUEST_ADDRESS +
  //   process.env.COUNTRY +
  //   "apiKey=" +
  //   process.env.API_KEY;
  const res = await fetch(
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-22&sortBy=publishedAt&apiKey=be189fe3c34244e2bc74025c7b4ce6f3"
  );
  const posts = await res.json();
  return { posts };
};
