import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
`;

export const StyledPost = styled.div`
  height: 100px;
  display: grid;
  grid-template-areas:
    "header img"
    "subtitle img"
    "bottom img";
  grid-template-columns: 1fr 100px;
  grid-template-rows: auto;
  background-color: #fcfcfc;
  margin-bottom: 20px;

  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ccc;
  }
`;

export const PostHeader = styled.h2`
  font-size: 40px;
  grid-area: header;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostAdditionalInfo = styled.p`
  color: #777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Subtitle = styled(PostAdditionalInfo)`
  font-size: 20px;
  grid-area: subtitle;
`;

export const Author = styled(PostAdditionalInfo)`
  margin-right: 20px;
`;

export const CreationDate = styled(PostAdditionalInfo)``;

export const PostImg = styled.img`
  height: 100%;
  grid-area: img;
`;

export const PostBottom = styled.div`
  grid-area: bottom;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #ddd;

  font-size: 20px;
  &:hover {
    background-color: #eee;
  }
`;

export const ArticleHeader = styled.h1`
  margin-bottom: 25px;
`;

export const ArticleImg = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

export const ArticleContent = styled.p`
  font-size: 22px;
  margin-bottom: 30px;
`;
