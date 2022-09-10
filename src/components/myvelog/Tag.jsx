import React from "react";
import { TagContainer, ChooseTag, NotChooseTag } from "./styles";

function Tag() {
  return (
    <TagContainer>
      <ChooseTag>전체보기 (개수)</ChooseTag>
      <NotChooseTag>react (개수)</NotChooseTag>
    </TagContainer>
  );
}

export default Tag;
