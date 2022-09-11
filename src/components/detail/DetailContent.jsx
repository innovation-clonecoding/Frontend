import React from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const DetailContent = () => {
  document.documentElement.setAttribute("data-color-mode", "light");
  const example = `
  # This is a H1
  ## This is a H2
  ### This is a H3
  #### This is a H4
  ##### This is a H5
  ###### This is a H6
  > This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.
`
  return (
    <StyledDiv>
      <MarkdownPreview
        style={{ fontSize: "25px", backgroundColor: "#fbfdfc" }}
        source={example}
      />
    </StyledDiv>
  );
};

export default DetailContent;

const StyledDiv = styled.div`
`;
