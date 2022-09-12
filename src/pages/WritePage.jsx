import React, { useState } from 'react';
import Write from '../components/write/Write';
import WriteShow from '../components/write/WriteShow';
import styled from 'styled-components';
import axios from 'axios';

const WritePage = () => {
  const [markdown, setMarkdown] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const title="title"
    const content="# h1, ## h2"
    const imgUrl="title"
    const tag="title"
    axios.post('http://localhost:3001/post',{title, content, imgUrl, tag})
    .catch(function(error){
      if(error.response){
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
      else if(error.request){
        console.log(error.request)
      }else{
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  }

  return (
    <StyledDiv>
      <Write setMarkdown={setMarkdown} onSubmit={onSubmitHandler}/>
      <WriteShow markdown={markdown}/>
    </StyledDiv>
  );
};

export default WritePage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`