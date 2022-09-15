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
  const [allPost, setAllPost] = useState();
  const [isAllTag, setIsAllTag] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTag(nickName)).then((res) => {
      setAllPost(res.payload.postList);
      setTag(res.payload.tagList);
      setTagNum(res.payload.numOfTagList);
    });
    setIsAllTag(true);
  }, [dispatch]);

  const onTagClick = (index, nickName, tagName) => {
    setIsAllTag(false);
    userApis.getTagData(nickName, tagName).then((res) => {
      setMyPost(res);
    });
    setActive(index);
    setTagName(tagName);
  };

  const onAllClick = () => {
    setIsAllTag(true);
  };

  return (
    <>
      <TagContainer>
        {/* [내 벨로그] 전체 게시글 조회*/}
        <ChooseTag
          style={
            isAllTag
              ? { background: "#12b886", color: "white" }
              : { background: "#f8f9fa" }
          }
          onClick={() => onAllClick()}
        >
          전체보기 ({allPost?.length})
        </ChooseTag>
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
              isAllTag={isAllTag}
            />
          );
        })}
      </TagContainer>
      {/* [내 벨로그] isAllTag true/false에 따라서 전체 게시글 or 특정 태그 게시글 */}
      {isAllTag
        ? allPost?.map((item, index) => {
            return <Contents key={index} item={item} />;
          })
        : myPost?.map((item, index) => {
            return <Contents key={index} item={item} />;
          })}
    </>
  );
}

function TagComponent({
  index,
  item,
  nickName,
  tagNum,
  onTagClick,
  active,
  isAllTag,
}) {
  return (
    <>
      <NotChooseTag
        onClick={() => onTagClick(index, nickName, item, active)}
        style={
          active === index && !isAllTag
            ? { background: "#12b886", color: "white" }
            : { background: "#f8f9fa" }
        }
      >
        {item} ({tagNum})
      </NotChooseTag>
    </>
  );
}

export default Tag;
