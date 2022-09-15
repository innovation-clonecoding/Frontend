import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavBar from "components/navbar/NavBar";
import { apis } from "api/api";

function LikePage() {
	const [postList, setPostList] = useState();
	useEffect(() => {
		apis.getLikePost().then((res) => setPostList(res.data.data));
	});

	const navigate = useNavigate();

	return (
		<>
			<div className="relative z-0 w-full h-full bg-gray-50">
				<NavBar />
				<div className="w-[1728px] w-min-[800px] ml-auto mr-auto grid grid-cols-5 gap-8 mt-10 z-0">
					<div className="w-[140px] ml-10 text-xl p-2 text-center border-b-2 border-black">
						좋아한 포스트
					</div>
					{postList && postList.length > 1 ? (
						postList.map((post) => (
							<>
								<div
									className="relative flex flex-col m-auto bg-white border-2 shadow-xl w-80 h-96 rounded-xl hover:-translate-y-3 hover:duration-500"
									key={post.postId}
									onClick={() => {
										navigate(`detail/${post.postId}`);
									}}
								>
									{post.imgUrl && (
										<img
											src={post.imgUrl}
											className="w-full rounded-t-lg h-1/2"
										></img>
									)}

									<div className="flex flex-col p-4">
										<div className="text-xl font-bold">{post.title}</div>
										<div className="pt-2">{post.content}</div>
									</div>
									<span className="p-4 pb-2 mt-3 text-sm text-gray-500">
										{post.date} · {post.commentsNum}개의 댓글
									</span>
									<div className="absolute flex items-center w-full ml-4 text-sm text-gray-500 h-fit bottom-2">
										by&nbsp;
										<div className="font-bold text-black">{post.nickname}</div>
									</div>
								</div>
								{/* <div ref={obsRef}></div> */}
							</>
						))
					) : (
						<div>좋아요한 게시글이 없습니다.</div>
					)}
				</div>
			</div>
		</>
	);
}

export default LikePage;
