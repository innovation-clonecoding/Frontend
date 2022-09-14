import React from "react";
import { useState } from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";
const Write = (props) => {
  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }
  const [header, setHeader] = useState('')
  const [textStyle, setTextStyle] = useState('')
  
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle setTitle={props.setTitle} setImage={props.setImage} setTag={props.setTag} setHeader={setHeader} setTextStyle={setTextStyle}/>
        </div>
        <div>
          <WriteTextArea onChange={handleChange} setContent={props.setContent} setImage={props.setImage} image={props.image} header={header} setHeader={setHeader} setTextStyle={setTextStyle} textStyle={textStyle}/>
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
