import React from "react";
import {
  Container,
  ContentBox,
  Wrapper,
  TitleWrapper,
  H3,
  ContentsWrapper,
  Contents,
  EditWrapper,
  UpdateButton,
  Description,
} from "./styles";

function UserDetail() {
  return (
    <Container>
      <ContentBox>
        <Wrapper>
          <TitleWrapper>
            <H3>벨로그 제목</H3>
          </TitleWrapper>
          <ContentsWrapper>
            <Contents>NickName.log</Contents>
            <EditWrapper>
              <UpdateButton>수정</UpdateButton>
            </EditWrapper>
          </ContentsWrapper>
        </Wrapper>
        <Description>
          포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
        </Description>
      </ContentBox>
    </Container>
  );
}

export default UserDetail;
