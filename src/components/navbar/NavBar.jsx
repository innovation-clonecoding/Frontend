import { userApis } from "api/userApi";
import Dropdown from "components/dropdown/Dropdown";
import ShowModal from "components/modal/ShowModal";
import useChange from "hooks/useChange";
import useDecodeToken from "hooks/useDecodeToken";
import useToken from "hooks/useToken";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();
	const [dropdownVisibility, setDropdownVisibility] = useState(false);
	const [isModal, ModalHandler] = useChange();
	const token = useToken();
	const nickName = useDecodeToken(token);

	const onLogout = () => {
		userApis.logout().then((res) => {
			if (res.msg === "로그아웃 되었습니다.") {
				alert("로그아웃 완료!");
				navigate("/");
			}
		});
	};

	return (
		<>
			<div className="h-[64px] w-full grid">
				<div className="flex justify-between">
					<div
						className="ml-20 font-bold text-[30px] mt-2 hover:cursor-pointer"
						onClick={() => {
							navigate("/");
						}}
					>
						<div className="hover:cursor-pointer">velog</div>
					</div>
					<div className="flex gap-4 mr-20">
						<button>
							<FiSearch
								className="w-6 h-6"
								onClick={() => navigate("/search")}
							/>
						</button>
						{!token ? (
							<>
								<button
									className="w-20 p-2 m-auto text-white bg-black border-2 rounded-3xl "
									onClick={() => ModalHandler()}
								>
									로그인
								</button>
								<ShowModal show={isModal} modalHandler={ModalHandler} />
							</>
						) : (
							<>
								<button
									className="p-2 m-auto text-white duration-200 bg-black border-2 hover:bg-white hover:text-black rounded-3xl "
									onClick={() => {
										navigate("/write");
									}}
								>
									새 글 작성
								</button>
								<button
									onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
								>
									{dropdownVisibility ? "Close" : "Open"}
								</button>
								<Dropdown visibility={dropdownVisibility}>
									<div className="">
										<div
											className="flex flex-col items-center justify-center h-10 hover:bg-slate-200 hover:text-green-500"
											onClick={() => onLogout()}
										>
											로그아웃
										</div>
										<div
											className="flex flex-col items-center justify-center h-10 hover:bg-slate-200 hover:text-green-500"
											onClick={() => navigate(`/myvelog/${nickName}`)}
										>
											내 벨로그
										</div>
										<div
											className="flex flex-col items-center justify-center h-10 hover:bg-slate-200 hover:text-green-500"
											onClick={() => navigate("/like")}
										>
											좋아요한 포스트
										</div>
									</div>
								</Dropdown>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
