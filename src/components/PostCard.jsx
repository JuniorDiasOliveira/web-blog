import React from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  height: 15rem;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.03);
  }
`;

const PostTitle = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;
const PostDescription = styled.div`
  font-size: 1rem;
`;

const PostDate = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const PostCard = (props) => (
  <Container>
    <PostTitle>Junior Oliveira Post test</PostTitle>
    <PostDate>2021/08/01</PostDate>
    <PostDescription>
      <LinesEllipsis
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum"
        maxLine={4}
      />

    </PostDescription>
  </Container>
);

PostCard.propTypes = {};

export default PostCard;
