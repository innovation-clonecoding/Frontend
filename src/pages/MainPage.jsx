import { apis } from "api/api";
import NavBar from "components/navbar/NavBar";
import React, { useEffect, useState, useRef, useCallback } from "react";

function MainPage() {
	const [postList, setPostList] = useState();
	const [page, setPage] = useState(1);
	const preventRef = useRef(true);
	const obsRef = useRef(null);
	const endRef = useRef(false);

	useEffect(() => {
		apis.getPost().then((response) => setPostList(response.data));
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
		if (obsRef.current) observer.observe(obsRef.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	// useEffect(() => {
	// 	if (page !== 1) getPost();
	// }, [page]);

	const obsHandler = (entries) => {
		const target = entries[0];
		if (!endRef.current && target.isIntersecting && preventRef.current) {
			preventRef.current = false;
			setPage((prev) => prev + 1);
		}
	};

	return (
		<>
			<div className="relative z-0 w-full h-full bg-gray-50">
				<NavBar />
				<div className="w-[1728px] w-min-[800px] ml-auto mr-auto grid grid-cols-5 gap-8 mt-10 z-0">
					{postList &&
						postList.map((post) => (
							<>
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
									<div className="absolute flex items-center w-full ml-4 text-sm text-gray-500 h-fit bottom-2">
										by&nbsp;
										<div className="font-bold text-black">{post.nickname}</div>
									</div>
								</div>
								{/* <div ref={obsRef}></div> */}
							</>
						))}
				</div>
			</div>
		</>
	);
}

export default MainPage;
