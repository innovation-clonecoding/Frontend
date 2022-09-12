import React, { useState } from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";
const Write = (props, {title, imgUrl, content, setTag}) => {
  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }

  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle title={title} imgUrl={imgUrl} setTag={setTag}/>
        </div>
        <div>
          <WriteTextArea onChange={handleChange} content={content} imgUrl={imgUrl}/>
        </div>
      </StyledInnerDiv>
      <div>
        <WriteFooter onSubmit = {props.onSubmit}/>
      </div>
    </StyledDiv>
  );
};

export default Write;
const StyledDiv = styled.div`
`;
const StyledInnerDiv = styled.div`
  margin: auto 2.5vw;
  overflow: hidden;
  height: 92.5%;
`;
