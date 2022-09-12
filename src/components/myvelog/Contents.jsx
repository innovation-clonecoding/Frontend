import React from "react";
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

function Contents() {
  return (
    <div>
      <ContentsBox>
        {/* [내 벨로그] 게시글 이미지 */}
        <a style={{ color: "inherit", textDecoration: "none" }}>
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
        <a style={{ color: "inherit", textDecoration: "none" }}>
          {" "}
          <H2>[WIL] 회고</H2>
        </a>
        {/* [내 벨로그] 본문 내용 2줄 정도 가져와야 함 */}
        <Ptag>설명을 가져오세요</Ptag>
        {/* [내 벨로그] 본문 밑 태그 */}
        <div style={{ marginBottom: "-0.5rem" }}>
          <TagButton>WIL</TagButton>
        </div>
        {/* [내 벨로그] 00일전, 0개의 댓글, 하트 개수 */}
        <SubInfo>
          <Span>00일 전</Span>
          <Span>0개 댓글</Span>
          <Icon src={`${process.env.PUBLIC_URL}/assets/heart.png`} />
          <Span>[하트개수]</Span>
        </SubInfo>
      </ContentsBox>
    </div>
  );
}

export default Contents;
