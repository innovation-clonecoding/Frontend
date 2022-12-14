import { apis } from "api/api";
import { userApis } from "api/userApi";
import useInput from "hooks/useInput";
import React, { useState, useEffect } from "react";

function Comments({ commentList, postId }) {
	const [nickname, setNickName] = useState();
	const [selectComment, setSelectComment] = useState();
	const [onEdit, setOnEdit] = useState(false);

	const [comment, setComment, commentHandler] = useInput();
	const [editInput, setEditInput, editInputHandler] = useInput();
	// const editInput = useInput("");

	useEffect(() => {
		userApis.getUserInfo().then((res) => setNickName(res.data.nickname));
	}, []);

	const addComment = () => {
		apis
			.postComment(postId, comment)
			.then(setComment(""))
			.then(alert("댓글이 작성되었습니다."));
	};
	const editComment = (commentId) => {
		apis
			.editComment(postId, editInput, commentId)
			.then((res) => console.log(res))
			.then(alert("댓글이 수정되었습니다."));
	};

	const deleteComment = (commentId) => {
		apis
			.deleteComment(commentId)
			.then((res) => console.log(res), alert("댓글이 삭제되었습니다."));
	};

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col w-[780px]">
				<div className="my-4 font-bold">
					{commentList && commentList.length}개의 댓글
				</div>
				<input
					className="p-4 pb-16 border-2 border-gray-100 rounded-lg h-28"
					placeholder="댓글을 작성하세요"
					value={comment}
					onChange={commentHandler}
				/>
				<div className="mr-10 text-right mt-7">
					<button
						className="px-5 py-1 text-white rounded-lg bg-[#12b886] hover:bg-[#20C997]"
						onClick={() => {
							addComment();
						}}
					>
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
											src={comment.profileUrl}
											className="text-center rounded-full w-14 h-14"
										/>
										<div className="ml-4">
											<div className="font-bold">{comment.nickname}</div>
											<div className="text-sm text-gray-400">
												{comment.date}
											</div>
										</div>
										{nickname == comment.nickname ? (
											<div className="ml-auto">
												<span
													className="m-2 text-sm text-gray-400"
													onClick={() => {
														setOnEdit(!onEdit);
														setSelectComment(comment.commentId);
													}}
												>
													수정
												</span>
												<span
													className="text-sm text-gray-400"
													onClick={() => {
														deleteComment(comment.commentId);
													}}
												>
													삭제
												</span>
											</div>
										) : null}
									</div>
									{onEdit && comment.commentId === selectComment ? (
										<>
											<input
												className="p-4 pb-16 border-2 border-gray-100 rounded-lg h-28"
												placeholder="댓글을 작성하세요"
												value={editInput}
												onChange={editInputHandler}
											/>
											<div className="py-4 mr-10 text-right">
												<button
													className="px-5 py-1 text-white rounded-lg bg-[#12b886] hover:bg-[#20C997]"
													onClick={() => {
														editComment(comment.commentId);
													}}
												>
													댓글 수정
												</button>
											</div>
										</>
									) : (
										<div className="my-10" name="comment">
											{comment.content}
										</div>
									)}
								</div>
							</>
						))}
				</div>
			</div>
		</div>
	);
}

export default Comments;
