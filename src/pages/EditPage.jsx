import React, { useEffect, useState } from 'react';
import Edit from '../components/edit/Edit';
import EditShow from '../components/edit/EditShow';
import styled from 'styled-components';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { userApis } from 'api/userApi';

const EditPage = () => {
	const [detail, setDetail] = useState(null);
  const getData = async () => {
		await axios.get(`http://15.164.163.50:8080/post/${postId}`).then((res) => {
			setDetail(res);
		});
	};
  const post = detail?.data.data
  console.log(post)
	useEffect(() => {
		getData();
	}, []);
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState('')
  const [image, setImage] = useState([])
  const [tag, setTag] = useState([]);
  const {postId} = useParams()
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      id: postId,
      title: title,
      content: markdown,
      imgUrl: image,
      tag: tag
    };
    userApis.editPost(data, postId)
    // await axios.patch(`http://15.164.163.50:8080/auth/post/${postId}`, data).then((res) => {
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log(err)
    // });
  };
  return (
    <StyledDiv>
      <Edit 
        setMarkdown={setMarkdown}
        onSubmit={onSubmitHandler}
        setTitle={setTitle}
        setImage={setImage}
        setTag={setTag}
        image={image}
        {...post}
      />
      <EditShow markdown={markdown}/>
    </StyledDiv>
  );
};

export default EditPage;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
