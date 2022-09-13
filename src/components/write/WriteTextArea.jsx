import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const WriteTextArea = ({ image, onChange }) => {
  const [insertImage, setInsertImage] = useState([]);

  const autoTextAreaReize = (e) => {
    const textArea = document.querySelector(".autoResize");

    if (textArea) {
      textArea.style.height = "auto";
      const height = textArea.scrollHeight;
      textArea.style.height = `${height + 15}px`;
    }
  };
  useEffect(() => {
    if(image) {
      insertImg();
    }
  },[image]);

  const textArea = document.querySelector(".autoResize");

  const insertImg = () => {
    const textArea = document.querySelector(".autoResize");
    let textValue = textArea.value;
    let cursorPosition = textArea.selectionStart;
    const beforeCursor = textValue.substring(0, cursorPosition);
    const afterCursor = textValue.substring(
      textArea.selectionEnd,
      textValue.length
    );
    const addImg = image[image.length - 1];
    if(image.length>0){textArea.value = beforeCursor + "![](" + addImg + ")" + afterCursor}
    textArea.focus();
  };
  return (
    <>
      <StyledTextArea
        className="autoResize"
        placeholder="당신의 이야기를 적어보세요..."
        onKeyUp={autoTextAreaReize}
        onKeyDown={autoTextAreaReize}
        onChange={onChange}
      ></StyledTextArea>
    </>
  );
};

export default WriteTextArea;

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
