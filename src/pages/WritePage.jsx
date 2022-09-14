import React, { useState } from "react";
import Write from "../components/write/Write";
import WriteShow from "../components/write/WriteShow";
import styled from "styled-components";
import axios from "axios";
import { userApis } from "api/userApi";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import useDecodeToken from "hooks/useDecodeToken";
import { useEffect } from "react";

const WritePage = () => {
  const token = useToken()
  const nickname = useDecodeToken(token)
  const [detail, setDetail] = useState(null)
  console.log(nickname)
  const getData = async () => {
    await axios.get(`http://15.164.163.50:8080/member/mypage/${nickname}`).then((res) => {
    console.log(detail)  
    setDetail(res.data.data);
    });
  };
useEffect(()=>{
  getData()
},[])
  const navigate = useNavigate()
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState('')
  const [image, setImage] = useState([])
  const [tag, setTag] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: markdown,
      imgUrl: image,
      tag: tag
    };
    userApis.newPost(data)
    // await axios.post("http://15.164.163.50:8080/auth/post", data).then((res) => {
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log(err)
    // });
    navigate(-1)
  };

return (
    <StyledDiv>
      <Write
        setMarkdown={setMarkdown}
        onSubmit={onSubmitHandler}
        setTitle={setTitle}
        setImage={setImage}
        setTag={setTag}
        image={image}
      />
      <WriteShow markdown={markdown}/>
    </StyledDiv>
  );
};

export default WritePage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
