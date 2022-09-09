import React from "react";
import styled from "styled-components";
import WriteFooter from "./WriteFooter";
import WriteTextArea from "./WriteTextArea";
import WriteTitle from "./WriteTitle";

const Write = () => {
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <div>
          <WriteTitle />
        </div>
        <div>
          <WriteTextArea />
        </div>
      </StyledInnerDiv>
      <div>
        <WriteFooter />
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
