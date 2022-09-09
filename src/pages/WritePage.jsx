import React from 'react';
import Write from '../components/write/Write';
import WriteShow from '../components/write/WriteShow';
import styled from 'styled-components';

const WritePage = () => {
  return (
    <StyledDiv>
      <Write/>
      <WriteShow/>
    </StyledDiv>
  );
};

export default WritePage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`