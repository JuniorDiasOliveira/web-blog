import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 13rem;
  height: 2rem;
  border-radius: 0.50rem;
  justify-content: space-around;
  align-items: center;
  padding-left: 2px;
  > i:hover {
    color: #6969d4;
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  border: none;
  width: 80%;
  height:60%;
  outline: none;
  color: #6969d4;
`;

const Search = () => (
  <Container>
    <SearchInput type="text" />
    <i className="fas fa-search" />
  </Container>
);

export default Search;
