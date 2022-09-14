import DetailAccount from "components/detail/DetailAccount";
// import DetailComment from "components/detail/DetailComment";
import DetailContent from "components/detail/DetailContent";
import DetailRecommend from "components/detail/DetailRecommend";
import DetailTitle from "components/detail/DetailTitle";
import styled from "styled-components";
import React from "react";
import NavBar from "components/navbar/NavBar";
import DetailFixedButton from "components/detail/DetailFixedButton";
import Comments from "components/comment/Comments";
// import Comments from "components/comment/Comments";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { userApis } from "api/userApi";
import { useDispatch } from "react-redux";
import { __getLikes, __getDetailData } from "redux/modules/likes";

const DetailPage = () => {
  const { postId } = useParams();
  const [detail, setDetail] = useState(null);
  const [like, setLike] = useState();
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  /* 기존 데이터 get 코드 */
  //   const getData = async () => {
  //     await axios.get(`http://15.164.163.50:8080/post/${postId}`).then((res) => {
  //       setDetail(res);
  //     });
  //   };

  //   const post = detail?.data.data;

  /* 수정 get 코드 */
  const post = detail;

  useEffect(() => {
    /* 기존 데이터 get 코드 */
    // getData();

    /* 수정 get 코드 */
    dispatch(__getDetailData(postId)).then((res) => {
      setDetail(res.payload);
      setLike(res.payload.likesNum);
    });
  }, [dispatch]);

  const onLikesClick = () => {
    const data = {
      postId: postId,
    };
    userApis.likes(data).then((res) => {
      const str = String(res.msg);
      if (str.includes("완료") === true) {
        setLike(like + 1);
        // setIsLike(true);
        localStorage.setItem("isLike", true);
      } else {
        setLike(like - 1);
        // setIsLike(false);
        localStorage.setItem("isLike", false);
      }
    });
  };

  return (
    <>
      <NavBar />
      <StyledDiv>
        <DetailFixedButton
          like={like}
          //   isLike={isLike}
          onLikesClick={onLikesClick}
        />
        <StyledInnerDiv>
          <DetailTitle {...post} />
          <DetailContent {...post} />
          <DetailAccount {...post} />
          <DetailRecommend {...post} />
          <Comments />
        </StyledInnerDiv>
      </StyledDiv>
    </>
  );
};

export default DetailPage;

const StyledInnerDiv = styled.div`
  width: 768px;
  margin: 5rem auto 0px;
  height: 95vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledDiv = styled.div``;
