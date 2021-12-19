import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import Search from './Search';

const PostList = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-gap: 20px;
  margin-top: 20px;
`;

const MinimalMenu = styled.div`
  position: fixed;
  border: 1px solid #eaeaea;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  width: 50%;
`;
const Header = styled.header`
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #eaeaea;

`;
const ContentSide = () => (
  <Container>
    <Header>
      <MinimalMenu>
        <Search />
      </MinimalMenu>
    </Header>
    <PostList>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
      <PostCard>Articles</PostCard>
    </PostList>
  </Container>
);

export default ContentSide;
