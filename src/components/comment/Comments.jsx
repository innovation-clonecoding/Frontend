import { apis } from "api/api";
import React, { useState, useEffect } from "react";

function Comments() {
	const [commentList, setCommentList] = useState();

	useEffect(() => {
		apis.getComment().then((response) => setCommentList(response.data));
	}, []);
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col w-[780px]">
				<div className="my-4 font-bold">
					{commentList && commentList.length}개의 댓글
				</div>
				<input
					className="p-4 pb-16 border-2 border-gray-100 rounded-lg h-28"
					placeholder="댓글을 작성하세요"
				/>
				<div className="mr-10 text-right mt-7">
					<button className="px-5 py-1 text-white rounded-lg bg-[#12b886] hover:bg-[#20C997]">
						댓글 작성
					</button>
				</div>
				<div className="flex flex-col gap-3 mt-20">
					{commentList &&
						commentList.map((comment) => (
							<>
								<div
									key={comment.commentId}
									className="flex flex-col mb-4 border-b-2 border-gray-100"
								>
									<div className="flex items-center">
										<img
											src={comment.imgUrl}
											className="text-center rounded-full w-14 h-14"
										/>
										<div className="ml-4">
											<div className="font-bold">{comment.nickname}</div>
											<div className="text-sm text-gray-400">
												{comment.date}
											</div>
										</div>
										<div className="ml-auto">
											<span className="m-2 text-sm text-gray-400">수정</span>
											<span className="text-sm text-gray-400">삭제</span>
										</div>
									</div>
									<div className="my-10" name="comment">
										{comment.content}
									</div>
								</div>
							</>
						))}
				</div>
			</div>
		</div>
	);
}

export default Comments;
