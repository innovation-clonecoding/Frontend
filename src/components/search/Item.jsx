import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getSearchData } from "redux/modules/search";
import {
  ContentsBox,
  ContentsImage,
  H2,
  Ptag,
  TagButton,
  SubInfo,
  Span,
  Icon,
} from "../myvelog/styles";

import { UserInfoContainer, UserInfoImg, UserName, CountPost } from "./styles";

function Item({ searchData }) {
  const dispatch = useDispatch();
  const [allSearchData, setAllSearchData] = useState([]);

  useEffect(() => {
    dispatch(__getSearchData(searchData)).then((res) => {
      setAllSearchData(res.payload);
    });
  }, [dispatch, searchData]);

  let count = allSearchData.length;

  return (
    <>
      <CountPost>총 {count}개의 포스트를 찾았습니다.</CountPost>
      {allSearchData.map((item) => {
        return <ItemConponent key={item.postId} item={item} />;
      })}
    </>
  );
}

function ItemConponent({ item }) {
  const {
    postId,
    nickname,
    title,
    content,
    imgUrl,
    likesNum,
    commentsNum,
    date,
    tag,
  } = item;

  const navigate = useNavigate();

  return (
    <div>
      <UserInfoContainer>
        {/* 이미지 데이터 기본으로 유지  */}
        <UserInfoImg src={`${process.env.PUBLIC_URL}/assets/user.png`} />
        <UserName>{nickname}</UserName>
      </UserInfoContainer>
      <ContentsBox>
        {/* [내 벨로그] 게시글 이미지 */}
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/detail/${postId}`)}
        >
          <div
            style={{
              paddingTop: "52.356%",
              marginBottom: "1rem",
              width: "100%",
              position: "relative",
            }}
          >
            <ContentsImage src="https://reactjs-kr.firebaseapp.com/logo-og.png" />
          </div>
        </a>
        {/* [내 벨로그] 게시글 타이틀 */}
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/detail/${postId}`)}
        >
          {" "}
          <H2>{title}</H2>
        </a>
        {/* [내 벨로그] 본문 내용 2줄 정도 가져와야 함 */}
        <Ptag>{content}</Ptag>
        {/* [내 벨로그] 본문 밑 태그 */}
        <div style={{ marginBottom: "-0.5rem" }}>
          {tag.map((item, index) => (
            <TagButton key={index}>{item}</TagButton>
          ))}
        </div>
        {/* [내 벨로그] 00일전, 0개의 댓글, 하트 개수 */}
        <SubInfo>
          <Span>{date}</Span>
          <Span>{commentsNum}</Span>
          <Icon src={`${process.env.PUBLIC_URL}/assets/heart.png`} />
          <Span>{likesNum}</Span>
        </SubInfo>
      </ContentsBox>
    </div>
  );
}

export default Item;
