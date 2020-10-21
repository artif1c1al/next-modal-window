import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  height: 100vh;
`;

export const Post = styled.div`
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
`;

export const PostAdditionalInfo = styled.p`
  color: #777;
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
  background-color: #cacaca;

  font-size: 20px;
  &:hover {
    background-color: #ddd;
  }
`;
