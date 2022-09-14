import React from "react";
import NavBar from "../components/navbar/NavBar";
import Myvelog from "../components/myvelog/Myvelog";
import useToken from "hooks/useToken";

function MyvelogPage() {
  const token = useToken();
  return (
    <>
      <NavBar />
      {token ? <Myvelog /> : alert("접근권한이 없습니다.")}
    </>
  );
}

export default MyvelogPage;
