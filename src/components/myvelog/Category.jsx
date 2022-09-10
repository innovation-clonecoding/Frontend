import React from "react";
import {
  CategoryContainer,
  CategoryList,
  CategoryItem,
  CategoryLine,
} from "./styles";

function Cateory() {
  return (
    <CategoryContainer>
      <CategoryList>
        <CategoryItem>글</CategoryItem>
        <CategoryLine />
      </CategoryList>
    </CategoryContainer>
  );
}

export default Cateory;
