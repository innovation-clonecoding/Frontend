import useDecodeToken from "hooks/useDecodeToken";
import useToken from "hooks/useToken";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TagContainer, ChooseTag, NotChooseTag } from "./styles";
import { __getTag } from "redux/modules/likes";
import { userApis } from "api/userApi";
import Contents from "./Contents";

function Tag() {
  const token = useToken();
  const nickName = useDecodeToken(token);
  const [tag, setTag] = useState();
  const [tagNum, setTagNum] = useState();
  const [active, setActive] = useState();
  const [tagName, setTagName] = useState();
  const [myPost, setMyPost] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTag(nickName)).then((res) => {
      setTag(res.payload.tagList);
      setTagNum(res.payload.numOfTagList);
    });
  }, [dispatch]);

  const onTagClick = (index, nickName, tagName) => {
    userApis.getTagData(nickName, tagName).then((res) => {
      setMyPost(res);
    });
    setActive(index);
    setTagName(tagName);
  };

  return (
    <>
      <TagContainer>
        <ChooseTag>전체보기 ({tag?.length})</ChooseTag>
        {tag?.map((item, index) => {
          return (
            <TagComponent
              key={index}
              item={item}
              nickName={nickName}
              tagNum={tagNum[index]}
              onTagClick={onTagClick}
              index={index}
              active={active}
            />
          );
        })}
      </TagContainer>
      {/* <Contents /> */}
      {console.log("tagname", tagName)}
    </>
  );
}

function TagComponent({ index, item, nickName, tagNum, onTagClick, active }) {
  return (
    <>
      <NotChooseTag
        onClick={() => onTagClick(index, nickName, item, active)}
        style={
          active === index
            ? { background: "#12b886", color: "white" }
            : { background: "#f8f9fa" }
        }
      >
        {item} ({tagNum})
      </NotChooseTag>
      {/* {active === index } */}
    </>
  );
}

export default Tag;
