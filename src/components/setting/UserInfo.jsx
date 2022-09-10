import React from "react";
import {
  ProfileBox,
  ProfileImage,
  ProfileInfo,
  Image,
  UploadButton,
  DeleteButton,
  H2,
  Ptag,
  UpdateButton,
} from "./styles";

function UserInfo() {
  return (
    <ProfileBox>
      <ProfileImage>
        <Image src="http://file3.instiz.net/data/file3/2018/03/15/a/9/9/a999fc50792aefcc8fc2a550bd52f82d.jpg" />
        <UploadButton>이미지 업로드</UploadButton>
        <DeleteButton>이미지 제거</DeleteButton>
      </ProfileImage>
      <ProfileInfo>
        <H2>닉네임</H2>
        <Ptag>한 줄 소개</Ptag>
        <UpdateButton>수정</UpdateButton>
      </ProfileInfo>
    </ProfileBox>
  );
}

export default UserInfo;
