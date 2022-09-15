import React, { useEffect } from "react";
import styled from "styled-components";

const EditTextArea = ({
  content,
  image,
  onChange,
  header,
  setHeader,
  textStyle,
  setTextStyle,
}) => {
  const autoTextAreaReize = (e) => {
    const textArea = document.querySelector(".autoResize");

    if (textArea) {
      textArea.style.height = "auto";
      const height = textArea.scrollHeight;
      textArea.style.height = `${height + 15}px`;
    }
  };
  useEffect(() => {
    if (image) {
      insertImg();
    }
  }, [image]);

  useEffect(() => {
    if (header) {
      insertHeader();
    }
  }, [header]);
  useEffect(() => {
    if (textStyle) {
      insertTextStyle();
    }
  }, [textStyle]);

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
    if (image.length > 0) {
      textArea.value = beforeCursor + "![](" + addImg + ")" + afterCursor;
    }
    textArea.focus();
  };
  const insertHeader = () => {
    const textArea = document.querySelector(".autoResize");
    let textValue = textArea.value;
    let cursorPosition = textArea.selectionStart;
    const beforeCursor = textValue.substring(0, cursorPosition);
    const arr = [...beforeCursor];
    const currentRow = arr.lastIndexOf("\n") + 1;
    const rowLength = cursorPosition - currentRow;
    const beforeRow = textValue.substring(0, cursorPosition - rowLength);
    const rowText = textValue.substring(currentRow);
    const afterCursor = textValue.substring(
      textArea.selectionEnd,
      textValue.length
    );
    textArea.focus();
    textArea.value = beforeRow + header + rowText + afterCursor;
    setHeader("");
  };

  const insertTextStyle = () => {
    const textArea = document.querySelector(".autoResize");
    let textValue = textArea.value;
    let cursorStartPosition = textArea.selectionStart;
    let cursorEndPosition = textArea.selectionEnd;
    const beforeCursor = textValue.substring(0, cursorStartPosition);
    const selectedCursor = textValue.substring(
      cursorStartPosition,
      cursorEndPosition
    );
    const afterCursor = textValue.substring(
      textArea.selectionEnd,
      textValue.length
    );
    const textMessage = "텍스트";
    const codeMessage = "코드를 입력하세요";
    textArea.focus();
    if (textStyle !== "```" && selectedCursor === "") {
      textArea.value =
        beforeCursor + textStyle + textMessage + textStyle + afterCursor;
    } else if (textStyle === "```" && selectedCursor) {
      textArea.value =
        beforeCursor +
        textStyle +
        "\n" +
        selectedCursor +
        "\n" +
        textStyle +
        afterCursor;
    } else if (textStyle === "```" && selectedCursor === "") {
      textArea.value =
        beforeCursor +
        textStyle +
        "\n" +
        codeMessage +
        "\n" +
        textStyle +
        afterCursor;
    } else {
      textArea.value =
        beforeCursor + textStyle + selectedCursor + textStyle + afterCursor;
    }
    console.log(selectedCursor);
    setTextStyle("");
  };
  return (
    <StyledTextArea
      className="autoResize"
      placeholder="당신의 이야기를 적어보세요..."
      onKeyUp={autoTextAreaReize}
      onKeyDown={autoTextAreaReize}
      defaultValue={content}
      onChange={onChange}
    ></StyledTextArea>
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
