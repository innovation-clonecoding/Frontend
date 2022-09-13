import Dropdown from "components/dropdown/Dropdown";
import ShowModal from "components/modal/ShowModal";
import useChange from "hooks/useChange";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function NavBar() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [isModal, ModalHandler] = useChange();

  return (
    <>
      <div className="h-[64px] w-full grid">
        <div className="flex">
          <h1 className="flex-grow ml-20 font-bold text-[30px] mt-2">velog</h1>
          <div className="flex gap-4 mr-20">
            <button>
              <FiSearch className="w-6 h-6" />
            </button>
            <button className="p-2 m-auto text-white duration-200 bg-black border-2 hover:bg-white hover:text-black rounded-3xl ">
              새 글 작성
            </button>
            <button
              className="w-20 p-2 m-auto text-white bg-black border-2 rounded-3xl "
              onClick={() => ModalHandler()}
            >
              로그인
            </button>
            <ShowModal show={isModal} modalHandler={ModalHandler} />
            <button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
              {dropdownVisibility ? "Close" : "Open"}
            </button>
            <Dropdown visibility={dropdownVisibility}>
              <div className="">
                <div className="flex flex-col items-center justify-center h-10 hover:bg-slate-200 hover:text-green-500">
                  로그아웃
                </div>
                <div className="flex flex-col items-center justify-center h-10 hover:bg-slate-200 hover:text-green-500">
                  내 벨로그
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
