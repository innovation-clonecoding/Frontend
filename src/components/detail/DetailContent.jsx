import React from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const DetailContent = ({ content }) => {
	document.documentElement.setAttribute("data-color-mode", "light");

	return (
		<StyledDiv>
			<MarkdownPreview
				style={{ fontSize: "25px", backgroundColor: "#fbfdfc" }}
				source={content}
			/>
		</StyledDiv>
	);
};

export default DetailContent;

const StyledDiv = styled.div``;
