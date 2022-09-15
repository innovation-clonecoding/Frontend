import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavBar from "components/navbar/NavBar";
import { apis } from "api/api";

function LikePage() {
	const [postList, setPostList] = useState();
	useEffect(() => {
		apis.getLikePost().then((res) => setPostList(res.data.data));
	}, []);

	const navigate = useNavigate();
	console.log(postList);
	return (
		<>
			<div className="relative z-0 w-full h-screen bg-gray-50">
				<NavBar />
				<div className="w-[160px] ml-10 text-xl p-2 text-center border-b-2 border-black">
					좋아요한 포스트
				</div>
				<div className="w-[1728px] w-min-[800px] mt-10 ml-auto mr-auto z-0 grid grid-cols-5 gap-8">
					{postList && postList.length >= 1 ? (
						postList.map((post) => (
							<>
								<div
									className="relative flex flex-col m-auto bg-white border-2 shadow-xl w-80 h-96 rounded-xl hover:-translate-y-3 hover:duration-500"
									key={post.postId}
									onClick={() => {
										navigate(`/detail/${post.postId}`);
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
										<div className="h-10 pt-2 truncate">{post.content}</div>
									</div>
									<span className="p-4 pb-2 mt-3 text-sm text-gray-500">
										{post.date} · {post.commentsNum}개의 댓글
									</span>
									<div className="absolute flex items-center justify-between w-full h-fit bottom-2">
										<div className="ml-4 font-bold text-black">
											<span className="text-sm font-normal text-gray-500">
												{" "}
												by&nbsp;
											</span>
											{post.nickname}
										</div>
										<div className="m-0 mr-4 text-xs">🖤 {post.likesNum}</div>
									</div>
								</div>
								{/* <div ref={obsRef}></div> */}
							</>
						))
					) : (
						<div className="h-screen mt-20 text-2xl font-bold text-center">
							좋아요한 포스트가 없습니다 :(
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default LikePage;
