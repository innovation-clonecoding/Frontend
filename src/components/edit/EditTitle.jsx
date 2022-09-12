import React from 'react';
import styled from 'styled-components';
import WriteToolBox from './EditToolBox';

const EditTitle = () => {
  return (
    <StyledDiv>
      <div>
        <StyledTitleInput placeholder='제목을 입력하세요' defaultValue={"기존 제목이 이곳에 들어갑니다"}/>
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

export default EditTitle;

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
font-size: 44px;
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