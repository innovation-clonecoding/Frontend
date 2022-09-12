import React from "react";
import styled from "styled-components";

const DetailComment = () => {
  return (
    <StyledDiv>
      <StyledInnerDiv>
          <StyledImg
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="img"
          />
        <StyledFlexDiv>
          <StyledCommentInfo>
            <StyledText className="userName">userName</StyledText>
            <StyledText>date</StyledText>
          </StyledCommentInfo>
          <StyledButtonDiv>
            <StyledButton>수정</StyledButton>
            <StyledButton>삭제</StyledButton>
          </StyledButtonDiv>
        </StyledFlexDiv>
      </StyledInnerDiv>
      <div>
        <div>content</div>
      </div>
    </StyledDiv>
  );
};

export default DetailComment;

const StyledDiv = styled.div`
  padding: 1.5rem 0;
`;
const StyledInnerDiv = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
`;
const StyledImg = styled.img`
  height: 3.375rem;
  width: 3.375rem;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`;
const StyledFlexDiv = styled.div`
width: 90%;
  display: flex;
  justify-content: space-between;
`;

const StyledCommentInfo = styled.div`
  margin-left: 1rem;
  line-height: 1;
  .userName {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
const StyledButtonDiv = styled.div`
`;
const StyledText = styled.div``;
const StyledButton = styled.button`
  margin: 6px;
  font-size: 17px;
`;
