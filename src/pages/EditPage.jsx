import React, { useState } from 'react';
import Edit from '../components/edit/Edit';
import EditShow from '../components/edit/EditShow';
import styled from 'styled-components';

const EditPage = () => {
  const [markdown, setMarkdown] = useState('')
  return (
    <StyledDiv>
      <Edit setMarkdown={setMarkdown}/>
      <EditShow markdown={markdown}/>
    </StyledDiv>
  );
};

export default EditPage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`