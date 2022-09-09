import React from 'react';
import styled from 'styled-components';
import WriteToolBox from './WriteToolBox';

const WriteTitle = () => {
  return (
    <StyledDiv>
      <div>
        <StyledTitleInput placeholder='제목을 입력하세요'/>
      </div>
      <hr style={{"height":"8px", "backgroundColor":"#495057", "border":"none", "width":"80px"}}/>
      <div className='elements'>
        <StyledTagInput placeholder='태그를 입력하세요'/>
      </div>
      <div className='elements'>
        <WriteToolBox/>
      </div>
    </StyledDiv>
  );
};

export default WriteTitle;

const StyledDiv = styled.div`
width: 100%;
.elements{
  margin: 20px auto;
}
`
const StyledTitleInput = styled.input`
font-weight: 600;
height: 7vh;
width: 100%;
border: none;
font-size: 50px;
:focus{
  outline: none;
}
::placeholder{
  color: #868E96;
}
`
const StyledTagInput = styled.input`
width: 100%;
border: none;
font-size: 25px;
font-weight: 400;
:focus{
  outline: none;
}
::placeholder{
  color: #7E7E7E;
}
`