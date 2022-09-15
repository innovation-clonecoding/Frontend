import React from "react";
import UserInfo from "./UserInfo";
import Cateory from "./Category";
import Tag from "./Tag";
import Contents from "./Contents";
import { Box, DivisonContainer } from "./styles";

function Myvelog() {
  return (
    <>
      <Box>
        {/* [내 벨로그] 사용자 소개 */}
        <UserInfo />
        <DivisonContainer />
        {/* [내 벨로그] 글 카테고리 */}
        <Cateory />
        {/* [내 벨로그] 테그 카테고리 */}
        <Tag />
        {/* [내 벨로그] 컨텐츠 목록 */}
        {/* <Contents /> */}
      </Box>
    </>
  );
}

export default Myvelog;
