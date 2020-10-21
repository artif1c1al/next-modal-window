import { Wrapper, ArticleHeader, ArticleImg, ArticleContent } from "./styled";
import HomeButton from "./HomeButton";
import { useRouter } from "next/router";

export default function ArticlePage({ posts }) {
  const {
    query: { id },
  } = useRouter();

  const { articles } = posts;

  let article = articles.filter((article) => article?.publishedAt === id);
  article = article[0];

  return (
    <Wrapper>
      <ArticleHeader>{article.title}</ArticleHeader>
      <ArticleImg src={article.urlToImage} />
      <ArticleContent>{article.content}</ArticleContent>
      <HomeButton />
    </Wrapper>
  );
}
