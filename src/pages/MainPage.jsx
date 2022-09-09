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
			<div className="bg-gray-50 h-screen relative z-0">
				<NavBar />
				<div className="w-[1728px] w-min-[800px] ml-auto mr-auto grid grid-cols-5 gap-8 mt-10 z-0">
					{postList &&
						postList.map((post) => (
							<div className="flex flex-col border-2 w-80 h-96 m-auto rounded-xl shadow-xl bg-white hover:-translate-y-3 hover:duration-500">
								<img
									src={post.imgUrl}
									className="w-full h-1/2 rounded-t-lg"
								></img>
								<div className="flex flex-col p-4">
									<div className="font-bold text-xl">{post.title}</div>
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
