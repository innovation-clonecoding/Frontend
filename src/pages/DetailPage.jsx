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

const DetailPage = () => {
	const { postId } = useParams();
	const [detail, setDetail] = useState(null);
	const getData = async () => {
		await axios.get(`http://15.164.163.50:8080/post/${postId}`).then((res) => {
			setDetail(res);
		});
	};
	const post = detail?.data.data;
	console.log(post);
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<NavBar />
			<StyledDiv>
				<DetailFixedButton {...post} />
				<StyledInnerDiv>
					<DetailTitle {...post} />
					<DetailContent {...post} />
					<DetailAccount {...post} />
					<DetailRecommend {...post} />
					<Comments commentList={post?.commentsList} {...post} />
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
