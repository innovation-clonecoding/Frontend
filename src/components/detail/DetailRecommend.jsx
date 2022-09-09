import React from 'react';
import styled from 'styled-components';

const DetailRecommend = () => {
  return (
    <StyledDiv>
      <div>
      이전포스트
      </div>
    <div>
      <div><StyledImg src='https://velog.velcdn.com/images/danchoi/post/d0e77ac1-d191-4ee5-8787-5e457f3445e6/image.jpeg' alt=''/></div>
    </div>
    </StyledDiv>
  );
};

export default DetailRecommend;

const StyledDiv = styled.div`
  
`
const StyledImg = styled.img`
width: 45vw;
height: 30vh;
  
`