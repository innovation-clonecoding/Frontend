import React from 'react';
import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'

const DetailAccount = () => {
  return (
    <StyledDiv>
      <StyledFlexDiv>
      <StyledImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt=''/>
      <div>
        <div>UserName</div>
        <div>Introduction</div>
      </div>
      </StyledFlexDiv>
      <hr style={{"height":".75px", "backgroundColor":"#b2bbc4", "border":"none"}}/>
      <StyledFlexDiv>
      <AiFillGithub/><GrMail/>
      </StyledFlexDiv>
    </StyledDiv>
  );
};

export default DetailAccount;

const StyledDiv = styled.div`
  border: 1px solid green;
  `
const StyledFlexDiv = styled.div`
display: flex;
`
const StyledImg=styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  
`