import React, { useState } from "react";
import Write from "../components/write/Write";
import WriteShow from "../components/write/WriteShow";
import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";

const WritePage = () => {
  const [markdown, setMarkdown] = useState("");
  const title = useRef(null);
  const content = useRef(null);
  const imgUrl = useRef(null);
  const [tag, setTag] = useState([]);

  console.log(tag)
  const writeData = {
    title: title,
    content: content,
    imgUrl: imgUrl,
    setTag: setTag,
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      imgUrl: imgUrl,
      setTag: setTag,
    };
    await axios.post("http://localhost:3001/write", { data }).then((res) => {
      console.log(res);
    });
  };

  return (
    <StyledDiv>
      <Write
        setMarkdown={setMarkdown}
        onSubmit={onSubmitHandler}
        writeData={writeData}
      />
      <WriteShow markdown={markdown} />
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
