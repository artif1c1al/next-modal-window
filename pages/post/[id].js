import Head from "next/head";
import { BackButton } from "../../components/styled";
import Router, { useRouter } from "next/router";
export default function Post() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Head>
        <meta name="keywords" content="post" />
        <meta name="description" content="This is posts from my site" />
        <title>Post {id}</title>
      </Head>
      <h1>Hello world</h1>
      <BackButton
        onClick={() => {
          Router.push("/");
        }}
      >
        Go back to Home!
      </BackButton>
    </>
  );
}
