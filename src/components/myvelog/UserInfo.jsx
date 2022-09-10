import React from "react";
import {
  Container,
  UserInfoContainer,
  Image,
  Description,
  UserNicknName,
  Introduction,
} from "./styles";

function UserInfo() {
  return (
    <Container>
      <UserInfoContainer>
        <Image src="http://file3.instiz.net/data/file3/2018/03/15/a/9/9/a999fc50792aefcc8fc2a550bd52f82d.jpg" />
        <Description>
          <UserNicknName>NickName</UserNicknName>
          <Introduction>한 줄 소개</Introduction>
        </Description>
      </UserInfoContainer>
    </Container>
  );
}

export default UserInfo;
