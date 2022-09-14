import useInput from "hooks/useInput";
import React from "react";
import { ParentBox, ChildBox, SearchBox, SearchInput } from "./styles";
import Item from "./Item";

function Search() {
  const [searchData, setSearchData, onSearch] = useInput();
  console.log("searchData", searchData);
  return (
    <>
      <ParentBox>
        <ChildBox>
          <SearchBox>
            <img
              src={process.env.PUBLIC_URL + "./assets/search.png"}
              width="20px"
              height="20px"
            />
            <SearchInput
              placeholder="검색어를 입력하세요"
              name="search"
              value={searchData}
              onChange={onSearch}
            />
          </SearchBox>
          {searchData ? <Item searchData={searchData} /> : <></>}
        </ChildBox>
      </ParentBox>
    </>
  );
}

export default Search;
