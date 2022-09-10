import React from "react";
import { Box, SearchBox, SearchInput } from "./styles";

function Search() {
  return (
    <>
      <Box>
        <SearchBox>
          <img
            src={process.env.PUBLIC_URL + "./assets/search.png"}
            width="20px"
            height="20px"
          />
          <SearchInput placeholder="검색어를 입력하세요" />
        </SearchBox>
      </Box>
    </>
  );
}

export default Search;
