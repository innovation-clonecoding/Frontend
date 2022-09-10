import Dropdown from "components/dropdown/Dropdown";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function NavBar() {
	const [dropdownVisibility, setDropdownVisibility] = useState(false);

	return (
		<>
			<div className="h-[64px] grid">
				<div className="flex">
					<h1 className="flex-grow ml-20 font-bold text-[30px] mt-2">velog</h1>
					<div className="flex gap-4 mr-20">
						<button>
							<FiSearch className="w-6 h-6" />
						</button>
						<button className="p-2 m-auto text-white duration-200 bg-black border-2 hover:bg-white hover:text-black rounded-3xl ">
							새 글 작성
						</button>
						<button className="w-20 p-2 m-auto text-white bg-black border-2 rounded-3xl ">
							로그인
						</button>
						<button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
							{dropdownVisibility ? "Close" : "Open"}
						</button>
					</div>
				</div>
			</div>
			<Dropdown visibility={dropdownVisibility}>
				<div className="relative z-10">
					<div className="h-10 hover:bg-white">로그아웃</div>
					<div className="h-10">내 벨로그</div>
				</div>
			</Dropdown>
		</>
	);
}

export default NavBar;