import React, { useState } from "react";
import Write from "../components/write/Write";
import WriteShow from "../components/write/WriteShow";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const WritePage = () => {
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
    await axios.post("http://localhost:3001/write", { data }).then((res) => {
      console.log(res);
    });
  };
  const updateMarkdown = () => {
    let updateImg = [...image]
    setMarkdown(updateImg)
  }
  useEffect(()=>{
  },[])
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
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
