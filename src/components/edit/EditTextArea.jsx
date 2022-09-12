import React from "react";
import styled from "styled-components";

const EditTextArea = ({value, onChange}) => {
  const autoTextAreaReize = (e) => {
    const textArea = document.querySelector(".autoResize");

    if (textArea) {
      textArea.style.height = "auto";
      const height = textArea.scrollHeight;
      textArea.style.height = `${height + 8}px`;
    }
  };

  return (
    <StyledTextArea
      className="autoResize"
      placeholder="당신의 이야기를 적어보세요..."
      onKeyUp={autoTextAreaReize}
      onKeyDown={autoTextAreaReize}
      value={value}
      onChange={onChange}
    >기존 게시글이 이곳에 들어갑니다</StyledTextArea>
  );
};

export default EditTextArea;

const StyledTextArea = styled.textarea`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #333;
  font-size: 18px;
  max-height: 815px;
  width: 100%;
  resize: none;
  border: none;
  overflow-y: scroll;
  ::placeholder {
    color: #868e96;
    font-weight: 300;
    font-style: italic;
    font-size: 23px;
  }
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
