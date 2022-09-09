import React from "react";
import SigninModal from "../components/signin/SigninModal";
import useShowModal from "../hooks/useShowModal";

function LoginTestPage() {
  const [isModal, ModalHandler] = useShowModal();
  return (
    <>
      <button onClick={() => ModalHandler()}>로그인</button>
      <SigninModal show={isModal} modalHandler={ModalHandler} />
    </>
  );
}

export default LoginTestPage;
