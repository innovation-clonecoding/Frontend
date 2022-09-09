import React from "react";
import styled from "styled-components";

const WriteTextArea = ({value, onChange}) => {
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
    ></StyledTextArea>
  );
};

export default WriteTextArea;

const StyledTextArea = styled.textarea`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #333;
  font-size: 25px;
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
