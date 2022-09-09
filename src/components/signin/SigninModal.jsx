import React from "react";
import Modal from "../modal/Modal";

function SigninModal({ show, modalHandler }) {
  console.log("show", show);
  return <>{show ? <Modal modalHandler={modalHandler} /> : null}</>;
}

export default SigninModal;
