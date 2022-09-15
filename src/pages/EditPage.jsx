import React, { useEffect, useState } from "react";
import Edit from "../components/edit/Edit";
import EditShow from "../components/edit/EditShow";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { userApis } from "api/userApi";

const EditPage = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const getData = async () => {
    await axios.get(`http://15.164.163.50:8080/post/${postId}`).then((res) => {
      setDetail(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
const [markdown, setMarkdown] = useState("");
  const [image, setImage] = useState([]);
  const { postId } = useParams();

  const onSubmitHandler = async () => {
    const data = {
      postId: postId,
      title: detail?.title,
      content: detail?.content,
      imgUrl: detail?.image,
      tag: detail?.tag,
    };
    userApis.editPost(data, postId);
    // await axios.patch(`http://15.164.163.50:8080/auth/post/${postId}`, data).then((res) => {
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log(err)
    // });
    navigate(`/detail/${postId}`);
  };
  const editTag = (tag) => {
    setDetail((prev) => ({ ...prev, tag})); //useState(prev) // prev State
  };
  const editTitle = (title)=> {
    setDetail((prev)=> ({ ...prev, title}))
  }
  const editContent = (content)=> {
    setDetail((prev)=> ({...prev, content}))
  }
  const editImg = (image)=>{
    setDetail((prev)=>({...prev, image}))
  }
  return (
    <StyledDiv>
      <Edit
        setMarkdown={setMarkdown}
        setContent={editContent}
        onSubmit={onSubmitHandler}
        setTitle={editTitle}
        setImage={editImg}
        setTag={editTag}
        image={image}
        {...detail}
      />
      <EditShow markdown={markdown} />
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
