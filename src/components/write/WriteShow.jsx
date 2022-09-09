import React from "react";
import styled from "styled-components";
import remarkGfm from "remark-gfm";
import MarkdownPreview from "@uiw/react-markdown-preview"

const WriteShow = ({ markdown }) => {
  document.documentElement.setAttribute('data-color-mode', 'light')
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <MarkdownPreview style={{"fontSize":"25px", "backgroundColor":"#fbfdfc"}} source={markdown} />
      </StyledInnerDiv>
    </StyledDiv>
  );
};

export default WriteShow;

const StyledDiv = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  height: 100%;
  position: relative;
  background-color: #fbfdfc;
`;
const StyledInnerDiv = styled.div`
  margin: 80px 50px 50px;
`;
