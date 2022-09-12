import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import WriteToolBox from './WriteToolBox';

const WriteTitle = ({title, imgUrl, setTag}) => {

  const [tagItem, setTagItem] = useState('')
  const [tagList, setTagList] = useState([])

  const onKeyDown = e => {
    if(e.target.value !=='' && e.key === 'Enter'){
      submitTag()
    }
  }
  const submitTag = () => {
    let updatedTagList = [...tagList]
    updatedTagList.push(tagItem)
    const set = new Set(updatedTagList)
    const tagArr = [...set]
    setTagList(tagArr)
    const tagInput = document.querySelector('#tagInput')
    tagInput.value=null
  }
  const deleteTag = e => {
    const deleteItem = e.target.parentElement.firstChild.innerText
    const filterTag = tagList.filter(tagItem=>tagItem!==deleteItem)
    setTagList(filterTag)
    console.log(deleteItem)
  }
  console.log(tagList)
  return (
    <StyledDiv>
      <div>
        <StyledTitleInput ref={title} placeholder='제목을 입력하세요'/>
      </div>
      <hr style={{"height":"8px", "backgroundColor":"#495057", "border":"none", "width":"80px"}}/>
      <div className='elements'>
        {tagList.map((tagItem, idx)=>{
          return (
            <TagItem key={idx}>
              <Tag onClick={deleteTag}>{tagItem}</Tag>
            </TagItem>
          )
        })}
        <StyledTagInput id="tagInput" placeholder='태그를 입력하세요' onChange={e=>setTagItem(e.target.value)} onKeyDown={onKeyDown} tabIndex={2}/>
      </div>
      <div className='elements'>
        <WriteToolBox imgUrl={imgUrl}/>
      </div>
    </StyledDiv>
  );
};

export default WriteTitle;

const StyledDiv = styled.div`
width: 100%;
.elements{
  margin: 20px auto;
}
`
const StyledTitleInput = styled.input`
font-weight: 600;
height: 7vh;
width: 100%;
border: none;
font-size: 44px;
:focus{
  outline: none;
}
::placeholder{
  color: #868E96;
}
`
const StyledTagInput = styled.input`
background-color: transparent;
display: inline-flex;
outline: none;
cursor: text;
font-size: 1.125rem;
line-height: 2rem;
margin-bottom: 0.75rem;
min-width: 8rem;
border: none;
font-weight: 400;
:focus{
  outline: none;
}
::placeholder{
  color: #7E7E7E;
}
`
const TagItem = styled.div`
  background-color: #F8F9FA;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 1rem;
  margin: 0 0.75rem 0.75rem 0;
  cursor: pointer;
  transition: all 0.125s ease-in 0s;
  animation: 0.125s ease-in-out 0s 1 normal forwards running;
`
const Tag = styled.div`
  color: #14B886;
  font-size: 1rem;
`
const Button = styled.button`
  
`