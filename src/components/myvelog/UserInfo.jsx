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
    userApis.getUserInfo().then((res) => {
      setImgUrl(res.data.imgUrl);
      setNickName(res.data.nickname);
      setIntroduction(res.data.introduction);
    });
  }, []);

  console.log("introduction", introduction);
  return (
    <Container>
      <UserInfoContainer>
        <>
          {imgUrl ? (
            <Image src={imgUrl} />
          ) : (
            <Image src={`${process.env.PUBLIC_URL}/assets/user.png`} />
          )}
        </>
        <Description>
          <UserNicknName>{nickName}</UserNicknName>
          <Introduction>{introduction}</Introduction>
        </Description>
      </UserInfoContainer>
    </Container>
  );
}

export default UserInfo;
