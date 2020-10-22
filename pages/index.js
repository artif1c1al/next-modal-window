import Head from "next/head";
import { Wrapper } from "../components/styled";
import ShowPosts from "../components/ShowPosts";
export default function Index({ posts }) {
  console.log(posts);
  return (
    <div className="App">
      <Head>
        <meta name="keywords" content="medium, bolet jormal, new york times" />
        <meta name="description" content="posts" />
        <title>Crypto journal</title>
      </Head>

      <Wrapper>{<ShowPosts posts={posts.articles} />}</Wrapper>
    </div>
  );
}

Index.getInitialProps = async () => {
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
