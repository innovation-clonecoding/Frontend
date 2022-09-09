import React, { useState } from 'react';
import Write from '../components/write/Write';
import WriteShow from '../components/write/WriteShow';
import styled from 'styled-components';

const WritePage = () => {
  const [markdown, setMarkdown] = useState('')
  return (
    <StyledDiv>
      <Write setMarkdown={setMarkdown}/>
      <WriteShow markdown={markdown}/>
    </StyledDiv>
  );
};

export default WritePage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`