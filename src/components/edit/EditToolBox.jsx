import React, { useRef } from "react";
import styled from "styled-components";
import { TbH1, TbH2, TbH3, TbH4 } from "react-icons/tb";
import { BiBold, BiItalic } from "react-icons/bi";
import { MdFormatStrikethrough, MdCode } from "react-icons/md";
import { IoMdQuote, IoMdLink, IoMdImage } from "react-icons/io";
const EditToolBox = () => {
  const upLoadImg = useRef()
  const openFile = () => {
    upLoadImg.current.click()
  }
  return (
    <StyledDiv>
      <div>
        <TbH1 />
      </div>
      <div>
        <TbH2 />
      </div>
      <div>
        <TbH3 />
      </div>
      <div>
        <TbH4 />
      </div>
      <StyledDivision>|</StyledDivision>
      <div>
        <BiBold />
      </div>
      <div>
        <BiItalic />
      </div>
      <div>
        <MdFormatStrikethrough />
      </div>
      <StyledDivision>|</StyledDivision>
      <div>
        <IoMdQuote />
      </div>
      <div>
        <IoMdLink />
      </div>
      <div>
        <input type='file' ref={upLoadImg} style={{"display":"none"}}/>
        <IoMdImage onClick={openFile}/>
      </div>
      <div>
        <MdCode />
      </div>
    </StyledDiv>
  );
};

export default EditToolBox;

const StyledDiv = styled.div`
  display: flex;
  div {
    display: flex;
    height: 5vh;
    width: 3.7vw;
    font-size: 28px;
    color: #868e96;
    align-items: center;
    justify-content: center;
  }
  div:hover {
    background-color: #f8f9fa;
  }
`;
const StyledDivision = styled.p`
  font-weight: 100;
  display: flex;
  height: 5vh;
  width: 1vw;
  font-size: 30px;
  color: #d3dbe3;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;