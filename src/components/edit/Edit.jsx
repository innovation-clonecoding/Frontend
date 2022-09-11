import React, { useState } from "react";
import styled from "styled-components";
import WriteFooter from "./EditFooter";
import WriteTextArea from "./EditTextArea";
import WriteTitle from "./EditTitle";
const Edit = (props) => {

  const handleChange = (e) => {
    props.setMarkdown(e.target.value)
  }

  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle />
        </div>
        <div>
          <WriteTextArea onChange={handleChange}/>
        </div>
      </StyledInnerDiv>
      <div>
        <WriteFooter />
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
