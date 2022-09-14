import React from 'react';
import styled from 'styled-components';
import {BsShareFill} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'
import { useState } from 'react';

const DetailFixedButton = ({likesNum}) => {

  const [alert, setAlert] = useState(false)

  const copyLink = (e) => {
    const like = window.location.href
    console.log(like)
    // e.clipboardData.setData("text", like)
    navigator.clipboard.writeText(like)
    setAlert(true)
    setTimeout(()=>{
      setAlert(false)
    },2500)
  }


  return (
    <>
      {alert&&<StyledAlert>링크가 복사되었습니다.</StyledAlert>}
    <StyledDiv>
      <StyledIcon><FaHeart/></StyledIcon>
      <StyledLikeNum>{likesNum}</StyledLikeNum>
      <StyledIcon><BsShareFill onClick={(e)=>{copyLink(e)}}/></StyledIcon>
    </StyledDiv></>
  );
};

export default DetailFixedButton;

const StyledDiv=styled.div`
background-color: #F8F9FA;
  position: fixed;
  top: 112px;
  width: 64px;
  height: 150px;
  border: 1px solid #F0F3F5;
  border-radius: 2rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  left: 1%;
`
const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #DEE2E5;
  border-radius: 1.5rem;
  background-color: white;
  cursor: pointer;
  color: #858E96;
  z-index:5;
  &:hover{
    color: black;
    border: 1px solid black;
  }
`
const StyledLikeNum = styled.div`
  margin-top: 0.5rem;
  line-height: 1;
  font-size: .75rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #51575D;
`
const StyledAlert = styled.div`
display: flex;
align-items: center;
justify-content: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  height: 80px;
  color: white;
  background-color: #05BC0C;
`