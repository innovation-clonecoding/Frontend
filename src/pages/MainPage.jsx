import { apis } from "api/api";
import NavBar from "components/navbar/NavBar";
import React, { useEffect, useState } from "react";

function MainPage() {
	const [postList, setPostList] = useState();

	useEffect(() => {
		apis.getPost().then((response) => setPostList(response.data));
	}, []);

	console.log(postList);

	return (
		<>
			<div className="relative z-0 h-full bg-gray-50">
				<NavBar />
				<div className="w-[1728px] w-min-[800px] ml-auto mr-auto grid grid-cols-5 gap-8 mt-10 z-0">
					{postList &&
						postList.map((post) => (
							<div className="relative flex flex-col m-auto bg-white border-2 shadow-xl w-80 h-96 rounded-xl hover:-translate-y-3 hover:duration-500">
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
								<div className="absolute flex items-center w-full h-auto ml-4 text-sm text-gray-500 bottom-2">
									by&nbsp;
									<div className="font-bold text-black">{post.nickname}</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default MainPage;
