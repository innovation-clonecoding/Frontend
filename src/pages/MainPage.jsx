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
			<div className="relative z-0 h-screen bg-gray-50">
				<NavBar />
				<div className="w-[1728px] w-min-[800px] ml-auto mr-auto grid grid-cols-5 gap-8 mt-10 z-0">
					{postList &&
						postList.map((post) => (
							<div className="flex flex-col m-auto bg-white border-2 shadow-xl w-80 h-96 rounded-xl hover:-translate-y-3 hover:duration-500">
								<img
									src={post.imgUrl}
									className="w-full rounded-t-lg h-1/2"
								></img>
								<div className="flex flex-col p-4">
									<div className="text-xl font-bold">{post.title}</div>
									<div className="pt-2">{post.content}</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default MainPage;
