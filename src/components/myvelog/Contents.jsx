import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContentsBox,
  ContentsImage,
  H2,
  Ptag,
  TagButton,
  SubInfo,
  Span,
  Icon,
} from "./styles";

function Contents({ item }) {
  const navigate = useNavigate();
  const { commentsNum, content, date, imgUrl, likesNum, postId, tag, title } =
    item;
  return (
    <div>
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
          {imgUrl ? (
            <div
              style={{
                paddingTop: "52.356%",
                marginBottom: "1rem",
                width: "100%",
                position: "relative",
              }}
            >
              <ContentsImage src={imgUrl} />
            </div>
          ) : (
            <></>
          )}
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
          <Span>{commentsNum}개 댓글</Span>
          <Icon src={`${process.env.PUBLIC_URL}/assets/heart.png`} />
          <Span>{likesNum}</Span>
        </SubInfo>
      </ContentsBox>
    </div>
  );
}

export default Contents;
