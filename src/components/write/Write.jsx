import React from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";
const Write = (props) => {
  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }

  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle title={props.setTitle} imgUrl={props.SetImgUrl} setTag={props.setTag}/>
        </div>
        <div>
          <WriteTextArea onChange={handleChange} content={props.setContent} imgUrl={props.SetImgUrl}/>
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
