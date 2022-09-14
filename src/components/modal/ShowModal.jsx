import React, { useEffect } from "react";
import { getCookie } from "utils/Cookie";
import Modal from "./Modal";

function ShowModal({ show, modalHandler }) {
  return <>{show ? <Modal show={show} modalHandler={modalHandler} /> : null}</>;
}

export default ShowModal;
