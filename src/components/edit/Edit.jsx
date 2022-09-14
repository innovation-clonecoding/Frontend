import React, { useState } from "react";
import styled from "styled-components";
import EditFooter from "./EditFooter";
import EditTextArea from "./EditTextArea";
import EditTitle from "./EditTitle";

const Edit = (props) => {
  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }
  const [header, setHeader] = useState('')
  const [textStyle, setTextStyle] = useState('')
  
const value = "게시글 내용"
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <EditTitle setTitle={props.setTitle} setImage={props.setImage} setTag={props.setTag} setHeader={setHeader} setTextStyle={setTextStyle}/>
        </div>
        <div>
          <EditTextArea onChange={handleChange} setContent={props.setContent} setImage={props.setImage} image={props.image} header={header} setHeader={setHeader} setTextStyle={setTextStyle} textStyle={textStyle} value={value}/>
        </div>
      </StyledInnerDiv>
      <div>
        <EditFooter onSubmit = {props.onSubmit}/>
      </div>
    </StyledDiv>
  );
};

export default Edit;
const StyledDiv = styled.div`
`;
const StyledInnerDiv = styled.div`
  margin: auto 2.5vw;
  overflow: hidden;
  height: 92.5%;
`;
