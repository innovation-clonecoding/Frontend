import React from 'react';
import styled from 'styled-components';

const DetailTitle = () => {
  return (
    <StyledDiv>
      <div>Title</div>
      <div>UsetName * 2022년 9월 10일</div>
    </StyledDiv>
  );
};

export default DetailTitle;

const StyledDiv = styled.div`
  border: 1px solid gold
`