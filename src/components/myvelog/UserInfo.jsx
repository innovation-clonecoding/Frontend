import { userApis } from "api/userApi";
import React, { useEffect, useState } from "react";
import {
  Container,
  UserInfoContainer,
  Image,
  Description,
  UserNicknName,
  Introduction,
} from "./styles";

function UserInfo() {
  const [nickName, setNickName] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [introduction, setIntroduction] = useState();

  useEffect(() => {
    // userApis.getUserInfo().then((res) => console.log("res", res));
  });
  return (
    <Container>
      <UserInfoContainer>
        <Image src="http://file3.instiz.net/data/file3/2018/03/15/a/9/9/a999fc50792aefcc8fc2a550bd52f82d.jpg" />
        <Description>
          <UserNicknName>{nickName}</UserNicknName>
          <Introduction>{introduction}</Introduction>
        </Description>
      </UserInfoContainer>
    </Container>
  );
}

export default UserInfo;
