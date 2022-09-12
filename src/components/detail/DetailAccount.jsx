import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const DetailAccount = ({profileUrl, nickname, introduction}) => {

  const handleImgError =(e)=>{
    e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }

  return (
    <StyledDiv>
      <StyledFlexDiv>
        <StyledImg
          src={profileUrl}
          onError={handleImgError}
          alt="profile_img"
        />
        <StyledUserInfo>
          <StyledUserName>{nickname}</StyledUserName>
          <StyledIntroduction>{introduction}</StyledIntroduction>
        </StyledUserInfo>
      </StyledFlexDiv>
      <StyledHr />
      <StyledIconDiv>
        <StyledIcon>
        <AiFillGithub />
        </StyledIcon>
        <StyledIcon>
        <GrMail />
        </StyledIcon>
      </StyledIconDiv>
    </StyledDiv>
  );
};

export default DetailAccount;

const StyledDiv = styled.div`
`;
const StyledFlexDiv = styled.div`
  display: flex;
`;
const StyledImg = styled.img`
  margin: 20px 10px 20px 0;
  height: 128px;
  width: 128px;
  border-radius: 50%;
  object-fit: cover;
`;
const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 1rem;
`;
const StyledUserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #212529;
`;
const StyledIntroduction = styled.p`
  color: #485056;
  font-size: 18px;
`;
const StyledHr = styled.hr`
  height: 0.75px;
  background-color: #E9ECEF;
  border: none;
`;
const StyledIconDiv = styled.div`
  display: flex;
  `
const StyledIcon = styled.div`
font-size: 32px;
width:32px;
height: 32px;
margin: 15px 10px 15px 0;
color: #858E96;
&:hover{
  color: #212529;
}
`