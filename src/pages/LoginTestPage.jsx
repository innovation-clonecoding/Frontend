import React from "react";
import ShowModal from "../components/modal/ShowModal";
import useChange from "../hooks/useChange";

function LoginTestPage() {
  const [isModal, ModalHandler] = useChange();
  return (
    <>
      <button onClick={() => ModalHandler()}>로그인</button>
      <ShowModal show={isModal} modalHandler={ModalHandler} />
    </>
  );
}

export default LoginTestPage;
